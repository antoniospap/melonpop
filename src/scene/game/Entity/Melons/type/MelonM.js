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
game.entity.MelonM = function(x, y) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, x, y, 40, 40, "", "melonM");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.MelonM.prototype = Object.create(game.entity.Melon.prototype);
game.entity.MelonM.prototype.constructor = game.entity.MelonM;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------




game.entity.MelonM.prototype.m_onDie = function() {
    /* for (var i = 0; i < 2; i++) {
         var smallerMellon = new game.entity.MelonM();
         this.parent.addChild(smallerMellon);
     }
     */
    console.log("MELON MEDIUM");
};