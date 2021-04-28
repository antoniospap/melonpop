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
};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_bounceMotion();
};

/**
 * @inheritDoc
 */
game.entity.Melon.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};
game.entity.Melon.prototype.m_bounceMotion = function() {
    if (this.m_bounceY == false) {
        this.y += 3

    } else {
        this.y -= 3
    }
    if (this.m_bounceX == false){
        this.x += 0.5;
    } else {
        this.x -= 0.5;
    }

    if (this.y == 530) { //avgränsar melonen inom Y-axlen
        this.m_bounceY = true
    } else if (this.y == 20) { //om den når toppen av skärmen
        this.m_bounceY = false
    }

    if (this.x == 1230) { //avgränsar så att melonen inte studras utanför x-leden
        this.m_bounceX = true;
    } else if (this.x == -20) { //vänster
        this.m_bounceX = false;
    }
};

game.entity.Melon.prototype.m_onDie = function() {};