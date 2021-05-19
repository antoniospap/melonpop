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

    var backtomenu = new game.scene.Sprites();
    this.stage.addChild(backtomenu);
};

/**
 * @inheritDoc
 */
game.scene.Highscore.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.keyboard.justPressed("backspace")){
        this.application.scenes.load([new game.scene.Menu()]);
    }
};

game.scene.Highscore.prototype.showHighscoreTable = function(highscores) {
    var yCords = [200, 250, 300, 350, 400];
    var hsDesc = new rune.text.BitmapField("Highscores");
    hsDesc.centerX = this.application.screen.centerX - 100;
    hsDesc.y = 100;
    hsDesc.scaleX = 4;
    hsDesc.scaleY = 4;
    this.stage.addChild(hsDesc);
    console.log(highscores);
    for (var i = 0; i < highscores.length; i++) {
        var text = new rune.text.BitmapField(`${highscores[i].name}           ${highscores[i].score}`);
        text.centerX = this.application.screen.centerX - 100;
        text.y = yCords[i];
        text.scaleX = 3;
        text.scaleY = 3;
        this.stage.addChild(text);
    }
};