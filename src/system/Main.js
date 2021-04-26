//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * ...
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * ...
 */
game.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.system.Main.call(this, {
        id: "com.vectorpanic.template",
        name: "game",
        scene: game.scene.Game,
        resources: game.data.Resources,
        useKeyboard: true,
        debug: true,
        screenResolutionX: 1280, // <------------
        screenResolutionY: 720 // <------------
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.system.Main.prototype = Object.create(rune.system.Main.prototype);
game.system.Main.prototype.constructor = game.system.Main;