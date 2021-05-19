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

    this.m_initBackground();

    var keyboardimg = new rune.display.Graphic(200, 300, 251, 61, "", "keyboard");
    this.stage.addChild(keyboardimg);

    var backtomenu = new game.scene.Sprites();
    this.stage.addChild(backtomenu);
};

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.keyboard.justPressed("backspace")){
        this.application.scenes.load([new game.scene.Menu()]);
    }
    
};

game.scene.Howto.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "", "howtoplaybkrd");
    this.stage.addChild(this.m_bkgd);
    this.m_bkgd.alpha = 0.6;
};

