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
game.entity.Bullet = function(playerX, playerY, melon) {
    this.m_bullets = null;
    this.playerX = playerX;
    this.playerY = playerY;
    this.melon = melon

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Bullet.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Bullet.prototype.constructor = game.entity.Bullet;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Bullet.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.m_initBullets();
};

/**
 * @inheritDoc
 */
game.entity.Bullet.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_bulletMotion();
    this.m_checkHitbox(step);
    
};

/**
 * @inheritDoc
 */
game.entity.Bullet.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);

};
game.entity.Bullet.prototype.m_initBullets = function() {
    this.m_bullets = new rune.display.Sprite(
        this.playerX,
        this.playerY,
        10,
        10,
        "",
        "testbull"
    );
    this.stage.addChild(this.m_bullets);
};

game.entity.Bullet.prototype.m_bulletMotion = function() {
    this.m_bullets.y -= 5;
};

game.entity.Bullet.prototype.m_checkHitbox = function() {

        if(this.m_bullets.intersects(this.melon)){
            this.stage.removeChild(this.m_bullets);
            this.melon.m_onDie();
        }

};