//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 *
 *.Character state.
 */
game.entity.Character = function() {
    this.m_player = null;
    this.m_bulletMove = false;
    this.bullet = null;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.entity.Character.prototype = Object.create(rune.display.Sprite.prototype);
game.entity.Character.prototype.constructor = game.entity.Character;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.entity.Character.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.m_initPlayer();
};

/**
 * @inheritDoc
 */
game.entity.Character.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_characterMovement();
};

/**
 * @inheritDoc
 */
game.entity.Character.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

game.entity.Character.prototype.m_initPlayer = function() {
    this.m_player = new rune.display.Sprite( //add sprite
        180, //x
        150, //y
        13, //bredd på en sprite
        19, //höjd på en sprite
        "", //färg som bakrundsfärg, tom sträng för transparent #FF000 för röd färg
        "copsnrobbers_texture_joe" //namn på fil
    );
    // this.m_player.scaleX = 4;
    //this.m_player.scaleY = 4;

    this.m_player.animations.add(
        "idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        6,
        true
    ); //6 för hur många frames per second
    this.m_player.animations.add(
        "walk", [11, 12, 13, 14, 15, 16, 17, 18],
        8,
        true
    );
    this.stage.addChild(this.m_player);
};

game.entity.Character.prototype.m_characterMovement = function() {
    //character movement when key pressed
    if (this.keyboard.pressed("D")) {
        this.m_player.x += 2;
        this.m_player.animations.gotoAndPlay("walk");
        this.m_player.flippedX = false;
    } else if (this.keyboard.pressed("A")) {
        this.m_player.x -= 2;
        this.m_player.animations.gotoAndPlay("walk");
        this.m_player.flippedX = true;
    } else {
        this.m_player.animations.gotoAndPlay("idle");
    }

    //initiates Bullets object
    if (this.keyboard.justPressed("space")) {
        var bullet = new game.entity.Bullet(this.m_player.x, this.m_player.y);
        this.stage.addChild(bullet);
        this.m_bulletMove = true;
        this.bullets = bullet.m_bullets;
    }
};