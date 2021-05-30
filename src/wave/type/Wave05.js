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
game.wave.Wave05 = function(stage) {
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

game.wave.Wave05.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave05.prototype.constructor = game.wave.Wave05;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave05.prototype.m_constructor = function() {
    for (var i = 0; i < 7; i++) {
        var randomX1 = Math.floor(Math.random() * 1200);
        var randomX2 = Math.floor(Math.random() * 1200);
        var randomX3 = Math.floor(Math.random() * 1200);


        var l = new game.entity.MelonL(randomX3, -30);
        var m = new game.entity.MelonM(randomX1, -30);
        var s = new game.entity.MelonS(randomX2, -10);

        this.melons.push(l, m, s);
    }
};

game.wave.Wave05.prototype.m_constructorPowerups = function() {
    var self = this;
    var coinTime = [3000, 5000, 10000, 36000, 40000, 55000, 70000, 75000, 90000];

    for (var i = 0; i < coinTime.length; i++) {
        this.timers.create({
            duration: coinTime[i],
            scope: this,
            onComplete: function() {
                self.coin = new game.entity.Coin(self.game); //creates Coins-powerup
                self.powerups.push(self.coin);
                self.game.stage.addChild(self.coin)
            }
        });
    }
    this.timers.create({
        duration: 55000,
        scope: this,
        onComplete: function() {
            self.shield = new game.entity.Shield(self.game); //Creates shield-powerup
            self.powerups.push(self.shield);
            self.game.stage.addChild(self.shield)
        }
    });
};