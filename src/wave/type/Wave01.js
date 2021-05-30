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

game.wave.Wave01.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave01.prototype.constructor = game.wave.Wave01;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave01.prototype.m_constructor = function() {
    for (var i = 0; i < 1; i++) {
        var randomX1 = Math.floor(Math.random() * 1200);
        var randomX2 = Math.floor(Math.random() * 1200);

        var l = new game.entity.MelonL(randomX1, -30);
        var m = new game.entity.MelonM();
        var s = new game.entity.MelonS(randomX2, -10);

        this.melons.push(l, m, s);
    }
};

game.wave.Wave01.prototype.m_constructorPowerups = function() {
    var randomX2 = Math.floor(Math.random() * 1220);
    var self = this;
    var time = [6000];

    for (var i = 0; i < time.length; i++) {
        this.timers.create({
            duration: time[i],
            scope: this,
            onComplete: function() {
                self.coin = new game.entity.Coin(self.game); //creates Coins-powerup
                self.powerups.push(self.coin);
                self.game.stage.addChild(self.coin)
            }
        });
    }
};