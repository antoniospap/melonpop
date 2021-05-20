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
game.wave.Wave02 = function(stage) {
    this.game = stage;
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

game.wave.Wave02.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave02.prototype.constructor = game.wave.Wave02;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave02.prototype.m_constructor = function() {
    for (var i = 0; i < 3; i++) {
        var m = new game.entity.MelonM();
        var s = new game.entity.MelonS();

        this.melons.push(m,s);
    }
};

game.wave.Wave02.prototype.m_constructorPowerups = function() {
    var randomX2 = Math.floor(Math.random() * 600);
    var self = this;

    this.timers.create({
        duration: 8000,
        scope: this,
        onComplete: function() {
            self.coin = new game.entity.Coin(randomX2, self.game); //creates Coins-powerup
            self.powerups.push(self.coin);
            self.game.stage.addChild(self.coin)
        }
    });
};
