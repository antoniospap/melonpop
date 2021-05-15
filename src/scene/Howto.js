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
 * Game state.
 */
game.scene.Howto = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.scene.Howto.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Howto.prototype.constructor = game.scene.Howto;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

    this.highScore = new rune.text.BitmapField("HIGHSCORE");
    this.highScore.center = this.application.screen.center;
    this.highScore.y += 80;
    this.highScore.x -= 60;
    this.highScore.scaleY = 10;
    this.stage.addChild(this.highScore);
};

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

};

/**
 * @inheritDoc
 */