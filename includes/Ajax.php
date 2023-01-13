<?php
/**
 * Ajax Class
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */

namespace ultraDevs\RBASP;

/**
 * Ajax
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */
class Ajax {

	public function __construct() {
		add_action( 'wp_ajax_rbasp_save_blocks', array( $this, 'save_settings' ) );
		add_action( 'wp_ajax_rbasp_save_credentials', array( $this, 'save_credentials' ) );
	}

	/**
	 * Save Settings
	 *
	 * @return void
	 */
	public function save_settings() {

		// verify nonce.
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'rbasp_nonce' ) ) {
			wp_send_json_error( __( 'Nonce verification failed', 'react-based-settings-page' ) );
		}

		// check user permission.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( __( 'You are not allowed to do this', 'react-based-settings-page' ) );
		}

		$data = isset( $_POST['blocks'] ) ? wp_unslash( $_POST['blocks'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$data = json_decode( $data, true );

		if ( ! empty( $data ) ) {
			update_option( 'rbasp_blocks', $data );
		}

		wp_send_json_success(
			array(
				'message' => __( 'Settings saved successfully', 'react-based-settings-page' ),
			)
		);
		die();
	}
	/**
	 * Save Settings
	 *
	 * @return void
	 */
	public function save_credentials() {

		// verify nonce.
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'rbasp_nonce' ) ) {
			wp_send_json_error( __( 'Nonce verification failed', 'react-based-settings-page' ) );
		}

		// check user permission.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( __( 'You are not allowed to do this', 'react-based-settings-page' ) );
		}

		$data = isset( $_POST['credentials'] ) ? wp_unslash( $_POST['credentials'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$data = json_decode( $data, true );

		if ( ! empty( $data ) ) {
			Credentials_Manager::save_credentials( $data );
		}

		wp_send_json_success(
			array(
				'message' => __( 'Settings saved successfully', 'react-based-settings-page' ),
			)
		);
		die();
	}

}
