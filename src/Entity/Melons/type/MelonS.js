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
    this.parent.removeChild(this, true);
    console.log(obj);
    // for (i = 0; i < obj.length; i++) {
    //}
};