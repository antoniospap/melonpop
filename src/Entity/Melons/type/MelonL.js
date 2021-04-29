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
game.entity.MelonL = function() {
    this.hitTest = true;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, -20, 50, 40, 40, "", "melonL");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.MelonL.prototype = Object.create(game.entity.Melon.prototype);
game.entity.MelonL.prototype.constructor = game.entity.MelonL;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.MelonL.prototype.m_onDie = function() {

    if (this.hitTest) {
        for (var i = 0; i < 2; i++) {
            var melonM = new game.entity.MelonM(this.x, this.y);
            this.parent.addChild(melonM);

            if (i == 0) {
                melonM.x -= 50;
            }
            if (i == 1) {
                melonM.x += 50;
            }
        }
    this.hitTest = false;
}
this.parent.removeChild(this, true);
};
