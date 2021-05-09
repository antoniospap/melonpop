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
game.entity.ExtraBullet = function() {


    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.entity.Powerups.call(this, 300, 300, 284, 204, "", "extrabullet");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.ExtraBullet.prototype = Object.create(game.entity.Powerups.prototype);
game.entity.ExtraBullet.prototype.constructor = game.entity.ExtraBullet;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

game.entity.ExtraBullet.prototype.init = function() {
    game.entity.Powerups.prototype.init.call(this);
    var objects = this.stage.getChildren();
    console.log(objects);
};