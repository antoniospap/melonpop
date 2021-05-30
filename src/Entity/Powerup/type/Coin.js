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
game.entity.Coin = function(stage) {
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
    game.entity.Powerups.call(this, Math.floor(Math.random() * 1200), 0, 40, 40, "", "coinshine", stage);
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

    this.sound = this.application.sounds.sound.get("coins");
};

game.entity.Coin.prototype.update = function(step) {
    game.entity.Powerups.prototype.update.call(this, step);
    this.rotation += 2;
};

game.entity.Coin.prototype.catchPowerup = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.sound.play();
        self.parent.removeChild(self);
        self.getCoin();
    });
};

game.entity.Coin.prototype.getCoin = function() {
    this.application.scenes.selected.score.value += 30;
};