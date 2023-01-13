<?php
/**
 * Assets Manager Class
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */

namespace ultraDevs\RBASP;

use ultraDevs\RBASP\Helper;
use ultraDevs\RBASP\Credentials_Manager;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */
class Assets_Manager {

	/**
	 * Admin Assets
	 *
	 * Enqueue Admin Styles and Scripts
	 *
	 * @param string $hook Page slug.
	 */
	public function admin_assets( $hook ) {

		// if ( 'toplevel_page_' . RBASP_MENU_SLUG !== $hook || ! current_user_can( 'manage_options' ) ) {
		// 	return;
		// }

		if ( ! did_action( 'wp_enqueue_media' ) ) {
			wp_enqueue_media();
		}

		wp_enqueue_style( 'rbasp-admin', RBASP_ASSETS . 'admin/index.css', array( 'wp-components' ), RBASP_VERSION );

		$script_assets = require RBASP_DIR_PATH . 'assets/admin/index.asset.php';

		wp_enqueue_script( 'rbasp-admin', RBASP_ASSETS . 'admin/index.js', $script_assets['dependencies'], $script_assets['version'], true );

		wp_localize_script(
			'rbasp-admin',
			'RBASPAdmin',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'version' => RBASP_VERSION,
				'assets'  => RBASP_ASSETS,
				'blocks'  => Helper::get_blocks(),
				'credentials'  => Credentials_Manager::get_credentials_map(),
				'saved_credentials'  => Credentials_Manager::get_saved_credentials(),
				'nonce'   => wp_create_nonce( 'rbasp_nonce' ),
			)
		);
	}

}
