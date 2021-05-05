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
 * Represents a wave of melons.
 */
game.wave.Wave = function(stage) {
    this.stage = stage;
    this.delay = 2000;
    this.start = false;
    //--------------------------------------------------------------------------
    // Private properties
    //--------------------------------------------------------------------------

    this.melons = [];

    //--------------------------------------------------------------------------
    // Constructor call
    //--------------------------------------------------------------------------
    this.m_constructor();
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
};
game.wave.Wave.prototype.addMelon = function() {
    for (var i = 0; i< this.melons.length; i++){
        if (this.melons[i].parent == null && this.melons[i].active == true){
            this.stage.addChild(this.melons[i]);
            this.start = true;
            break;
        }
    }
};

game.wave.Wave.prototype.m_constructor = function() {};

game.wave.Wave.prototype.checkWave = function() {
    var numLeft = 0;
    for (i = 0; i < this.stage.numChildren; i++) {
        if (this.stage.getChildAt(i) instanceof game.entity.Melon) {
            numLeft++;
        }
     }
     return (numLeft == 0 && this.start == true) ? true : false;
};