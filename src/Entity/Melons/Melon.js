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

    this.scaleImgX;
    this.scaleImgY;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, x, y, width, height, color, texture);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Melon.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Melon.prototype.constructor = game.entity.Melon;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.scaleX = this.scaleImgX;
    this.scaleY = this.scaleImgY;

};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_bounceMotion();
    this.m_windowLimit();
    this.rotation += 1
};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};
game.entity.Melon.prototype.m_bounceMotion = function() {
    if (this.m_bounceY == false) {
        this.y += this.melonSpeedY;
    } else {
        this.y -= this.melonSpeedY;
    }

    if (this.m_bounceX == false){
        this.x += this.melonSpeedX;
    } else {
        this.x -= this.melonSpeedX;
    }
};

game.entity.Melon.prototype.m_windowLimit = function() {
    if (this.y >= 530) { //avgränsar melonen inom Y-axlen, botten
        this.m_bounceY = true;
    } else if (this.y <= this.melonHeightBounce) { //om den når toppen av skärmen
        this.m_bounceY = false
    }

    if (this.x >= 1230) { //avgränsar så att melonen inte studras utanför x-leden, höger
        this.m_bounceX = true;
        console.log('hejj')
        // this.rotation -= 40
    } else if (this.x <= -20) { //vänster
        this.m_bounceX = false;
    }
};

game.entity.Melon.prototype.m_onDie = function() {
    this.active = false;
    this.parent.removeChild(this, false);
};