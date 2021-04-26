//------------------------------------------------------------------------------
// Namespace
//------------------------------------------------------------------------------

/**
 * The application namespace.
 * 
 * @namespace game
 */
var game = function() {

    //--------------------------------------------------------------------------
    // Public static scope
    //--------------------------------------------------------------------------

    /**
     * Public scope.
     *
     * @type {Object}
     * @private
     */
    var m_this = {};

    //--------------------------------------------------------------------------
    // Package structure
    //--------------------------------------------------------------------------

    /**
     * ...
     *
     * @namespace data
     * @memberof game
     * @since 1.0
     */
    m_this.data = {};

    /**
     * ...
     *
     * @namespace scene
     * @memberof game
     * @since 1.0
     */
    m_this.scene = {};

    /**
     * ...
     *
     * @namespace system
     * @memberof game
     * @since 1.0
     */
    m_this.entity = {};


    /**
     * ...
     *
     * @namespace system
     * @memberof game
     * @since 1.0
     */
    m_this.system = {};

    //--------------------------------------------------------------------------
    // Return public scope object
    //--------------------------------------------------------------------------

    /**
     * Public scope.
     */
    return m_this;

}();