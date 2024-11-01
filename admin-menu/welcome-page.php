<?php

class Cf_Styler_Welcome_Page{

  function __construct() {
    add_action( 'admin_menu', array( $this, 'register_menu' ) );
  }

    public function register_menu() {

    add_submenu_page(  'cf_styler_licenses', 'Documentation', 'Documentation', 'manage_options', 'cf-styler-documentation', array( $this, 'show_documentation' ) );
    //add_action( 'admin_enqueue_scripts', array( $this, 'add_scripts' ) );


  }

  function show_documentation(){
    $cf_styler_version = get_plugin_data( CF_STYLER_DIR.'/styler-for-contact-form7.php', $markup = true, $translate = true );
    
?>
<div class="wrap about-wrap">

  <h1><?php printf( __( 'Styler for Contact Form 7 &nbsp;v%s' ), $cf_styler_version["Version"] ); ?></h1>

  <div class="about-text">
    <?php printf(  'Styler for Contact Form 7 lets you create beautiful designs for your Forms with WordPress "Customizer". All the changes are previewd instantly.' ); ?>
  </div>

  <div class="cfc_logo"></div>


  <!-- <div class="changelog point-releases">
    <h3><?php echo _n( 'Maintenance and Security Release', 'Maintenance and Security Releases', 4 ); ?></h3>
    <p><?php printf( _n( '<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.',
           '<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.', 4 ), '4.2.4', number_format_i18n( 4 ) ); ?>
      <?php printf( __( 'For more information, see <a href="%s">the release notes</a>.' ), 'http://codex.wordpress.org/Version_4.2.4' ); ?>
    </p>

  </div> -->

  <div class="feature-section changelog one-col" style="padding-bottom:0px; margin-bottom:0px">
        <h2 style="padding-top:0px; margin-top:0px>Features:">Features</h2>
         <li><strong></strong>Live preview all changes.</li>
          <li><strong></strong>Large set of options to customize different aspects of form.</li>
          <li><strong></strong>Create different designs for different forms.</li>
                  </ul>

      </div>
  <div class="feature-section changelog one-col" >
        <h2>How to use Styler for Contact Form 7</h2>

        <ul>
          <?php if ( ! defined( 'WPCF7_VERSION' ) ) { ?>
            <li><strong>Step #0: </strong><a href="/wp-admin/plugins.php?page=cfc-install-plugins" target="_blank">Install & Activate <code>Contact Form 7</code></a>.</li>
          <?php } ?>

          <li style="margin-bottom: 16px; margin-top: 16px;"><strong>Step #1:</strong> Login into WordPress Dashboard and open the page in "frontend" where you have added the form.</li>
          <img style="border-width:2px; border-style:solid; border-color:#000; width:700px" src="<?php echo CF_STYLER_URL . '/admin-menu/images/step1.png'; ?>" />
          <li style="margin-bottom: 16px; margin-top: 16px;"><strong>Step #2:</strong> Open customizer from admin bar and navigate to <strong>Styler for Contact Form 7</strong> panel.</li>
          <img style="border-width:2px; border-style:solid; border-color:#000; width:700px" src="<?php echo CF_STYLER_URL . '/admin-menu/images/step2.png'; ?>" />
          <li style="margin-bottom: 16px; margin-top: 16px;"><strong>Step #3:</strong> Select the form you want to design and the page will automatically refresh.</li>
          <img style="border-width:2px; border-style:solid; border-color:#000; width:700px" src="<?php echo CF_STYLER_URL . '/admin-menu/images/step3.png'; ?>" />
          <li style="margin-bottom: 16px; margin-top: 16px;"><strong>Step #4:</strong> Again Navigate to <strong>Styler for Contact Form 7</strong> panel and you will see all options to design the form.</li>
          <img style="border-width:2px; border-style:solid; border-color:#000; width:700px" src="<?php echo CF_STYLER_URL . '/admin-menu/images/step4.png'; ?>" />
          <li style="margin-bottom: 16px; margin-top: 16px;"><strong>Step #5:</strong> Every change will be previewed instantly. Now click on <strong>Save and Publish</strong> button to save the changes. </li>
          <img style="border-width:2px; border-style:solid; border-color:#000; width:700px" src="<?php echo CF_STYLER_URL . '/admin-menu/images/step5.png'; ?>" />
        </ul>

      </div>

   


 </div> <!-- Last Div -->

 <?php
}
}

new Cf_Styler_Welcome_Page();