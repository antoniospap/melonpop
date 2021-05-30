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
 *.Character state.
 */
game.entity.Clouds = function(x, y, texture, speed) {
    this.speed = speed;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, x, y, 300, 150, "", texture);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Clouds.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Clouds.prototype.constructor = game.entity.Clouds;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Clouds.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
};

/**
 * @inheritDoc
 */
game.entity.Clouds.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_cloudMotion();
};

/**
 * @inheritDoc
 */
game.entity.Clouds.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

game.entity.Clouds.prototype.m_cloudMotion = function() {
    this.x -= this.speed;

    if (this.x <= -290) {
        this.x = 1300;
    }
};