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
    this.player;
    this.playerShield;
    this.wave;
    this.waveCounter = 0;
    this.m_cloudOne;
    this.m_cloudTwo;
    this.m_cloudThree;
    this.bulletPowerup;
    this.score = 0;
    this.gotShield = false;

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
    this.m_initClouds()

    this.player = new game.entity.Character(this.gotShield);
    this.stage.addChild(this.player);

    this.wave = new game.wave.Wave01(this.stage);
    this.waveCounter = 1;

    this.powerup = new game.entity.Shield(this);
    this.stage.addChild(this.powerup);

    this.cameras.getCamera(0).debug = true;

    this.score2()
};

/**
 * @inheritDoc
 */
game.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.wave.update(step);
    if (this.wave.checkWave()) {
        this.wave = new game.wave.Wave02(this.stage);
        this.waveCounter++;
    }
    this.m_cloudMotion()


};

/**
 * @inheritDoc
 */
game.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

game.scene.Game.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "#FF00FF", "cleanBkrgd");
    this.stage.addChild(this.m_bkgd);
};

game.scene.Game.prototype.m_initClouds = function() {
    this.m_cloudOne = new rune.display.Graphic(20, 80, 300, 115, "", "cloud1");
    this.stage.addChild(this.m_cloudOne);

    this.m_cloudTwo = new rune.display.Graphic(500, 250, 300, 115, "", "cloud2");
    this.stage.addChild(this.m_cloudTwo);

    this.m_cloudThree = new rune.display.Graphic(830, 130, 300, 115, "", "cloud3");
    this.stage.addChild(this.m_cloudThree);
};

game.scene.Game.prototype.m_cloudMotion = function() {
    this.m_cloudOne.x -= 0.13
    this.m_cloudTwo.x -= 0.07
    this.m_cloudThree.x -= 0.10

    if (this.m_cloudOne.x <= -290) {
        this.m_cloudOne.x = 1300
    }
    if (this.m_cloudTwo.x <= -290) {
        this.m_cloudTwo.x = 1300
    }
    if (this.m_cloudThree.x <= -290) {
        this.m_cloudThree.x = 1300
    }
};

game.scene.Game.prototype.score2 = function() {
    this.score = new rune.ui.Counter(5, 10, 10, "", 3);
    this.score.y = 630;
    this.score.x = 50;
    this.score.scaleX = 3;
    this.score.scaleY = 3;
    this.stage.addChild(this.score);
};