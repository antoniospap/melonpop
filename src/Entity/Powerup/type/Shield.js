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
game.entity.Shield = function(stage) {
    this.game = stage;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Powerups.call(this, 300, 300, 60, 60, "", "extrabullet", stage);
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


game.entity.Shield.prototype.catchShield = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.game.player.gotShield = true;
        self.parent.removeChild(self);
        self.game.player.getShield();
    });
};