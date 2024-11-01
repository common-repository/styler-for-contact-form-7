<?php
//form fields section

$wp_customize->add_section( 'cf_styler_form_id_field_sub_labels' , array(
    'title' => 'Sub Labels',
    'panel' => 'cf_styler_panel',
  ) );

 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[field-sub-labels][font-size]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[field-sub-labels][font-size]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_field_sub_labels', // Required, core or custom.
    'label' => __( 'Sub Label Font Size' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 40px or 90%'
  )
  )
);


 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[field-sub-labels][font-color]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control(
  new WP_Customize_Color_Control(
    $wp_customize, // WP_Customize_Manager
    'cf_styler_form_id_'.$current_form_id.'[field-sub-labels][font-color]', // Setting id
    array( // Args, including any custom ones.
      'label' => __( 'Sub Label Font Color' ),
      'section' => 'cf_styler_form_id_field_sub_labels',
    )
  )
);

 
//   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[field-sub-labels][margin]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[field-sub-labels][margin]',   array(
//     'type' => 'text',
//     'priority' => 10, // Within the section.
//     'section' => 'cf_styler_form_id_field_sub_labels', // Required, core or custom.
//     'label' => __( 'Margin' ),
//    'input_attrs' => array(
//     'placeholder' => 'Example: 5px 10px 5px 10px'
//   )
//   )
// );

   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[field-sub-labels][padding]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[field-sub-labels][padding]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_field_sub_labels', // Required, core or custom.
    'label' => __( 'Padding' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 5px 10px 5px 10px'
  )
  )
);