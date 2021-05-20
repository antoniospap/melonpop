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

    this.m_initDemo()


    
};

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.m_playDemo()
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

game.scene.Howto.prototype.m_initDemo = function() {
    this.m_character = new rune.display.Sprite(400, 520, 54,78, "", "player");
    this.m_character.alpha = 0.8;
    this.m_character.animations.add("idle", [0], 1, true);
    this.m_character.animations.add("walk", [1, 2, 3, 4, 5, 6], 8, true);
    this.stage.addChild(this.m_character);
};

game.scene.Howto.prototype.m_playDemo = function() {
    // console.log('dasd')
    // console.log('dsa', this.m_character)
    if(this.m_moveRight == true && this.m_character.x < 700) {
        this.m_character.x += 2
    } else if (this.m_moveRight == false) {
        this.m_character.x -= 2
    }

    // if (this.m_character.x == 700) {
    //     console.log('eh')
    //     this.m_moveRight = false
    //     this.m_character.x -= 2
    // }
    
};