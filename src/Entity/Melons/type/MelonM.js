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
game.entity.MelonM = function(x = -20, y = 50) {

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
    var centerX = this.x + this.width / 2;
    var centerY = this.y + this.height / 2;
    for (var i = 0; i < 2; i++) {
         var smallMelon = new game.entity.MelonS(centerX, centerY);
         this.parent.addChild(smallMelon);
         if (i == 0) {
            smallMelon.x -= 50;
        }
     }
     
};