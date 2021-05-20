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

    
    this.m_outputText()

    
};

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.keyboard.justPressed("enter")){
        this.application.scenes.load([new game.scene.Menu()]);
    }
    
};

game.scene.Howto.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "", "howtoplaybkrd");
    this.stage.addChild(this.m_bkgd);
    this.m_bkgd.alpha = 0.6;
};

game.scene.Howto.prototype.m_outputText = function() {
    var text = new rune.text.BitmapField("Shoot all the melons and don't get hit!")
    text.width = 600
    text.centerX = this.application.screen.centerX;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 100;
    this.stage.addChild(text);

    var text = new rune.text.BitmapField("Controls:")
    // text.width = 600
    text.centerX = this.application.screen.centerX - 50;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 200;
    this.stage.addChild(text);


    var text = new rune.text.BitmapField("Move: A <- -> D")
    // text.width = 600
    text.centerX = this.application.screen.centerX -50;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 250;
    this.stage.addChild(text);

    var text = new rune.text.BitmapField("Shoot: Space")
    // text.width = 600
    text.centerX = this.application.screen.centerX - 50;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 300;
    this.stage.addChild(text);


    var text = new rune.text.BitmapField("Back to menu")
    // text.width = 600
    text.centerX = this.application.screen.centerX - 50;
    text.scaleX = 4;
    text.scaleY = 4;
    text.y = 460;
    this.stage.addChild(text);

    var slingShot = new rune.display.Graphic(470, 460, 30, 30, "", "slangbella");

    this.stage.addChild(slingShot)


};

