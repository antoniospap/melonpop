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
game.scene.Highscore = function(score,name) {
    this.hs;
    this.score = score;
    this.name = name;
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

game.scene.Highscore.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Highscore.prototype.constructor = game.scene.Highscore;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Highscore.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.m_initBackground()
    this.m_backToMenu()
    var hsArr = [];
    this.hs = new rune.data.Highscores("hs", 0, 5);
    if (this.score != undefined) {
        this.hs.send(this.score,this.name);
    }

    for (var i = 0; i < 5; i++) {
        var l = this.hs.get(i);
        hsArr.push(l);
    }
    this.showHighscoreTable(hsArr);


};

/**
 * @inheritDoc
 */
game.scene.Highscore.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.keyboard.justPressed("enter")){
        this.application.scenes.load([new game.scene.Menu()]);
    }
};

game.scene.Highscore.prototype.showHighscoreTable = function(highscores) {
    var yCords = [200, 250, 300, 350, 400];
    var hsDesc = new rune.text.BitmapField("Highscores");
    hsDesc.centerX = this.application.screen.centerX - 20;
    hsDesc.y = 100;
    hsDesc.scaleX = 4;
    hsDesc.scaleY = 4;
    this.stage.addChild(hsDesc);
    for (var i = 0; i < highscores.length; i++) {
        var text = new rune.text.BitmapField(`${highscores[i].name}           ${highscores[i].score}`);
        text.centerX = this.application.screen.centerX - 50;
        text.y = yCords[i];
        text.scaleX = 3;
        text.scaleY = 3;
        this.stage.addChild(text);

        /*
        if (i == 0){
            text.scaleX = 5;
            text.scaleY = 5;
            text.fillColor = "#FFD700";
        } else if (i == 1){
            text.scaleX = 4;
            text.scaleY = 4;
            text.fillColor = "#c0c0c0";
        } else if (i == 2) {
            text.scaleX = 3;
            text.scaleY = 3;
            text.fillColor = "#774f2e";
        } else {
            text.scaleX = 2;
            text.scaleY = 2;
        }
        */
    }
};

game.scene.Highscore.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "", "highscorebkrd");
    this.stage.addChild(this.m_bkgd);
    this.m_bkgd.alpha = 0.6;
};

game.scene.Highscore.prototype.m_backToMenu = function() {
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