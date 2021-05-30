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

        this.melons.push(m, s);
    }
};

game.wave.Wave02.prototype.m_constructorPowerups = function() {
    var self = this;
    var coinTime = [3000, 9000];

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
        duration: 2000,
        scope: this,
        onComplete: function() {
            self.shield = new game.entity.Shield(self.game); //Creates shield-powerup
            self.powerups.push(self.shield);
            self.game.stage.addChild(self.shield)
        }
    });
};