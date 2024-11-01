<?php
//form text fields section
class Themes_Pack_Custom_Control extends WP_Customize_Control
{
  /**
   * Render the control's content.
   * Allows the content to be overriden without having to rewrite the wrapper.
   */
  public function render_content() {
    ?>
    <label>
        <h2><?php echo esc_html( $this->label ); ?></h2>
        <a href="https://wpmonks.com/downloads/theme-pack?src=customizer" target="_blank"><img src="<?php echo GF_STLA_URL; ?>/css/images/theme-pack.jpg"></a>
        <h3>Get pack of beautifully crafted themes and design forms instantly</h3>
        <hr>
      </textarea>
    </label>
    <?php
  }
}

class Widget_Sidebar_Custom_Control extends WP_Customize_Control
{
  /**
   * Render the control's content.
   * Allows the content to be overriden without having to rewrite the wrapper.
   */
  public function render_content() {
    ?>
    <label>
        <h2><?php echo esc_html( $this->label ); ?></h2>
        <a href="https://wpmonks.com/downloads/widget-sidebar-addon?src=customizer" target="_blank"><img src="<?php echo GF_STLA_URL; ?>/css/images/widget-sidebar.jpg"></a>
        <h3>Save styles for Forms in Sidebar added using Gravity Forms Widget</h3>
        <hr>
      </textarea>
    </label>
    <?php
  }
}

class More_Addons_Custom_Control extends WP_Customize_Control
{
  /**
   * Render the control's content.
   * Allows the content to be overriden without having to rewrite the wrapper.
   */
  public function render_content() {
    ?>
    <label>
        <h2><?php echo esc_html( $this->label ); ?></h2>
        <a href="https://wpmonks.com/contact-form-styler/?src=customizer#x-section-6" target="_blank"><img src="<?php echo GF_STLA_URL; ?>/css/images/more-addons.jpg"></a>
        <h3>Checkout more addons</h3>
        <hr>
      </textarea>
    </label>
    <?php
  }
}

$wp_customize->add_section( 'cf_styler_form_id_addons' , array(
    'title' => 'Addons',
    'panel' => 'cf_styler_panel',
  ) );

 $wp_customize->add_setting( 'cf_styler_form_id_[addons][theme-pack]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

$wp_customize->add_control(
  new Themes_Pack_Custom_Control(
    $wp_customize, // WP_Customize_Manager
    'cf_styler_form_id_[addons][theme-pack]', // Setting id
    array( // Args, including any custom ones.
     'label' => __( 'Theme Pack' ),
      'section' => 'cf_styler_form_id_addons',
    )
  )
);

 $wp_customize->add_setting( 'cf_styler_form_id_[addons][widget-sidebar]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

$wp_customize->add_control(
  new Widget_Sidebar_Custom_Control(
    $wp_customize, // WP_Customize_Manager
    'cf_styler_form_id_[addons][widget-sidebar]', // Setting id
    array( // Args, including any custom ones.
      'label' => __( 'Widget & Sidebar Addon' ),
      'section' => 'cf_styler_form_id_addons',
    )
  )
);

 $wp_customize->add_setting( 'cf_styler_form_id_[addons][more]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

$wp_customize->add_control(
  new More_Addons_Custom_Control(
    $wp_customize, // WP_Customize_Manager
    'cf_styler_form_id_[addons][more]', // Setting id
    array( // Args, including any custom ones.
      'label' => __( 'More Addons '),
      'section' => 'cf_styler_form_id_addons',
    )
  )
);

