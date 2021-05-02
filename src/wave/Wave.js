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
game.wave.Wave = function() {

    //--------------------------------------------------------------------------
    // Private properties
    //--------------------------------------------------------------------------

    this.largeMelon = [];

    //--------------------------------------------------------------------------
    // Constructor call
    //--------------------------------------------------------------------------
    this.m_start();
};
//------------------------------------------------------------------------------
// Public prototype methods (API)
//------------------------------------------------------------------------------
game.wave.Wave.prototype.update = function(step) {
    console.log("yo");
};

game.wave.Wave.prototype.m_start = function() {
    this.m_getMelons();
    var x = 0;
    var self = this;
    var id = setInterval(function() {
        self.stage.addChild(self.largeMelon[x]);
        x++;
        if (x === self.largeMelon.length) {
            clearInterval(id);
            self.largeMelon = [];
            self.m_nextWave();
        }
    }, 2000)
};
game.wave.Wave.prototype.m_nextWave = function() {
    var objects = this.stage.getChildren();
};