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
game.entity.MelonS = function(x, y) {
    this.melonSpeedY = 2.4;
    this.melonSpeedX = 0.7;

    this.melonHeightBounce = 300;

    this.scaleImgX = 1;
    this.scaleImgY = 1;
    //--------------------------------------------------------------------------
    // Super call-
    //-------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, x, y, 40, 40, "", "melonS");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.MelonS.prototype = Object.create(game.entity.Melon.prototype);
game.entity.MelonS.prototype.constructor = game.entity.MelonS;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------




game.entity.MelonS.prototype.m_onDie = function(obj) {
    game.entity.Melon.prototype.m_onDie.call(this);
};