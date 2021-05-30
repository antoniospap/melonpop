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
    this.musicON = true;
    this.soundOFF;
    this.soundON;
    this.menuMusic;

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

    this.m_initBackground();
    this.m_spawnClouds();
    this.m_initTextMenu();
    this.m_initSlangbella();
    this.m_initTitle();
    this.m_initCredits();
    this.m_initMuteSounds();

    this.menu = [this.playBtn, this.howToPlay, this.highScore];

    for (var i = 0; i < this.menu.length; i++) {
        this.menu[i].scaleX = 4;
        this.menu[i].scaleY = 4;
        this.menu[i].alpha = 0.5;
    }

    this.menuMusic = this.application.sounds.sound.get("gamemusic");
    this.menuMusic.play(true);
};

/**
 * @inheritDoc
 */
game.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.menuMusic.paused) {
        this.menuMusic.play(true);
    }
    this.getCurrentIndex();
    this.showSelected();

    this.m_muteSounds();
};


game.scene.Menu.prototype.m_initBackground = function() {
    var m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "", "menu");
    this.stage.addChild(m_bkgd);
    m_bkgd.alpha = 0.6;
};

game.scene.Menu.prototype.m_spawnClouds = function() {
    var c1 = new game.entity.Clouds(300, 80, "cloud1", 0.5);
    var c2 = new game.entity.Clouds(100, 400, "cloud2", 0.6);
    var c3 = new game.entity.Clouds(900, 300, "cloud3", 0.7);
    var c4 = new game.entity.Clouds(1200, 200, "cloud3", 0.6);
    var clouds = [c1, c2, c3, c4];
    for (var i = 0; i < clouds.length; i++) {
        this.stage.addChild(clouds[i]);
        clouds[i].alpha = 0.5;
    }
};


game.scene.Menu.prototype.m_initTextMenu = function() {
    this.playBtn = new rune.text.BitmapField("PLAY")
    this.playBtn.center = this.application.screen.center;
    this.playBtn.y = this.application.screen.centerY - 100;

    this.stage.addChild(this.playBtn);

    this.howToPlay = new rune.text.BitmapField("HOW TO PLAY");
    this.howToPlay.center = this.application.screen.center;
    this.howToPlay.x -= 80;
    this.howToPlay.y -= 30;
    this.stage.addChild(this.howToPlay);

    this.highScore = new rune.text.BitmapField("HIGHSCORE");
    this.highScore.center = this.application.screen.center;
    this.highScore.y += 30;
    this.highScore.x -= 60;
    this.stage.addChild(this.highScore);
};

game.scene.Menu.prototype.m_initSlangbella = function() {
    var slangbella1 = new rune.display.Graphic(500, 260, 30, 30, "", "slangbella");
    var slangbella2 = new rune.display.Graphic(420, 320, 1280, 720, "", "slangbella");
    var slangbella3 = new rune.display.Graphic(440, 385, 1280, 720, "", "slangbella");
    this.slangArr = [slangbella1, slangbella2, slangbella3];
};

game.scene.Menu.prototype.getCurrentIndex = function() {
    if (this.keyboard.justPressed("down")) {
        this.selectedIndex++;
        if (this.selectedIndex == this.menu.length) {
            this.selectedIndex = 0;
        }
    } else if (this.keyboard.justPressed("up")) {
        this.selectedIndex--;
        if (this.selectedIndex == -1) {
            this.selectedIndex = this.menu.length - 1;
        }
    }
};

game.scene.Menu.prototype.showSelected = function() {
    for (var i = 0; i < this.menu.length; i++) {
        if (this.selectedIndex == i) {
            this.menu[i].alpha = 1;
            this.stage.addChild(this.slangArr[i]);
            if (this.keyboard.justPressed("enter")) {
                console.log(this.menuMusic);
                var scenesS = [new game.scene.Game(this.musicON), new game.scene.Howto(this.menuMusic), new game.scene.Highscore()];
                this.application.scenes.load([scenesS[i]]);
                this.menuMusic.stop();
                this.menuMusic.dispose();
            }
        } else {
            this.menu[i].alpha = 0.5;
            this.stage.removeChild(this.slangArr[i]);
        }
    }
};

game.scene.Menu.prototype.m_initTitle = function() {
    var title = new rune.text.BitmapField("Melon  Pop");
    // title.width = 600
    title.centerX = this.application.screen.centerX - 110;
    title.centerY = 50;
    title.scaleX = 6;
    title.scaleY = 6;
    this.stage.addChild(title)

    var slingShot = new rune.display.Graphic(640, 40, 30, 30, "", "slangbella");
    slingShot.scaleX = 2
    slingShot.scaleY = 2
    this.stage.addChild(slingShot)
};

game.scene.Menu.prototype.m_initCredits = function() {
    var title = new rune.text.BitmapField("Created by: Antonios Papathanassiadis & Martin Kassar");
    title.width = 600
    title.centerX = this.application.screen.centerX;
    title.y = 650;
    title.scaleX = 2;
    title.scaleY = 2;
    this.stage.addChild(title)
};

game.scene.Menu.prototype.m_initMuteSounds = function() {
    var pressM = new rune.text.BitmapField("Press M");
    pressM.y = 610;
    pressM.x = 1080;
    pressM.scaleX = 2;
    pressM.scaleY = 2;
    this.stage.addChild(pressM)

    this.soundON = new rune.display.Graphic(1100, 640, 50, 50, "", "soundon");
    this.soundOFF = new rune.display.Graphic(1100, 640, 50, 50, "", "soundoff");
    this.stage.addChild(this.soundON);
};

game.scene.Menu.prototype.m_muteSounds = function() {
    if (this.keyboard.justPressed("M") && this.musicON == true) {
        this.application.sounds.sound.volume = 0;
        this.musicON = false;
        this.stage.removeChild(this.soundON);
        this.stage.addChild(this.soundOFF)
    } else if (this.keyboard.justPressed("M") && this.musicON == false) {
        this.application.sounds.sound.volume = 1;
        this.musicON = true;
        this.stage.removeChild(this.soundOFF);
        this.stage.addChild(this.soundON);
    }
};