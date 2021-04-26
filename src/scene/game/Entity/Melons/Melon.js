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
game.entity.Melon = function(x, y, width, height, color, texture) {
    this.m_bounce = false;
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

game.entity.Melon.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Melon.prototype.constructor = game.entity.Melon;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_bounceMotion();

    if (this.keyboard.justPressed("K")) {
        this.m_onDie();
    }
};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};
game.entity.Melon.prototype.m_bounceMotion = function() {
    if (this.m_bounce == false) {
        this.y += 1
        this.x += 0.3;
    } else {
        this.y -= 1
        this.x += 0.3;
    }
    if (this.y == 140) {
        this.m_bounce = true
    }
    if (this.y == 20) {
        this.m_bounce = false
    }
};

game.entity.Melon.prototype.m_onDie = function() {
    console.log("yo123");
};