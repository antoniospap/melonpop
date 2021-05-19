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
    this.delay = 10000;
    this.coinRemove = true;
    this.sound;
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
        5,
        true
    );
    this.hitbox.set(5, 5, 30, 30);
    console.log(this.sound);

    this.sound = this.application.sounds.sound.get("coins");
};

game.entity.Coin.prototype.update = function(step) {
    game.entity.Powerups.prototype.update.call(this, step);
    this.rotation += 2;
    if (this.y >= 550) {
        this.y = 550;
        this.delay -= step;
        if (this.delay <= 0) {
            this.coinDisapear();
        }
    }

};
game.entity.Coin.prototype.coinDisapear = function() {
    var self = this;
    if (this.coinRemove) {
        this.flicker(3000, 300, function() {
            self.parent.removeChild(self)
        }, this);
    }
    this.coinRemove = false;
};


game.entity.Coin.prototype.catchPowerup = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.parent.removeChild(self);
        self.getCoin();
        this.sound.play();
    });
};

game.entity.Coin.prototype.getCoin = function() {
    this.application.scenes.selected.score.value += 100;
};