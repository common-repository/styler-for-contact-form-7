<?php

$wp_customize->add_section( 'cf_styler_form_id_error_message' , array(
    'title' => 'Error Message',
    'panel' => 'cf_styler_panel',
  ) );

 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][max-width]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][max-width]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
    'label' => __( 'Maximum Width' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 400px or 90%'
  )
  )
);

$wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][text-align]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][text-align]',   array(
    'type' => 'select',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
    'label' => __( 'Text Alignment' ),
    'choices'        => $align_pos,
  )
);
//    $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][font-size]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][font-size]',   array(
//     'type' => 'text',
//     'priority' => 10, // Within the section.
//     'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
//     'label' => __( 'Font Size' ),
//    'input_attrs' => array(
//     'placeholder' => 'Example: 40px'
//   )
//   )
// );

// $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][font-color]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control(
//   new WP_Customize_Color_Control(
//     $wp_customize, // WP_Customize_Manager
//     'cf_styler_form_id_'.$current_form_id.'[error-message][font-color]', // Setting id
//     array( // Args, including any custom ones.
//       'label' => __( 'Font Color' ),
//       'section' => 'cf_styler_form_id_error_message',
//     )
//   )
// );
  $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][border-size]' , array(
      'default'     => '1px',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][border-size]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
    'label' => __( 'Border Size' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 4px or 10%'
  )
  )
);

   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][border-type]' , array(
      'default'     => 'inherit',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][border-type]',   array(
    'type' => 'select',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
    'label' => __( 'Border Type' ),
    'choices'        => $border_types,
  )
);

//  $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][border-color]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control(
//   new WP_Customize_Color_Control(
//     $wp_customize, // WP_Customize_Manager
//     'cf_styler_form_id_'.$current_form_id.'[error-message][border-color]', // Setting id
//     array( // Args, including any custom ones.
//       'label' => __( 'Border Color' ),
//       'section' => 'cf_styler_form_id_error_message',
//     )
//   )
// );

//  $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][border-radius]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][border-radius]',   array(
//     'type' => 'text',
//     'priority' => 10, // Within the section.
//     'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
//     'label' => __( 'Border Radius' ),
//    'input_attrs' => array(
//     'placeholder' => 'Example: 4px or 10%'
//   )
//   )
// );

 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][background-color]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control(
  new WP_Customize_Color_Control(
    $wp_customize, // WP_Customize_Manager
    'cf_styler_form_id_'.$current_form_id.'[error-message][background-color]', // Setting id
    array( // Args, including any custom ones.
      'label' => __( 'Background Color' ),
      'section' => 'cf_styler_form_id_error_message',
    )
  )
);


//   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][margin]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][margin]',   array(
//     'type' => 'text',
//     'priority' => 10, // Within the section.
//     'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
//     'label' => __( 'Margin' ),
//    'input_attrs' => array(
//     'placeholder' => 'Example: 5px 10px 5px 10px'
//   )
//   )
// );

   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[error-message][padding]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[error-message][padding]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_error_message', // Required, core or custom.
    'label' => __( 'Padding' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 5px 10px 5px 10px'
  )
  )
);