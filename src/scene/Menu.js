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
     this.highScore;

     this.menu = [];
     this.selectedIndex = 0;
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

    this.playBtn =  new rune.text.BitmapField("PLAY")
    this.playBtn.center = this.application.screen.center;
    this.stage.addChild(this.playBtn);

    this.howToPlay = new rune.text.BitmapField("HOW TO PLAY");
    this.howToPlay.center = this.application.screen.center;
    this.howToPlay.y += 40;
    this.howToPlay.x -= 80;
    this.stage.addChild(this.howToPlay);

    this.highScore = new rune.text.BitmapField("HIGHSCORE");
    this.highScore.center = this.application.screen.center;
    this.highScore.y += 80;
    this.highScore.x -= 60;
    this.stage.addChild(this.highScore);

    this.menu = [this.playBtn, this.howToPlay, this.highScore];
    for (var i = 0; i < this.menu.length; i++){
        this.menu[i].scaleX = 4;
        this.menu[i].scaleY = 4;
        this.menu[i].alpha = 0.5;
    }
};

/**
 * @inheritDoc
 */
game.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.getCurrentIndex();
    this.showSelected();
};

/**
 * @inheritDoc
 */
game.scene.Menu.prototype.getCurrentIndex = function() {
    if (this.keyboard.justPressed("down")){
        this.selectedIndex++;
        if (this.selectedIndex == this.menu.length){
            this.selectedIndex = 0;
        }
    } else if (this.keyboard.justPressed("up")){
        this.selectedIndex--;
        if (this.selectedIndex == -1){
            this.selectedIndex = this.menu.length - 1;
        }
    }   
};

game.scene.Menu.prototype.showSelected = function() {
    for (var i = 0; i<this.menu.length; i++){
        if (this.selectedIndex == i){
            this.menu[i].alpha = 1;
        } else {
            this.menu[i].alpha = 0.5;
        }
    }
};
