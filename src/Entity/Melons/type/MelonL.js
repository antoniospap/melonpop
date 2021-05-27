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
game.entity.MelonL = function(spawnX = -20, spawnY = 50) {
    this.hitTest = true;
    this.melonSpeedY = 2;
    this.melonSpeedX = 0.7;

    this.melonHeightBounce = 200;

    this.melonBottomBounce = 480;

    this.melonMaxX = 1100;
    this.melonMaxLeftX = -20;



    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, spawnX, spawnY, 227.5, 122, "", "melonL");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.MelonL.prototype = Object.create(game.entity.Melon.prototype);
game.entity.MelonL.prototype.constructor = game.entity.MelonL;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.MelonL.prototype.init = function() {
    game.entity.Melon.prototype.init.call(this);
    this.hitbox.set(60, 10, 100, 100);

    this.score += 3;

};

game.entity.MelonL.prototype.m_onDie = function() {
    if (this.hitTest) {
        for (var i = 0; i < 2; i++) {
            var melonM = new game.entity.MelonM(this.x, this.y);
            melonM.y -= 100;
            melonM.velocity.y -= 5;

            if (i == 0) {
                melonM.x -= 50;
                melonM.velocity.x -= 1;
            }
            if (i == 1) {
                melonM.x += 50;
            }
            this.parent.addChild(melonM);
        }
        this.hitTest = false;
    }
    game.entity.Melon.prototype.m_onDie.call(this);
};