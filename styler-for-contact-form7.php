<?php
/*
Plugin Name: Styler for Contact Form 7
Plugin URI:  http://wpmonks.com/styler-contact-form7
Description: Create beautiful styles for your Contact 7 Forms
Version:     1.1
Author:      Sushil Kumar
Author URI:  http://wpmonks.com/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

// don't load directly
if ( !defined( 'ABSPATH' ) ) die( '-1' );

define( "CF_STYLER_DIR", WP_PLUGIN_DIR . "/" . basename( dirname( __FILE__ ) ) );
define( "CF_STYLER_URL", plugins_url() . "/" . basename( dirname( __FILE__ ) ) );
define( "CF_STYLER_STORE_URL", "https://wpmonks.com" );

if ( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
	include_once CF_STYLER_DIR.'/admin-menu/EDD_SL_Plugin_Updater.php';
}

include_once CF_STYLER_DIR.'/admin-menu/licenses.php';
include_once CF_STYLER_DIR.'/admin-menu/addons.php';
include_once CF_STYLER_DIR.'/admin-menu/welcome-page.php';

//Main class of Styles & layouts Gravity Forms
class Contact_Form_Customizer_Admin {

	public $all_found_forms_ids=array();
	public $cf_styler_form_count = 0;
	/**
	 *  method for all hooks
	 *
	 * @author Sushil Kumar
	 * @since  v1.0
	 */
	function __construct() {

		//add_action( 'wp', array( $this, 'get_contact_forms_shortcode' ) );
		//add_action( 'wp_head', array( $this, 'cf_styler_add_css_to_frontend' ) );
		add_action( 'customize_register', array( $this, 'cf_styler_customize_register' ) ) ;
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'cf_styler_autosave_form' ) );
		add_action( 'customize_preview_init', array( $this, 'cf_styler_live_preview' ) );
		register_activation_hook( __FILE__, array( $this, 'welcome_screen_activate' ) );
		add_action( 'admin_init', array( $this, 'welcome_screen_do_activation_redirect' ) );

		//detect contact form 7

		add_action( 'wpcf7_contact_form', array( $this, 'cf_styler_check_contact_form_id' ) );

	}

	function cf_styler_check_contact_form_id( $form ) {
		if ( !is_admin() ) {

			$css_form_id = $form->id();
			$get_style_options = get_option( 'cf_styler_form_id_'.$css_form_id );
			$main_class_object = $this;
			include 'display/class-styles.php';
			do_action( 'cf_styler_after_post_style_display', $this );

		}
	}

	// Removed in v1.1
	// function cf_styler_add_css_to_frontend() {



	//  if ( !empty( $this->all_found_forms_ids ) ) {
	//   global $post;
	//   $post_id = $post->ID;
	//   //var_dump($post_id);
	//   $number_of_forms = count( $this->all_found_forms_ids );
	//   for ( $i=0; $i<$number_of_forms; $i++ ) {
	//    $current_selected_form_id = 'cf_styler_form_id_'.$this->all_found_forms_ids[$i];
	//    $get_style_options = get_option( $current_selected_form_id );
	//    if ( !empty( $get_style_options ) ) {
	//     $css_form_id = $this->all_found_forms_ids[$i];
	//     $main_class_object = $this;
	//     include 'display/class-styles.php';

	//    }
	//   }
	//  }
	//  do_action( 'cf_styler_after_post_style_display', $this );
	// }

	/**
	 * Removed in v1.1
	 *  find all contact forms in post_content using regex
	 *
	 * @author Sushil Kumar
	 * @since  v1.0
	 * @return [null]
	 */

	// function get_contact_forms_shortcode() {
	//  global $post;
	//  $found_pos = 0;
	//  $forms_count = substr_count( $post->post_content, 'contact-form-7 id="' );

	//  for ( $i = 0; $i < $forms_count; $i++ ) {

	//   $str_position = strpos( $post->post_content, 'contact-form-7 id="', $found_pos );
	//   $str_position_end = strpos( $post->post_content, ']', $str_position );
	//   $str_length = $str_position_end - $str_position;
	//   $contact_substr = substr( $post->post_content, $str_position, $str_length );
	//   preg_match_all( "!\d+!", $contact_substr, $matched );
	//   $this->all_found_forms_ids[$i] = $matched[0][1];
	//   $found_pos = $str_position_end;

	//  }
	// }
	/**
	 *  enqueue js file that autosaves the form selection in database
	 *
	 * @author Sushil Kumar
	 * @since  v1.0
	 * @return null
	 */
	function cf_styler_autosave_form() {

		wp_enqueue_script( 'cf_styler_auto_save_form', CF_STYLER_URL. '/js/auto-save-form.js', array( 'jquery' ), '', true );

	}

	/**
	 *  shows live preview of css changes
	 *
	 * @author Sushil Kumar
	 * @since  v1.0
	 * @return null
	 */
	function cf_styler_live_preview() {

		$form_id = get_option( 'cf_styler_select_form_id' ) ;
		wp_enqueue_script( 'cf_styler_show_live_changes', CF_STYLER_URL. '/js/live-preview-changes.js', array( 'jquery', 'customize-preview' ), '', true );
		// pass formid to js
		wp_localize_script( 'cf_styler_show_live_changes', 'formId', $form_id  );
	}

	/**
	 *  Function that adds panels, sections, settings and controls
	 *
	 * @author Sushil Kumar
	 * @since  v1.0
	 * @param main    wp customizer object
	 * @return null
	 */

	function cf_styler_customize_register( $wp_customize ) {

		$current_form_id = get_option( 'cf_styler_select_form_id' );
		$border_types = array( "inherit" => "Inherit", "solid" =>"Solid", "dotted"=> "Dotted", "dashed"=> "Dashed", "double"=> "Double", "groove"=> "Groove", "ridge"=> "Ridge", "inset"=> "Inset", "outset"=> "Outset" );
		$align_pos =array( "left" =>"Left", "center" => "Center", "justify" => "Justify", "right" => "Right", );
		$font_collection = array( 'Default'=>'Default',  'Open Sans'=>'Open Sans', 'Droid Sans'=>'Droid Sans', 'PT Sans'=>'PT Sans', 'Lato'=>'Lato', 'Oswald'=>'Oswald', 'Droid Serif'=>'Droid Serif', 'Roboto'=>'Roboto', 'Lora'=>'Lora', 'Libre Baskerville'=>'Libre Baskerville', 'Josefin Slab'=>'Josefin Slab', 'Arvo'=>'Arvo', 'Ubuntu'=>'Ubuntu', 'Raleway'=>'Raleway', 'Source Sans Pro'=>'Source Sans Pro', 'Lobster'=>'Lobster', 'PT Serif'=>'PT Serif', 'Old Standard TT'=>'Old Standard TT', 'Vollkorn'=>'Vollkorn', 'Gravitas One'=>'Gravitas One', 'Merriweather'=>'Merriweather' );

		$all_contact_forms = get_posts( array( 'post_type' => 'wpcf7_contact_form' ) );
		$select_form['-1'] = '-- Select Form --' ;

		foreach ( $all_contact_forms as $post ) {

			$select_form[$post->ID] = $post->post_title;

		}



		$wp_customize->add_panel( 'cf_styler_panel', array(
				'title' => __( 'Styler for Contact Form 7' ),
				'description' => '<p> Craft your Forms</p>', // Include html tags such as <p>.
				'priority' => 160, // Mixed with top-level-section hierarchy.
			) );

		//hidden field to get form id in jquery

		if ( !array_key_exists( 'cf7formid', $_GET ) ) {

			$wp_customize->add_setting( 'cf_styler_hidden_field_for_form_id' , array(
					'default'     => $current_form_id,
					'transport'   => 'postMessage',
					'type' => 'option'
				) );

			$wp_customize->add_control( 'cf_styler_hidden_field_for_form_id', array(
					'type' => 'hidden',
					'priority' => 10, // Within the section.
					'section' => 'cf_styler_select_form_section', // Required, core or custom.
					'input_attrs' => array(
						'value' => $current_form_id,
						'id' => 'cf_styler_hidden_field_for_form_id'
					),
				) );
		}

		include 'includes/form-select.php';
		// include 'includes/customizer-addons.php';
		do_action( 'cf_styler_add_theme_section', $wp_customize, $current_form_id );
		include 'includes/form-wrapper.php';
		// include 'includes/form-header.php';
		// include 'includes/form-title.php';
		// include 'includes/form-description.php';

		// // //include 'includes/outer-shadow.php';
		// // //include 'includes/inner-shadow.php';
		include 'includes/field-labels.php';

		// include 'includes/field-sub-labels.php';
		// include 'includes/field-descriptions.php';
		include 'includes/text-fields.php';
		include 'includes/dropdown-fields.php';
		include 'includes/radio-inputs.php';
		include 'includes/checkbox-inputs.php';
		include 'includes/paragraph-textarea.php';
		include 'includes/submit-button.php';
		// include 'includes/section-break-title.php';
		// include 'includes/section-break-description.php';
		// include 'includes/confirmation-message.php';
		// include 'includes/error-message.php';
	} // main customizer function ends here

	function cf_styler_get_saved_styles( $form_id, $category ) {


		$settings = get_option( 'cf_styler_form_id_'.$form_id );

		if ( empty( $settings ) ) {
			return;
		}

		$input_styles = '';
		if ( isset( $settings[$category]['use-outer-shadows'] ) ) {
			$input_styles.= empty( $settings[$category]['horizontal-offset'] )?'box-shadow: 0px ':'box-shadow:'. $settings[$category]['outer-horizontal-offset'].' ';
			$input_styles.= empty( $settings[$category]['outer-vertical-offset'] )?'0px ': $settings[$category]['outer-vertical-offset'].' ';
			$input_styles.= empty( $settings[$category]['outer-blur-radius'] )?'0px ': $settings[$category]['outer-blur-radius'].' ';
			$input_styles.= empty( $settings[$category]['outer-spread-radius'] )?'0px ': $settings[$category]['outer-spread-radius'].' ';
			$input_styles.= empty( $settings[$category]['outer-shadow-color'] )?';': $settings[$category]['outer-shadow-color'].' ';

			if ( isset( $settings[$category]['use-inner-shadows'] ) ) {
				$input_styles.= empty( $settings[$category]['inner-horizontal-offset'] )?', 0px ':', '. $settings[$category]['inner-horizontal-offset'].' ';
				$input_styles.= empty( $settings[$category]['inner-vertical-offset'] )?'0px ': $settings[$category]['inner-vertical-offset'].' ';
				$input_styles.= empty( $settings[$category]['inner-blur-radius'] )?'0px ': $settings[$category]['inner-blur-radius'].' ';
				$input_styles.= empty( $settings[$category]['inner-spread-radius'] )?'0px ': $settings[$category]['inner-spread-radius'].' ';
				$input_styles.= empty( $settings[$category]['inner-shadow-color'] )?';': $settings[$category]['inner-shadow-color'].' inset; ';
			} else {
				$input_styles.= ';';
			}
		}

		if ( isset(  $settings[$category]['use-outer-shadows'] ) ) {
			$input_styles.= empty( $settings[$category]['outer-horizontal-offset'] )?'-moz-box-shadow: 0px ':'-moz-box-shadow:'. $settings[$category]['outer-horizontal-offset'].' ';
			$input_styles.= empty( $settings[$category]['outer-vertical-offset'] )?'0px ': $settings[$category]['outer-vertical-offset'].' ';
			$input_styles.= empty( $settings[$category]['outer-blur-radius'] )?'0px ': $settings[$category]['outer-blur-radius'].' ';
			$input_styles.= empty( $settings[$category]['outer-spread-radius'] )?'0px ': $settings[$category]['outer-spread-radius'].' ';
			$input_styles.= empty( $settings[$category]['outer-shadow-color'] )?';': $settings[$category]['outer-shadow-color'].' ';

			if ( isset( $settings[$category]['use-inner-shadows'] ) ) {
				$input_styles.= empty( $settings[$category]['inner-horizontal-offset'] )?', 0px ':', '. $settings[$category]['inner-horizontal-offset'].' ';
				$input_styles.= empty( $settings[$category]['inner-vertical-offset'] )?'0px ': $settings[$category]['inner-vertical-offset'].' ';
				$input_styles.= empty( $settings[$category]['inner-blur-radius'] )?'0px ': $settings[$category]['inner-blur-radius'].' ';
				$input_styles.= empty( $settings[$category]['inner-spread-radius'] )?'0px ': $settings[$category]['inner-spread-radius'].' ';
				$input_styles.= empty( $settings[$category]['inner-shadow-color'] )?';': $settings[$category]['inner-shadow-color'].' inset; ';
			}

			else {
				$input_styles.= ';';
			}
		}

		if ( isset( $settings[$category]['use-outer-shadows'] ) ) {
			$input_styles.= empty( $settings[$category]['outer-horizontal-offset'] )?'-webkit-box-shadow: 0px ':'-webkit-box-shadow:'. $settings[$category]['outer-horizontal-offset'].' ';
			$input_styles.= empty( $settings[$category]['outer-vertical-offset'] )?'0px ': $settings[$category]['outer-vertical-offset'].' ';
			$input_styles.= empty( $settings[$category]['outer-blur-radius'] )?'0px ': $settings[$category]['outer-blur-radius'].' ';
			$input_styles.= empty( $settings[$category]['outer-spread-radius'] )?'0px ': $settings[$category]['outer-spread-radius'].' ';
			$input_styles.= empty( $settings[$category]['outer-shadow-color'] )?';': $settings[$category]['outer-shadow-color'].' ';

			if ( isset( $settings[$category]['use-inner-shadows'] ) ) {
				$input_styles.= empty( $settings[$category]['inner-horizontal-offset'] )?', 0px ':', '. $settings[$category]['inner-horizontal-offset'].' ';
				$input_styles.= empty( $settings[$category]['inner-vertical-offset'] )?'0px ': $settings[$category]['inner-vertical-offset'].' ';
				$input_styles.= empty( $settings[$category]['inner-blur-radius'] )?'0px ': $settings[$category]['inner-blur-radius'].' ';
				$input_styles.= empty( $settings[$category]['inner-spread-radius'] )?'0px ': $settings[$category]['inner-spread-radius'].' ';
				$input_styles.= empty( $settings[$category]['inner-shadow-color'] )?';': $settings[$category]['inner-shadow-color'].' inset; ';
			}

			else {
				$input_styles.= ';';
			}
		}

		$input_styles.= empty( $settings[$category]['color'] )?'':'color:'. $settings[$category]['color'].';';
		$input_styles.= empty( $settings[$category]['background-color'] )?'':'background-color:'. $settings[$category]['background-color'].';';
		$input_styles.= empty( $settings[$category]['background-color1'] )?'':'background:-webkit-linear-gradient(to left,'. $settings[$category]['background-color'].','.$settings[$category]['background-color1'].');';
		$input_styles.= empty( $settings[$category]['background-color1'] )?'':'background:linear-gradient(to left,'. $settings[$category]['background-color'].','.$settings[$category]['background-color1'].');';
		//$input_styles.= empty( $settings[$category]['padding'] )?'':'padding:'. $settings[$category]['padding'].';';
		$input_styles.= empty( $settings[$category]['width'] )?'':'width:'. $settings[$category]['width'].';';
		$input_styles.= empty( $settings[$category]['height'] )?'':'height:'. $settings[$category]['height'].';';

		$input_styles.= empty( $settings[$category]['title-position'] )?'':'text-align:'. $settings[$category]['title-position'].';';
		$input_styles.= empty( $settings[$category]['text-align'] )?'':'text-align:'. $settings[$category]['text-align'].';';
		$input_styles.= empty( $settings[$category]['error-position'] )?'':'text-align:'. $settings[$category]['error-position'].';';
		$input_styles.= empty( $settings[$category]['description-position'] )?'':'text-align:'. $settings[$category]['description-position'].';';

		$input_styles.= empty( $settings[$category]['title-color'] )?'':'color:'. $settings[$category]['title-color'].';';
		$input_styles.= empty( $settings[$category]['font-color'] )?'':'color:'. $settings[$category]['font-color'].';';
		$input_styles.= empty( $settings[$category]['description-color'] )?'':'color:'. $settings[$category]['description-color'].';';
		$input_styles.= empty( $settings[$category]['button-color'] )?'':'background-color:'. $settings[$category]['button-color'].';';
		$input_styles.= empty( $settings[$category]['description-color'] )?'':'color:'. $settings[$category]['description-color'].';';

		$input_styles.= empty( $settings[$category]['font-family'] )?'':'font-family:'. $settings[$category]['font-family'].';';
		$input_styles.= empty( $settings[$category]['font-size'] )?'':'font-size:'. $settings[$category]['font-size'].';';
		$input_styles.= empty( $settings[$category]['max-width'] )?'':'width:'. $settings[$category]['max-width'].';';
		$input_styles.= empty( $settings[$category]['maximum-width'] )?'':'width:'. $settings[$category]['maximum-width'].';';
		$input_styles.= empty( $settings[$category]['margin'] )?'':'margin:'. $settings[$category]['margin'].';';
		$input_styles.= empty( $settings[$category]['padding'] )?'':'padding:'. $settings[$category]['padding'].';';

		$input_styles.= empty( $settings[$category]['border-size'] )?'':'border-width:'. $settings[$category]['border-size'].';';
		$input_styles.= empty( $settings[$category]['border-color'] )?'':'border-color:'. $settings[$category]['border-color'].';';
		$input_styles.= empty( $settings[$category]['border-type'] )?'':'border-style:'. $settings[$category]['border-type'].';';
		$input_styles.= empty( $settings[$category]['border-bottom'] )?'':'border-bottom-style:'. $settings[$category]['border-bottom'].';';
		$input_styles.= empty( $settings[$category]['border-bottom-size'] )?'':'border-bottom-width:'. $settings[$category]['border-bottom-size'].';';
		$input_styles.= empty( $settings[$category]['border-bottom-color'] )?'':'border-bottom-color:'. $settings[$category]['border-bottom-color'].';';

		$input_styles.= empty( $settings[$category]['custom-css'] )?'':$settings[$category]['custom-css'].';';

		$input_styles.= empty( $settings[$category]['background-image-url'] )?'':'background: url('. $settings[$category]['background-image-url'].') no-repeat;';
		$input_styles.= empty( $settings[$category]['border-bottom-color'] )?'':'border-bottom-color:'. $settings[$category]['border-bottom-color'].';';

		if ( !empty( $settings[$category]['border-radius'] ) ) {
			$input_styles .= 'border-radius:'.$settings[$category]['border-radius'].';';
			$input_styles .= '-web-border-radius:'.$settings[$category]['border-radius'].';';
			$input_styles .= '-moz-border-radius:'.$settings[$category]['border-radius'].';';
		}

		return $input_styles;
	}



	function welcome_screen_activate() {
		set_transient( '_welcome_screen_activation_redirect', true, 30 );
	}


	function welcome_screen_do_activation_redirect() {
		// Bail if no activation redirect
		if ( ! get_transient( '_welcome_screen_activation_redirect' ) ) {
			return;
		}

		// Delete the redirect transient
		delete_transient( '_welcome_screen_activation_redirect' );

		// Bail if activating from network, or bulk
		if ( is_network_admin() || isset( $_GET['activate-multi'] ) ) {
			return;
		}

		// Redirect to bbPress about page
		wp_safe_redirect( add_query_arg( array( 'page' => 'cf-styler-documentation' ), admin_url( 'admin.php' ) ) );

	}









}// class ends here

new Contact_Form_Customizer_Admin();
