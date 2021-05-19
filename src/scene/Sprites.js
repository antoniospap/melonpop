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
 *.Character state.
 */
 game.scene.Sprites = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 100,100, 150,60, "", "backtomenu");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.scene.Sprites.prototype = Object.create(rune.display.Sprite.prototype);
game.scene.Sprites.prototype.constructor = game.scene.Sprites;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Sprites.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.animations.add(
        "change", [0,1],
        1,
        true
    );
};

/**
 * @inheritDoc
 */
game.scene.Sprites.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.animations.gotoAndPlay("change");
};