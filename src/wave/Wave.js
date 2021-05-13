//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 *
 * @class
 * @classdesc
 * 
 * Represents a wave of melons and powerups.
 * @param {object} stage game object
 */
game.wave.Wave = function(stage) {
    this.game = stage;
    this.delay = 2000; //spawn melons delay
    this.powerupsDelay; //spawn delay for powerups, changed in inherited objects
    this.melons = [];
    this.timers;
    this.timers = new rune.timer.Timers();


    //--------------------------------------------------------------------------
    // Constructor call
    //--------------------------------------------------------------------------
    this.m_constructor();
    this.m_constructorPowerups();
};
//------------------------------------------------------------------------------
// Public prototype methods (API)
//------------------------------------------------------------------------------
game.wave.Wave.prototype.update = function(step) {
   this.delay -= step;
   if (this.delay <= 0){
       this.delay = 2000;
       this.addMelon();
   }

   this.timers.update(step);
};
game.wave.Wave.prototype.addMelon = function() {
    for (var i = 0; i< this.melons.length; i++){
        if (this.melons[i].parent == null && this.melons[i].active == true){
            this.game.stage.addChild(this.melons[i]);
            this.start = true;
            break;
        }
    }
};

game.wave.Wave.prototype.m_constructor = function() {};
game.wave.Wave.prototype.m_constructorPowerups = function() {};


game.wave.Wave.prototype.checkWave = function() {
    var numLeft = 0;
    for (i = 0; i < this.game.stage.numChildren; i++) {
        if (this.game.stage.getChildAt(i) instanceof game.entity.Melon) {
            numLeft++;
        }
     }
     return (numLeft == 0 && this.start == true) ? true : false;
};

game.wave.Wave.prototype.score = function() {
    
};
