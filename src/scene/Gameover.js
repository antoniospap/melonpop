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
 * @param {number} score Players received score
 */
 game.scene.Gameover = function(score) {
    this.score = score;
    this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.selectedIndex = 0;
    this.char = [];
    this.enterIndex = 0;
    this.xCords = [500,550,600];
    this.name = [];

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

game.scene.Gameover.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Gameover.prototype.constructor = game.scene.Gameover;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Gameover.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.initCharFields();

    var gameover = new rune.text.BitmapField("GAME OVER");
    gameover.centerX = this.application.screen.centerX - 120;
    gameover.centerY = 100;
    gameover.scaleX = 7;
    gameover.scaleY = 7;
    this.stage.addChild(gameover)

    var gameover = new rune.text.BitmapField("Write your name by moving the arrows upp and down to find your desired letter, press enter to move to next letter.");
    gameover.centerX = this.application.screen.centerX - 100;
    gameover.centerY = 200;
    gameover.scaleX = 2;
    gameover.scaleY = 2;
    this.stage.addChild(gameover)

    var score = new rune.text.BitmapField(`${this.score}`);
    score.centerX = this.application.screen.centerX + 200;
    score.centerY = this.application.screen.centerY - 15;
    score.scaleX = 3;
    score.scaleY = 3;
    this.stage.addChild(score)
};

/**
 * @inheritDoc
 */
game.scene.Gameover.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.getCurrentIndex();
};

game.scene.Gameover.prototype.initCharFields = function() {
    var char1 = new rune.text.BitmapField("-");
    var char2 = new rune.text.BitmapField("-");
    var char3 = new rune.text.BitmapField("-");
    this.char = [char1, char2, char3];

    for (i = 1; i < 3; i++){
        this.char[i].centerY = this.application.screen.centerY;
        this.char[i].x = this.xCords[i];
        this.char[i].scaleX = 3;
        this.char[i].scaleY = 3;
        this.stage.addChild(this.char[i]);
    }
};

game.scene.Gameover.prototype.getCurrentIndex = function() {
    if (this.keyboard.justPressed("down")) {
        this.selectedIndex++;
        if (this.selectedIndex == this.letters.length) {
            this.selectedIndex = 0;
        }
    } else if (this.keyboard.justPressed("up")) {
        this.selectedIndex--;
        if (this.selectedIndex == -1) {
            this.selectedIndex = this.letters.length - 1;
        }
    }
    if (this.keyboard.justPressed("enter")){
        this.enterIndex++;
    }
    if (this.keyboard.justPressed("space") && this.enterIndex >= 3){
        for (i = 0; i < this.char.length; i++){
            this.name.push(this.char[i].text);
        }
        var name = this.name.join("");
        this.application.scenes.load([new game.scene.Highscore(this.score, name)]);
    }
    this.displayLetter();
};
game.scene.Gameover.prototype.displayLetter = function() {
    if (this.enterIndex <= this.char.length - 1){
        console.log(this.enterIndex);
        this.char[this.enterIndex].text = this.letters[this.selectedIndex];
        this.char[this.enterIndex].centerY = this.application.screen.centerY;
        this.char[this.enterIndex].x = this.xCords[this.enterIndex];
        this.char[this.enterIndex].scaleX = 3;
        this.char[this.enterIndex].scaleY = 3;
        this.stage.addChild(this.char[this.enterIndex]);
    }
   
};

