//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends game.wave.Wave
 *
 * @class
 * @classdesc
 * 
 * Wave 002.
 */
game.wave.Wave01 = function(stage) {
    this.stage = stage;
    this.melons = [];
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.wave.Wave.call(this, stage);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.wave.Wave01.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave01.prototype.constructor = game.wave.Wave01;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave01.prototype.m_constructor = function() {
    for (var i = 0; i < 2; i++) {
        var l = new game.entity.MelonL();
        var m = new game.entity.MelonM();
        var s = new game.entity.MelonS();

        this.melons.push(m,s);
    }
};