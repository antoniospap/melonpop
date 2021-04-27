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
 game.scene.Menu = function() {
     this.playBtn;
     this.howToPlay;
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

game.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Menu.prototype.constructor = game.scene.Menu;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Menu.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

    var description =  new rune.text.BitmapField("Arrows + enter");
    description.y += 200;
    description.x += 100;
    description.scaleX = 2;
    description.scaleY = 2;
    this.stage.addChild(description);

    this.playBtn =  new rune.text.BitmapField("PLAY")
    this.playBtn.center = this.application.screen.center;
    this.playBtn.scaleX = 4;
    this.playBtn.scaleY = 4;
    this.stage.addChild(this.playBtn);


    this.howToPlay = new rune.text.BitmapField("HOW TO PLAY");
    this.howToPlay.center = this.application.screen.center;
    this.howToPlay.y += 40;
    this.howToPlay.x -= 80;

    this.howToPlay.alpha = 0.2;
    this.howToPlay.scaleX = 4;
    this.howToPlay.scaleY = 4;
    this.stage.addChild(this.howToPlay);

};

/**
 * @inheritDoc
 */
game.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    if (this.keyboard.justPressed("up")){
        this.playBtn.alpha = 1;
        this.howToPlay.alpha = 0.2;
    } else if (this.keyboard.justPressed("down")){
        this.playBtn.alpha = 0.2;
        this.howToPlay.alpha = 1;
    }

    if (this.keyboard.justPressed("enter") && this.playBtn.alpha == 1){
        this.application.scenes.load([new game.scene.Game()])
    } else if (this.keyboard.justPressed("enter") && this.howToPlay.alpha == 1){
        //this.application.scenes.load([new game.scene.Game()])
        console.log("HOW TO PLAY");
    }
};

/**
 * @inheritDoc
 */
game.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
