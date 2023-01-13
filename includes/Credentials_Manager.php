<?php

/**
 * Credentials_Manager
 * 
 */
namespace ultraDevs\RBASP;

class Credentials_Manager{
	
    const CREDENTIALS_DB_KEY = 'rbasp_credentials';

    public static function get_credentials_map() {
		$credentials_map = [];

		$local_credentials_map = self::get_local_credentials_map();
		$credentials_map = array_merge($credentials_map, $local_credentials_map);

		return apply_filters('rb_get_credentials_map', $credentials_map);
	}

    public static function get_saved_credentials() {
		return get_option(self::CREDENTIALS_DB_KEY, []);
	}

	public static function save_credentials($credentials = []) {
		update_option(self::CREDENTIALS_DB_KEY, $credentials);
	}

    /**
	 * Get the pro credentials map for dashboard only
	 *
	 * @return array
	 */
	public static function get_pro_credentials_map() {
		return [
			[
				'id'=> 'advanced_data_table',
				'title' => __('Advanced Data Table', 'react-based-settings-page'),
				'icon' => 'hm hm-data-table',
				'fields' => [
					[
						'label' => esc_html__('Google API Key. ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'api_key',
						'help' => [
							'instruction' => esc_html__('Get API Key', 'react-based-settings-page'),
							'link' => 'https://console.developers.google.com/'
						],
					],
					[
						'label' => esc_html__('Google Sheet ID. ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'sheet_id',
						'help' => [],
					],
					[
						'label' => esc_html__('Google Sheets Range. Ex: A1:D5 ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'sheet_range',
						'help' => [],
					],
				],
				'is_pro' => true,
			],
			[
				'id'=> 'facebook_feed',
				'title' => __('Facebook Feed', 'react-based-settings-page'),
				'icon' => 'hm hm-facebook',
				'fields' => [
					[
						'label' => esc_html__('Page ID. ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'page_id',
						'help' => [
							'instruction' => esc_html__('Get Page ID', 'react-based-settings-page'),
							'link' => 'https://developers.facebook.com/apps/'
						],
					],
					[
						'label' => esc_html__('Access Token. ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'access_token',
						'help' => [
							'instruction' => esc_html__('Get Access Token.', 'react-based-settings-page'),
							'link' => 'https://developers.facebook.com/apps/'
						],
					],
				],
				'is_pro' => true,
			],
			[
				'id'=> 'instagram',
				'title' => __('Instagram', 'react-based-settings-page'),
				'icon' => 'hm hm-instagram',
				'fields' => [
					[
						'label' => esc_html__('Access Token. ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'access_token',
						'help' => [
							'instruction' => esc_html__('Get Access Token', 'react-based-settings-page'),
							'link' => 'https://developers.facebook.com/docs/instagram-basic-display-api/getting-started'
						],
					],
				],
				'is_pro' => true,
			],
		];
	}

	/**
	 * Get the free credentials map
	 *
	 * @return array
	 */
	public static function get_local_credentials_map() {
		return [
			[
				'id' => 'mailchimp',
				'title' => __('MailChimp', 'react-based-settings-page'),
				'icon' => 'hm hm-mail-chimp',
				'fields' => [
					[
						'label' => esc_html__('Enter API Key. ', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'api',
						'help' => [
							'instruction' => esc_html__('Get your api key here', 'react-based-settings-page'),
							'link' => 'https://admin.mailchimp.com/account/api/'
						],
					],
				],
				'demo' => 'https://wpbranch.com/mailchimp/',
				'is_pro' => false,
			],
			[
				'id' => 'twitter_feed',
				'title' => __('Twitter Feed', 'react-based-settings-page'),
				'icon' => 'hm hm-twitter-feed',
				'fields' => [
					[
						'label' => esc_html__('User Name. (Use @ sign with your Twitter user name)', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'user_name',
					],
					[
						'label' => esc_html__('Consumer Key', 'react-based-settings-page'),
						'type' => 'password',
						'name' => 'consumer_key',
						'help' => [
							'instruction' => esc_html__('Get Consumer Key', 'react-based-settings-page'),
							'link' => 'https://apps.twitter.com/app/'
						],
					],
					[
						'label' => esc_html__('Consumer Secret', 'react-based-settings-page'),
						'type' => 'text',
						'name' => 'consumer_secret',
						'help' => [
							'instruction' => esc_html__('Get Consumer Secret', 'react-based-settings-page'),
							'link' => 'https://apps.twitter.com/app/'
						],
					],
				],
				// 'help' => 'https://wpbranch.com/mailchimp/',
				'is_pro' => false,
			],
		];
	}
}