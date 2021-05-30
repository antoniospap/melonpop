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
game.scene.Game = function(sound) {
    this.melonL = null;
    this.player;
    this.playerShield;
    this.wave;
    this.waveCounter = 0;
    this.bulletPowerup;
    this.score = 0;
    this.gotShield = false;
    this.waveDesc;
    this.waveArray = [];

    this.sound;
    this.soundStatus = sound;
    this.soundON;
    this.soundOFF;
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
    this.m_spawnClouds();
    this.m_initTrees();

    this.sound = this.application.sounds.sound.get("wave1");
    this.sound.play();
    this.player = new game.entity.Character(this.gotShield);
    this.stage.addChild(this.player);

    this.wave = new game.wave.Wave01(this);
    this.waveCounter = 1;
    this.initWaveDesc(this.waveCounter);

    //this.cameras.getCamera(0).debug = true;

    this.initScore();
    this.m_initMuteSounds();

    this.waveArray = [new game.wave.Wave02(this), new game.wave.Wave03(this), new game.wave.Wave04(this), new game.wave.Wave05(this), new game.wave.Wave06(this)];


};

/**
 * @inheritDoc
 */
game.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.wave.update(step);



    if (this.wave.checkWave()) {
        this.wave = this.waveArray[this.waveCounter - 1];
        this.waveCounter++;
        this.updateWaveDesc(this.waveCounter);
        this.application.scenes.selected.score.value += (this.waveCounter - 1) * 10;
        this.sound.play();
    }

    this.m_muteSounds();
};

/**
 * @inheritDoc
 */
game.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

game.scene.Game.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "", "cleanBkrgd");
    this.stage.addChild(this.m_bkgd);
};
game.scene.Game.prototype.m_spawnClouds = function() {
    var c1 = new game.entity.Clouds(20, 80, "cloud1", 0.15);
    var c2 = new game.entity.Clouds(900, 200, "cloud2", 0.12);
    var c3 = new game.entity.Clouds(500, 300, "cloud3", 0.2);
    this.stage.addChild(c1);
    this.stage.addChild(c2);
    this.stage.addChild(c3);
};
game.scene.Game.prototype.m_initTrees = function() {
    this.m_trees = new rune.display.Graphic(0, 100, 1280, 491, "", "treesnbushes");
    this.stage.addChild(this.m_trees);
};

game.scene.Game.prototype.initScore = function() {
    this.score = new rune.ui.Counter(5, 10, 10, "", 3);
    this.score.y = 630;
    this.score.x = 50;
    this.score.scaleX = 3;
    this.score.scaleY = 3;
    this.stage.addChild(this.score);
};

game.scene.Game.prototype.initWaveDesc = function(waveCounter) {
    this.waveDesc = new rune.text.BitmapField(`Wave ${waveCounter}`);
    this.waveDesc.centerX = this.application.screen.centerX;
    this.waveDesc.y = 630;
    this.waveDesc.scaleX = 4;
    this.waveDesc.scaleY = 4;
    this.stage.addChild(this.waveDesc);
};

game.scene.Game.prototype.updateWaveDesc = function(waveCounter) {
    this.waveDesc.text = "";
    this.waveDesc.text = `Wave ${waveCounter}`;
};

game.scene.Game.prototype.m_initMuteSounds = function() {
    this.soundON = new rune.display.Graphic(1100, 640, 50, 50, "", "soundon");
    this.soundOFF = new rune.display.Graphic(1100, 640, 50, 50, "", "soundoff");

    if (this.soundStatus) {
        this.stage.addChild(this.soundON);
    } else {
        this.stage.addChild(this.soundOFF);
    }
};

game.scene.Game.prototype.m_muteSounds = function() {
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