//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 *
 *.Bullet state.
 */
game.entity.Coin = function(randomX, stage) {
    this.game = stage;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Powerups.call(this, randomX, 0, 40, 44.5, "", "coin", stage);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Coin.prototype = Object.create(game.entity.Powerups.prototype);
game.entity.Coin.prototype.constructor = game.entity.Coin;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.Coin.prototype.init = function() {
    game.entity.Powerups.prototype.init.call(this);

    this.animations.add(
        "spin", [0, 1, 2, 3],
        7,
        true
    );
    this.hitbox.set(5, 5, 30, 30);
};

game.entity.Coin.prototype.update = function(step) {
    game.entity.Powerups.prototype.update.call(this, step);
    this.rotation += 2;

    if (this.y >= 550) {
        this.y = 550;
    }
};


game.entity.Coin.prototype.catchPowerup = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.parent.removeChild(self);
        self.getCoin();
    });
};

game.entity.Coin.prototype.getCoin = function() {
    this.application.scenes.selected.score.value += 100;
};