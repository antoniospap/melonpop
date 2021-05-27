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
game.entity.Character = function () {
  this.bullet = null;
  this.bulletDelay = 0;
  this.gotShield = false;
  this.timers;
  this.sound;
  this.cloud = null
  this.motion = false
  this.playerHit;
  this.playerHitBool = true;
  this.gameoverBool = true;

  this.gameover;

  //--------------------------------------------------------------------------
  // Super call
  //--------------------------------------------------------------------------

  /**
   * ...
   */
  rune.display.Sprite.call(this, this.application.screen.centerX, 530, 54, 78, "", "player"
  );
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
game.entity.Character.prototype.init = function () {
  rune.display.Sprite.prototype.init.call(this);
  this.hitbox.set(5, 10, 42, 60);
  this.timers = new rune.timer.Timers();
  this.playerAnimation();
  this.sound = this.application.sounds.sound.get("throw");
  this.initCloud()
  this.playerHit = this.application.sounds.sound.get("hit");
  this.gameover = this.application.sounds.sound.get("gameover");

};

/**
 * @inheritDoc
 */
game.entity.Character.prototype.update = function (step) {
  rune.display.Sprite.prototype.update.call(this, step);
  this.m_characterMovement();
  this.characterBullet(step);
  this.m_checkHitbox();
  this.shieldFollowPlayer();

  this.cloudMotion()

  this.timers.update(step);
};

/**
 * @inheritDoc
 */
game.entity.Character.prototype.dispose = function () {
  rune.display.Sprite.prototype.dispose.call(this);
};

game.entity.Character.prototype.playerAnimation = function () {
  this.animations.add("idle", [0], 1, true);
  this.animations.add("walk", [1, 2, 3, 4, 5, 6], 8, true);

};

game.entity.Character.prototype.m_characterMovement = function (step) {
  //character movement when key pressed
  if(!this.motion) {
  if (this.keyboard.pressed("D")|| this.keyboard.pressed("right") ) {
    if (this.x <= 1230) {
      this.x += 4;
      this.animations.gotoAndPlay("walk");
      this.flippedX = false;
    }
  } else if (this.keyboard.pressed("A") || this.keyboard.pressed("left")) {
    if (this.x >= 0) {
      this.x -= 4;
      this.animations.gotoAndPlay("walk");
      this.flippedX = true;
    }
  }
  else {
    this.animations.gotoAndPlay("idle");
  }
  }
};

game.entity.Character.prototype.characterBullet = function (step) {
  //initiates Bullets object
  this.bulletDelay += step;
  if (this.keyboard.justPressed("space") && !this.motion) {
    if (this.bulletDelay >= 700) {
      //skjuter ett skot per 700 uppdateringsfrekvenser.
      this.sound.play();
      var bullet = new game.entity.Bullet(this.x + 20, this.y);
      this.stage.addChild(bullet);
      this.bulletDelay = 0;

      this.x -= 1;
      this.animations.gotoAndPlay("idle");
    }
  }
};

game.entity.Character.prototype.m_checkHitbox = function () {
  var objects = this.stage.getChildren();
  for (var i = 0; i < objects.length; i++) {
    if (objects[i] instanceof game.entity.Melon) {
      if (this.hitTestObject(objects[i])) {
        if (objects[i].animations.current == null && this.shield == null) {
          // this.application.scenes.load([
          //   new game.scene.Gameover(
          //     this.application.scenes.selected.score.value
          //   ),
          // ]);
          this.characterDead();
        } else if (objects[i].animations.current == null && this.shield != null) {
          this.removeShield();
        }
      }
    }
  }
};

game.entity.Character.prototype.getShield = function () {
  if (this.shield == undefined || this.shield == null){
      this.shield = new rune.display.Graphic(
      this.x,
      this.y,
      100,
      100,
      "",
      "fallingshield"
    );
    this.shield.alpha = 0.5;
    this.shield.scaleX = 1.6;
    this.shield.scaleY = 1.6;

    this.stage.addChild(this.shield);
  }
};

game.entity.Character.prototype.shieldFollowPlayer = function () {
  if (this.gotShield) {
    this.shield.x = this.x - 20;
    this.shield.y = this.y;
  }
};
game.entity.Character.prototype.removeShield = function () {
  this.flicker(700, 100);
  this.timers.create({
    duration: 1200,
    scope: this,
    onComplete: function () {
      this.stage.removeChild(this.shield);
      this.shield = null;
      this.gotShield = false;
    },
  });
};

game.entity.Character.prototype.characterDead = function () {
  var objects = this.stage.getChildren();
  for (var i = 0; i < objects.length; i++) {
    if (objects[i] instanceof game.entity.Melon) {
      objects[i].active = false
      this.motion = true
    }
  }
  if (this.playerHitBool){
    console.log("DEWAD");
    this.playerHit.play();
    this.playerHit.volume = 0.1;
    this.playerHitBool = false;
  }
};

game.entity.Character.prototype.initCloud = function () {
  var x = this.x
  this.cloud = new rune.display.Graphic(this.x, 720, 300, 115, "", "cloud2");
  this.stage.addChild(this.cloud);

};

game.entity.Character.prototype.cloudMotion = function cloud() {

  if (this.motion) {
    this.cloud.x = this.x - 60
    this.cloud.y -= 5;
  }
  if (this.gameoverBool && this.motion){
    console.log("DEWAD");
    this.gameover.play();
    this.gameoverBool = false;
  }

  if (this.cloud.y <= 550) {
    this.y -= 5
    this.rotation = -90
    this.animations.gotoAndPlay("idle");
  }

  if (this.cloud.y <= 0) {
    this.application.scenes.load([
      new game.scene.Gameover(
        this.application.scenes.selected.score.value
      ),
    ]);
  }

};