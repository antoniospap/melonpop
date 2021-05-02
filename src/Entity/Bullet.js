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
    this.playerX = playerX;
    this.playerY = playerY;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, this.playerX, this.playerY, 10, 10, "", "testbull");
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
};

/**
 * @inheritDoc
 */
game.entity.Bullet.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_bulletMotion();
    this.m_checkHitbox();

};

/**
 * @inheritDoc
 */
game.entity.Bullet.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};


game.entity.Bullet.prototype.m_bulletMotion = function() {
    this.y -= 5;
};

game.entity.Bullet.prototype.m_checkHitbox = function() {
    var objects = this.stage.getChildren();
    for (i = 0; i < objects.length; i++) {
        if (objects[i] instanceof game.entity.Melon) {
            if (this.intersects(objects[i])) {
                this.stage.removeChild(this, true);
                objects[i].m_onDie(objects);
            }
        }
    }
};