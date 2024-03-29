<?php
/**
 * Dashboard
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */

namespace ultraDevs\RBASP\Admin;

use ultraDevs\RBASP\Assets_Manager;

/**
 * Dashboard Class
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */
class Dashboard {
	/**
	 * Menu
	 *
	 * @var string
	 */
	public static $menu = '';

	/**
	 * Register
	 */
	public function register() {
		add_action( 'admin_menu', array( __CLASS__, 'register_menu' ) );

		if ( is_admin() && isset( $_GET[ 'page' ] ) && RBASP_MENU_SLUG === wp_unslash( $_GET['page'] ) ) { // phpcs:ignore
			add_action( 'in_admin_header', array( $this, 'remove_notices' ) );
		}
	}


	/**
	 * Register Admin Menu
	 */
	public static function register_menu() {
		self::$menu = add_menu_page( __( 'React Based Page', 'sticky-list' ), __( 'React Based Page', 'sticky-list' ), 'manage_options', RBASP_MENU_SLUG, array( __CLASS__, 'view_main' ), '', 56 );

		// Assets Manager Class.
		$assets_manager = new Assets_Manager();

		add_action( 'admin_print_scripts-' . self::$menu, array( $assets_manager, 'admin_assets' ) );
	}

	/**
	 * Main View
	 */
	public static function view_main() {
		echo '<div id="rbasp-app"></div>';
	}

	/**
	 * Remove All Notices.
	 *
	 * @return void
	 */
	public function remove_notices() {
		remove_all_actions( 'admin_notices' );
		remove_all_actions( 'all_admin_notices' );
	}
}
