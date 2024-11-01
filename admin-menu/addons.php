<?php

class CF_Styler_Addons_Page {

	function __construct() {
		add_action( 'admin_menu', array( $this, 'register_menu' ) );
	}

	public function register_menu() {

		add_submenu_page(  'cf_styler_licenses', 'Add-Ons', 'Add-Ons', 'manage_options', 'cf-styler-addons', array( $this, 'show_addons' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_scripts' ) );


	}

	public function add_scripts() {
		wp_enqueue_style( 'cf-styler-admin-css', CF_STYLER_URL.'/css/cf-styler-admin.css' );
	}

	public function show_addons() {

?>
		 

		<div class="cf-styler-extend cf-styler-box">
		<img src="<?php echo CF_STYLER_URL; ?>/css/images/coming-soon.jpg">
		<h2>Coming Soon</h2>
		<div class="cf-styler-extend-content">
		<p>Keep looking for more addons</p>
		<div class="cf-styler-extend-buttons">

		<a href="https://wpmonks.com/contact-form-styler/" target="_blank" title="Conditional Logic" class="button-primary nf-button">Learn More</a>
		</div>
		</div>
		</div> <!-- End Stla Box -->
		 </div>
	<?php
	}



}

new CF_Styler_Addons_Page();
