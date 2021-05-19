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

    this.melonHeightBounce = 400;

    this.melonBottomBounce = 530;

    this.melonMaxX = 1230;


    //--------------------------------------------------------------------------
    // Super call-
    //-------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, x, y, 40, 40, "", "MelonSidle");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.MelonS.prototype = Object.create(game.entity.Melon.prototype);
game.entity.MelonS.prototype.constructor = game.entity.MelonS;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.MelonS.prototype.init = function() {
    game.entity.Melon.prototype.init.call(this);
    this.hitbox.set(5,5,30,30);
    this.score += 1;
 };


game.entity.MelonS.prototype.m_onDie = function() {
    game.entity.Melon.prototype.m_onDie.call(this);
};

game.entity.MelonS.prototype.initHitbox = function() {
    this.hitbox.set(50,50,50,50);
};

