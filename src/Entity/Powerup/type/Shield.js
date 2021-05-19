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
game.entity.Shield = function(randomX, stage) {
    this.game = stage;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Powerups.call(this, randomX, 0, 60, 60, "", "fallingshield", stage);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Shield.prototype = Object.create(game.entity.Powerups.prototype);
game.entity.Shield.prototype.constructor = game.entity.Shield;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.Shield.prototype.init = function() {
    game.entity.Powerups.prototype.init.call(this);
};

game.entity.Shield.prototype.update = function(step) {
    game.entity.Powerups.prototype.update.call(this, step);
};


game.entity.Shield.prototype.catchPowerup = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.parent.removeChild(self);
        self.game.player.gotShield = true;
        self.game.player.getShield();
    });
};