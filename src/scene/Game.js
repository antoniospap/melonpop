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
game.scene.Game = function() {
    this.melonL = null;
    this.player = null;
    this.wave;

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

game.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Game.prototype.constructor = game.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.m_initBackground()

    this.player = new game.entity.Character();
    this.stage.addChild(this.player);
    this.wave = new game.wave.Wave01(this.stage);
};

/**
 * @inheritDoc
 */
game.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.wave.update(step);
    
    if (this.wave.checkWave()){
        console.log("WAVE DONE");
    }
};

/**
 * @inheritDoc
 */
game.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
game.scene.Game.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "#FF00FF",
        "bakgrund"
    );
    this.stage.addChild(this.m_bkgd);
};