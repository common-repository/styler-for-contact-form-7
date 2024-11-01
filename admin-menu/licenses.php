<?php

class Cf_Styler_License_Page{

	function __construct(){
		add_action('admin_menu',array($this,'register_menu') );
		add_action( 'admin_init', array( $this, 'setting_fields' ) );
	}

	public function register_menu(){
		add_menu_page(  'Styler for Contact Form 7', 'Styler for Contact Form 7', 'manage_options', 'cf_styler_licenses' );
		add_submenu_page( 'cf_styler_licenses', 'Licenses', 'Licenses', 'manage_options', 'cf_styler_licenses', array( $this, 'license_settings' ) );
	}

	public function license_settings(){

		?>
			<!-- Create a header in the default WordPress 'wrap' container -->
    <div class="wrap">

        <!-- Make a call to the WordPress function for rendering errors when settings are saved. -->
        <?php settings_errors(); ?>

        <!-- Create the form that will be used to render our options -->
        <form method="post" action="options.php">
            <?php settings_fields( 'cf_styler_licenses' ); ?>
            <?php do_settings_sections( 'cf_styler_licenses' ); ?>
            <?php submit_button(); ?>
        </form>

    </div><!-- /.wrap -->
	<?php
	}


	function setting_fields(){
		// If settings don't exist, create them.
		if ( false == get_option( 'cf_styler_licenses' ) ) {
			add_option( 'cf_styler_licenses' );
		}


		add_settings_section(
			'cf_styler_licenses_section',
			'Add-On Licenses',
			array( $this, 'section_callback' ),
			'cf_styler_licenses'
		);

	
		do_action('cf-styler-license-fields',$this);

		//register settings
		register_setting( 'cf_styler_licenses', 'cf_styler_licenses' );

	}

	public function section_callback() {

		echo '';
	}


}

new Cf_Styler_License_Page();