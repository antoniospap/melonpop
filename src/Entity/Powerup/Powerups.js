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
game.entity.Powerups = function() {
    this.shieldDrop;
    this.shield;
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

game.entity.Powerups.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Powerups.prototype.constructor = game.entity.Powerups;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.initShield();
};

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    if (this.shieldDrop != null) {
        this.shieldDrop.y += 2;
    }
};

/**
 * @inheritDoc
 */
game.entity.Powerups.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

game.entity.Powerups.prototype.initShield = function() {
    this.shieldDrop = new rune.display.Graphic(300,0,60,60,"","extrabullet");
    this.stage.addChild(this.shieldDrop);
};
