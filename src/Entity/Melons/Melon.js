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
game.entity.Melon = function(x, y, width, height, color, texture) {
    this.m_bounceY = false;
    this.m_bounceX = false;
    this.melonSpeedY;
    this.melonSpeedX;

    this.melonHeightBounce;
    this.melonBottomBounce;

    this.melonMaxX;

    this.score = 0;
    this.timers;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.physics.Body.call(this, x, y, width, height, color, texture);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Melon.prototype = Object.create(rune.physics.Body.prototype);
game.entity.Melon.prototype.constructor = game.entity.Melon;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.init = function() {
    rune.physics.Body.prototype.init.call(this);
    this.initHitbox();
    this.timers = new rune.timer.Timers();

};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.update = function(step) {
    rune.physics.Body.prototype.update.call(this, step);
    this.m_bounceMotion();
    this.m_windowLimit(step);
    this.rotation += 2;
    this.timers.update(step);
};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.dispose = function() {
    rune.physics.Body.prototype.dispose.call(this);
};
game.entity.Melon.prototype.m_bounceMotion = function() {
    if (this.m_bounceY == false) {
        this.y += this.melonSpeedY;
    } else {
        this.y -= this.melonSpeedY;
    }

    if (this.m_bounceX == false) {
        this.x += this.melonSpeedX;
    } else {
        this.x -= this.melonSpeedX;
    }
};

game.entity.Melon.prototype.m_windowLimit = function(step) {
    if (this.y >= this.melonBottomBounce) { //avgränsar melonen inom Y-axlen, botten
        this.m_bounceY = true;
    } else if (this.y <= this.melonHeightBounce) { //om den når toppen av skärmen
        this.m_bounceY = false
    }
    if (this.x >= this.melonMaxX) { //avgränsar så att melonen inte studras utanför x-leden, höger
        this.m_bounceX = true;
        this.velocity.x = false;
    } else if (this.x <= -20) { //vänster
        this.m_bounceX = false;
        this.velocity.x = false;
    }
};

game.entity.Melon.prototype.m_onDie = function() {
    this.active = false;
    this.parent.removeChild(this, false);
    this.application.scenes.selected.score.value += this.score;
};


game.entity.Melon.prototype.initHitbox = function() {};

game.entity.Melon.prototype.melonAnimation = function() {
    this.timers.create({
        duration: 500,
        scope: this,
        onComplete: function() {
            this.m_onDie();
        }
    });

    this.animations.add(
        "split", [1, 2, 3, 4, 5, 6, 7, 8],
        20,
        false
    );
    this.animations.gotoAndPlay("split");
};