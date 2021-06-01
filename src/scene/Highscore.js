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
game.scene.Highscore = function(score, name) {
    this.hs;
    this.score = score;
    this.name = name;
    this.menuMusic;
    this.soundStatus = true;
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
    this.m_initMuteSounds();
    var hsArr = [];
    this.hs = new rune.data.Highscores("hs", 0, 5);

    if (this.score != undefined) {
        this.hs.send(this.score, this.name);
    }

    for (var i = 0; i < 5; i++) {
        var l = this.hs.get(i);
        hsArr.push(l);
    }
    this.showHighscoreTable(hsArr);
    this.menuMusic = this.application.sounds.sound.get("gamemusic");
    this.menuMusic.resume();

};

/**
 * @inheritDoc
 */
game.scene.Highscore.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.m_muteSounds();
    if (this.menuMusic.paused) {
        this.menuMusic.play(true);
    }

    if (this.keyboard.justPressed("enter")) {
        this.application.scenes.load([new game.scene.Menu()]);
        this.menuMusic.stop();
        this.menuMusic.dispose();
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

    var gold = new rune.display.Graphic(470, 195, 30, 30, "", "goldtrophy");
    var silver = new rune.display.Graphic(470, 245, 30, 30, "", "silvertrophy");
    var bronz = new rune.display.Graphic(470, 295, 30, 30, "", "bronzetrophy");
    this.stage.addChild(gold);
    this.stage.addChild(silver);
    this.stage.addChild(bronz);

    for (var i = 0; i < highscores.length; i++) {
        var text = new rune.text.BitmapField(`${highscores[i].name}           ${highscores[i].score}`);
        text.centerX = this.application.screen.centerX - 50;
        text.y = yCords[i];
        text.scaleX = 3;
        text.scaleY = 3;
        this.stage.addChild(text);
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

game.scene.Highscore.prototype.m_initMuteSounds = function() {
    this.soundON = new rune.display.Graphic(1100, 640, 50, 50, "", "unmutesound");
    this.soundOFF = new rune.display.Graphic(1100, 640, 50, 50, "", "mutesound");

    if (this.soundStatus) {
        this.stage.addChild(this.soundON);
    } else {
        this.stage.addChild(this.soundOFF);
    }
};

game.scene.Highscore.prototype.m_muteSounds = function() {
    if (this.keyboard.justPressed("M") && this.soundStatus == true) {
        this.application.sounds.sound.volume = 0;
        this.soundStatus = false;
        this.stage.removeChild(this.soundON);
        this.stage.addChild(this.soundOFF)
    } else if (this.keyboard.justPressed("M") && this.soundStatus == false) {
        this.application.sounds.sound.volume = 1;
        this.soundStatus = true;
        this.stage.removeChild(this.soundOFF);
        this.stage.addChild(this.soundON);
    }
};