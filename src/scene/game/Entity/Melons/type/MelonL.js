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
    console.log("MELON LARGExdsd");
    // console.log();
    var centerX = this.x + this.width / 2;
    var centerY = this.y + this.height / 2;
    for (var i = 0; i < 2; i++) {
        var melonM = new game.entity.MelonM(centerX, centerY);
        this.parent.addChild(melonM);

        if (i == 0) {
            melonM.x -= 50;
        }
    }
};