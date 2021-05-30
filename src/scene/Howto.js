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
    this.m_character = null
    this.m_moveRight = true
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

    this.m_spawnClouds();

    this.m_initBackground();

    this.m_outputText();
    this.outputPowerupText();
    this.m_initDemo();

    this.menuMusic = this.application.sounds.sound.get("gamemusic");
    this.menuMusic.resume();
};

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.m_playDemo();

    if (this.menuMusic.paused) {
        this.menuMusic.play(true);
    }

    if (this.keyboard.justPressed("enter")) {
        this.application.scenes.load([new game.scene.Menu()]);
        this.menuMusic.stop();
        this.menuMusic.dispose();
    }
    this.coin.rotation += 1;
};

game.scene.Howto.prototype.m_initBackground = function() {
    this.m_bkgd = new rune.display.Graphic(0, 0, 1280, 720, "", "howtoplaybkrd");
    this.stage.addChild(this.m_bkgd);
    this.m_bkgd.alpha = 0.6;
};

game.scene.Howto.prototype.m_spawnClouds = function() {
    var c1 = new game.entity.Clouds(20, 80, "cloud1", 0.7);
    var c2 = new game.entity.Clouds(500, 200, "cloud2", 0.5);
    var c3 = new game.entity.Clouds(900, 300, "cloud3", 0.6);
    this.stage.addChild(c1);
    this.stage.addChild(c2);
    this.stage.addChild(c3);
    c1.alpha = 0.7;
    c2.alpha = 0.5;
    c3.alpha = 0.5;
};

game.scene.Howto.prototype.m_outputText = function() {
    var text = new rune.text.BitmapField("Shoot all the melons and don't get hit!")
    text.width = 600
    text.centerX = this.application.screen.centerX - 60;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 100;
    this.stage.addChild(text);

    var text = new rune.text.BitmapField("Controls:")
    text.fillColor = "#ba9545";
    text.width = 50;
    text.centerX = this.application.screen.centerX - 290;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 200;
    this.stage.addChild(text);


    var text = new rune.text.BitmapField("Move: A <- -> D")
        // text.width = 600
    text.centerX = this.application.screen.centerX - 290;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 250;
    this.stage.addChild(text);

    var text = new rune.text.BitmapField("Shoot: Space")
        // text.width = 600
    text.centerX = this.application.screen.centerX - 290;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 300;
    this.stage.addChild(text);


    var text = new rune.text.BitmapField("Back to menu")
        // text.width = 600
    text.centerX = this.application.screen.centerX - 100;
    text.scaleX = 4;
    text.scaleY = 4;
    text.y = 400;
    this.stage.addChild(text);

    var slingShot = new rune.display.Graphic(430, 400, 30, 30, "", "slangbella");

    this.stage.addChild(slingShot)
};

game.scene.Howto.prototype.outputPowerupText = function() {
    var text = new rune.text.BitmapField("Powerups:");
    text.centerX = this.application.screen.centerX + 200;
    text.fillColor = "#ba9545";
    text.width = 50;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 200;
    this.stage.addChild(text);

    this.coin = new rune.display.Graphic(760, 240, 40, 40, "", "coinshine");
    this.stage.addChild(this.coin);
    var text = new rune.text.BitmapField("30 points");
    text.centerX = this.application.screen.centerX + 250;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 250;
    this.stage.addChild(text);

    var shield = new rune.display.Graphic(750, 300, 60, 60, "", "fallingshield");
    this.stage.addChild(shield)
    var text = new rune.text.BitmapField("shield")
    text.centerX = this.application.screen.centerX + 250;
    text.scaleX = 3;
    text.scaleY = 3;
    text.y = 320;
    this.stage.addChild(text);
};

game.scene.Howto.prototype.m_initDemo = function() {
    this.m_character = new rune.display.Sprite(400, 520, 54, 78, "", "player");
    this.m_character.alpha = 0.8;
    this.m_character.animations.add("idle", [0], 1, true);
    this.m_character.animations.add("walk", [1, 2, 3, 4, 5, 6], 8, true);
    this.stage.addChild(this.m_character);
};

game.scene.Howto.prototype.m_playDemo = function() {
    if (this.m_moveRight == true && this.m_character.x < 900) {
        this.m_character.x += 2
        this.m_character.animations.gotoAndPlay("walk");
    } else if (this.m_moveRight == false) {
        this.m_character.x -= 2
        this.m_character.flippedX = true;
    }
    if (this.m_character.x == 900) {
        this.m_moveRight = false;
    } else if (this.m_character.x == 300) {
        this.m_moveRight = true;
        this.m_character.flippedX = false;
    }

};