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
    this.bullet = null;
    this.bulletDelay = 0;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 530, 530, 52, 76, "", "gamesprite2");
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
    this.playerAnimation();
    this.hitbox.set(5, 5, 42, 70);
};

/**
 * @inheritDoc
 */
game.entity.Character.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.m_characterMovement();
    this.characterBullet(step);
    this.m_checkHitbox();
};

/**
 * @inheritDoc
 */
game.entity.Character.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

game.entity.Character.prototype.playerAnimation = function() {
    // this.animations.add(
    //     "idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //     6,
    //     true
    // ); //6 för hur många frames per second

    // this.animations.add(
    //     "walk", [11, 12, 13, 14, 15, 16, 17, 18],
    //     8,
    //     true
    // );
};

game.entity.Character.prototype.m_characterMovement = function(step) {
    //character movement when key pressed
    if (this.keyboard.pressed("D")) {
        if (this.x <= 1230) {
            this.x += 4;
            this.animations.gotoAndPlay("walk");
            this.flippedX = false;
        }
    } else if (this.keyboard.pressed("A")) {
        if (this.x != 0) {
            this.x -= 4;
            this.animations.gotoAndPlay("walk");
            this.flippedX = true;
        }
    } else {
        this.animations.gotoAndPlay("idle");
    }
};

game.entity.Character.prototype.characterBullet = function(step) {
    //initiates Bullets object
    this.bulletDelay += step;
    if (this.keyboard.justPressed("space")) {
        if (this.bulletDelay >= 700) { //skjuter ett skot per 700 uppdateringsfrekvenser.
           // var sound = this.application.sounds.sound.get("throw")
           // sound.play()
            var bullet = new game.entity.Bullet(this.x + 20, this.y);
            this.stage.addChild(bullet);
            this.bulletDelay = 0;
        }
    }
};

game.entity.Character.prototype.m_checkHitbox = function() {
    var objects = this.stage.getChildren();
    for (i = 0; i < objects.length; i++) {
        if (objects[i] instanceof game.entity.Melon) {
            if (this.hitTestObject(objects[i]) && this.currentSprite == "gamespriteshield") {
                console.log("GOT ARMOR");
            } else if (this.hitTestObject(objects[i]) && this.currentSprite == "gamesprite2"){
                console.log("NO ARMOR");
                if (objects[i].animations.current == null){
                    this.application.scenes.load([new game.scene.Menu()]);
                }
            }
        }
    }
};