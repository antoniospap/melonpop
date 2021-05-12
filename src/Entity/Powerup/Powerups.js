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
game.entity.Powerups = function(x, y, width, height, color, texture, stage) {
    this.game = stage;
    this.gotShield = false;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, x, y, width, height, color, texture);
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
    this.rotation += 2;

    this.catchShield();
};

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};