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
 game.wave.Wave03 = function(stage) {
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

game.wave.Wave03.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave03.prototype.constructor = game.wave.Wave03;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave03.prototype.m_constructor = function() {
    for (var i = 0; i < 3; i++) {
        var randomX1 = Math.floor(Math.random() * 1200);
        var randomX2 = Math.floor(Math.random() * 1200);

        var l = new game.entity.MelonL();
        var m = new game.entity.MelonM(randomX1, -30);
        var s = new game.entity.MelonS(randomX2, -10);

        this.melons.push(l,m,s);
    }
};

game.wave.Wave03.prototype.m_constructorPowerups = function() {
    var randomX1 = Math.floor(Math.random() * 1220);
    var randomX2 = Math.floor(Math.random() * 600);
    
    var self = this;
    this.timers.create({
        duration: 2000,
        scope: this,
        onComplete: function() {
            self.shield = new game.entity.Shield(randomX1, self.game); //Creates shield-powerup
            self.powerups.push(self.shield);
            self.game.stage.addChild(self.shield)
        }
    });

    this.timers.create({
        duration: 4000,
        scope: this,
        onComplete: function() {
            self.coin = new game.entity.Coin(randomX2, self.game); //creates Coins-powerup
            self.powerups.push(self.coin);
            self.game.stage.addChild(self.coin)
        }
    });
};
