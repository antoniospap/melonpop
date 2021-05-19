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
game.entity.Bullet = function(playerX, playerY) {
    this.playerX = playerX;
    this.playerY = playerY;
    this.sound;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, this.playerX, this.playerY, 10, 10, "", "bullet");
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

    this.sound = this.application.sounds.sound.get("melonstab"); // eller pop

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


game.entity.Bullet.prototype.m_bulletMotion = function() {
    this.y -= 5;
};

game.entity.Bullet.prototype.m_checkHitbox = function(step) {
    var objects = this.stage.getChildren();
    var self = this;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i] instanceof game.entity.Melon) {
            if (this.intersects(objects[i])) {
                this.sound.play();
                objects[i].melonAnimation();
                this.stage.removeChild(this, true);
            }
        }
    }
};