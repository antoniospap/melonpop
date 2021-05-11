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
game.entity.Powerups = function(game) {
    this.shieldDrop;
    this.shield;
    this.game = game;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 300, 0, 60, 60, "", "extrabullet");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Powerups.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Powerups.prototype.constructor = game.entity.Powerups;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
};

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    if (this != null) {
        this.y += 2;
    }
    this.catchShield();
};

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

game.entity.Powerups.prototype.catchShield = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.parent.removeChild(self);
        console.log("POWERUP");
    })
};