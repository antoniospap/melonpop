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
 game.wave.Wave07 = function(stage) {
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

game.wave.Wave07.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave07.prototype.constructor = game.wave.Wave07;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave07.prototype.m_constructor = function() {
    while(true){
        var randomX1 = Math.floor(Math.random() * 1200);
        var randomX2 = Math.floor(Math.random() * 1200);
        var randomX3 = Math.floor(Math.random() * 1200);


        var l = new game.entity.MelonL(randomX3, -30);
        var m = new game.entity.MelonM(randomX1, -30);
        var s = new game.entity.MelonS(randomX2, -10);

        this.melons.push(l,m,s);
    }
};

game.wave.Wave07.prototype.m_constructorPowerups = function() {
    var randomX1 = Math.floor(Math.random() * 1220);
    var randomX2 = Math.floor(Math.random() * 600);
    
    var self = this;
    this.timers.create({
        duration: 30000,
        scope: this,
        onComplete: function() {
            self.shield = new game.entity.Shield(randomX1, self.game); //Creates shield-powerup
            self.powerups.push(self.shield);
            self.game.stage.addChild(self.shield)
        }
    });

    this.timers.create({
        duration: 50000,
        scope: this,
        onComplete: function() {
            self.coin = new game.entity.Coin(randomX2, self.game); //creates Coins-powerup
            self.powerups.push(self.coin);
            self.game.stage.addChild(self.coin)
        }
    });
};
