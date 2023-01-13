<?php
/**
 * Helper Class
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */

namespace ultraDevs\RBASP;


/**
 * Helper
 *
 * @package ReactBasedSettingsPage
 * @since 1.0.0
 */
class Helper {

	public static function get_creds() {
		$credentials = get_option( 'rb_credentials', [] );

		if ( empty( $blocks ) ) {
			return Credentials_Manager::get_credentials_map();
		}

		if ( count( Credentials_Manager::get_credentials_map() ) >  count( $credentials ) ) {
			return array_merge( Credentials_Manager::get_credentials_map(), $credentials );
		}

		return $credentials;
	}

	public static function get_blocks() {
		$blocks = get_option( 'rbasp_blocks', [] );

		if ( empty( $blocks ) ) {
			return self::get_all_blocks();
		}

		if ( count( self::get_all_blocks() ) >  count( $blocks ) ) {
			return array_merge( self::get_all_blocks(), $blocks );
		}

		return $blocks;
	}

	/**
	 * Block List
	 *
	 * @return array Block List
	 */
	public static function get_all_blocks() {
		return array(
			array(
				'id'		=> 'heading_block',
				'label'    => __( 'Heading Block' ),
				'slug'     => 'rbasp/heading',
				'isActive' => true,
			),
			array(
				'id'		=> 'text_block',
				'label'    => __( 'Text Block' ),
				'slug'     => 'rbasp/text',
				'isActive' => true,
			),
			array(
				'id'		=> 'image_block',
				'label'    => __( 'Image Block' ),
				'slug'     => 'rbasp/image',
				'isActive' => true,
			),
			array(
				'id'		=> 'heading_block',
				'label'    => __( 'Heading Block' ),
				'slug'     => 'rbasp/heading',
				'isActive' => true,
			),
			array(
				'id'		=> 'text_block',
				'label'    => __( 'Text Block' ),
				'slug'     => 'rbasp/text',
				'isActive' => true,
			),
			array(
				'id'		=> 'image_block',
				'label'    => __( 'Image Block' ),
				'slug'     => 'rbasp/image',
				'isActive' => true,
			),
		);
	}
}
