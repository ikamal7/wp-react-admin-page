<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package ReactBasedSettingsPage
 */

/**
 * Plugin Name:       React Based Admin Settings Page
 * Plugin URI:        
 * Description:       React Base Admin Settings Page Description
 * Version: 1.0.0
 * Author:            Kamal
 * Author URI:        https://kamalhosen.me
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rba-page
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

define( 'RBASP_VERSION', '1.0.0' );
define( 'RBASP_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'RBASP_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'RBASP_ASSETS', RBASP_DIR_URL . 'assets/' );
define( 'RBASP_MENU_SLUG', 'react-based-settings-page' );


/**
 * Require Composer Autoload
 */
require_once RBASP_DIR_PATH . 'vendor/autoload.php';
/**
 * ReactBasedSettingsPage class
 */
final class ReactBasedSettingsPage {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'plugins_loaded', array( $this, 'init' ) );
	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \ReactBasedSettingsPage
	 */
	public static function run() {
		/**
		 * Instance
		 *
		 * @var boolean
		 */
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

		return $instance;
	}

	/**
	 * Plugin Init
	 */
	public function init() {

		// Ajax.
		new ultraDevs\RBASP\Ajax();

		if ( is_admin() ) {

			// Dashboard.
			$dashboard = new ultraDevs\RBASP\Admin\Dashboard();
			$dashboard->register();


		} else {
			// Frontend Assets.
		}
	}
}
/**
 * Check if react_based_settings_page doesn't exist
 */
if ( ! function_exists( 'react_based_settings_page' ) ) {
	/**
	 * Load Sticky List
	 *
	 * @return ReactBasedSettingsPage
	 */
	function react_based_settings_page() {
		return ReactBasedSettingsPage::run();
	}
}
react_based_settings_page();

// $blocks = get_option('rbasp_credentials', []);

// echo '<pre>';
// var_dump ($blocks );
// echo '</pre>';