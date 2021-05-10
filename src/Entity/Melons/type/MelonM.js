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
    this.hitTest = true;
    this.melonSpeedY = 2.2;
    this.melonSpeedX = 0.6;

    this.melonHeightBounce = 100;

    this.melonBottomBounce = 520;


    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, x, y, 130, 82, "", "melon");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.MelonM.prototype = Object.create(game.entity.Melon.prototype);
game.entity.MelonM.prototype.constructor = game.entity.MelonM;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.MelonM.prototype.init = function() {
    game.entity.Melon.prototype.init.call(this);
    this.hitbox.set(10,10,60,60);     
 };


game.entity.MelonM.prototype.m_onDie = function() {
    console.log("DIE");
    if (this.hitTest) {
        for (var i = 0; i < 2; i++) {
            var smallMelon = new game.entity.MelonS(this.x, this.y);
            this.parent.addChild(smallMelon);
            if (i == 0) {
                smallMelon.x -= 50;
                smallMelon.velocity.x -= 1;
                console.log(smallMelon.x);

            }
            if (i == 1) {
                smallMelon.x += 50;
                smallMelon.velocity.x += 2;

            }
        }
        this.hitTest = false;
    }
    game.entity.Melon.prototype.m_onDie.call(this);
};
game.entity.MelonM.prototype.melonAnimation = function() {
    game.entity.Melon.prototype.melonAnimation.call(this);

     this.animations.add(
         "split", [1, 2, 3, 4, 5,6,7,8],
         20,
         false
     );
     this.animations.gotoAndPlay("split");
};
