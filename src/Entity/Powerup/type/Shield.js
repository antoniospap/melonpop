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
game.entity.Shield = function(stage) {
    this.game = stage;
    this.delay = 10000;
    this.shieldRemove = true;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Powerups.call(this, Math.floor(Math.random() * 1200), 0, 60, 60, "", "fallingshield", stage);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Shield.prototype = Object.create(game.entity.Powerups.prototype);
game.entity.Shield.prototype.constructor = game.entity.Shield;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.Shield.prototype.init = function() {
    game.entity.Powerups.prototype.init.call(this);
};

game.entity.Shield.prototype.update = function(step) {
    game.entity.Powerups.prototype.update.call(this, step);

    if (this.y >= 550) {
        this.y = 550;
        this.delay -= step;
        if (this.delay <= 0) {
            this.shieldDisapear();
        }
    }
};
game.entity.Shield.prototype.shieldDisapear = function() {
    var self = this;
    if (this.shieldRemove) {
        this.flicker(3000, 300, function() {
            self.parent.removeChild(self)
        }, this);
    }
    this.shieldRemove = false;
};


game.entity.Shield.prototype.catchPowerup = function() {
    var self = this;
    this.game.player.hitTestObject(this, function() {
        self.parent.removeChild(self);
        self.game.player.gotShield = true;
        self.game.player.getShield();
    });
};