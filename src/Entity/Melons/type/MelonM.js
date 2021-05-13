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

    this.timers;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Melon.call(this, x, y, 130, 82, "", "melonM");
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
    this.hitbox.set(35, 10, 60, 65);
    this.score += 1;
};

game.entity.MelonM.prototype.update = function(step) {
    game.entity.Melon.prototype.update.call(this, step);
    this.timers.update(step);
};


game.entity.MelonM.prototype.m_onDie = function() {
    if (this.hitTest) {
        for (var i = 0; i < 2; i++) {
            var smallMelon = new game.entity.MelonS(this.x, this.y);
            this.parent.addChild(smallMelon);
            if (i == 0) {
                smallMelon.x -= 50;
                smallMelon.velocity.x -= 1;
            }
            if (i == 1) {
                smallMelon.x += 50;
            }
        }
        this.hitTest = false;
    }
    game.entity.Melon.prototype.m_onDie.call(this);
};