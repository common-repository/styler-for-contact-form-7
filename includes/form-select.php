<?php
 $wp_customize->add_section( 'cf_styler_select_form_section' , array(
    'title' => 'Select Form',
    'panel' => 'cf_styler_panel',
  ) );

  $wp_customize->add_setting( 'cf_styler_select_form_id' , array(
      'default'     => '-1',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );
  
  
  $wp_customize->add_control( 'cf_styler_select_form_id', array(
    'type' => 'select',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_select_form_section', // Required, core or custom.
    'label' => __( 'Select Form' ),
    'choices'        => $select_form,
   
) );

