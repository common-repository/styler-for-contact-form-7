<?php
//form  section

 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[section-break-description][text-align]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[section-break-description][text-align]',   array(
    'type' => 'select',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_section_break_title_description', // Required, core or custom.
    'label' => __( 'Description Font Alignment' ),
    'choices'        => $align_pos,
  )
);


 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[section-break-description][font-size]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[section-break-description][font-size]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_section_break_title_description', // Required, core or custom.
    'label' => __( 'Description Font Size' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 40px or 90%'
  )
  )
);


 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[section-break-description][font-color]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control(
  new WP_Customize_Color_Control(
    $wp_customize, // WP_Customize_Manager
    'cf_styler_form_id_'.$current_form_id.'[section-break-description][font-color]', // Setting id
    array( // Args, including any custom ones.
      'label' => __( 'Description Font Color' ),
      'section' => 'cf_styler_form_id_section_break_title_description',
    )
  )
);

 
//   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[section_break_description][margin]' , array(
//       'default'     => '',
//       'transport'   => 'postMessage',
//       'type' => 'option'
//   ) );

//   $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[section_break_description][margin]',   array(
//     'type' => 'text',
//     'priority' => 10, // Within the section.
//     'section' => 'cf_styler_form_id_section_break_title_description', // Required, core or custom.
//     'label' => __( 'Description Margin' ),
//    'input_attrs' => array(
//     'placeholder' => 'Example: 5px 10px 5px 10px'
//   )
//   )
// );

   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[section-break-description][padding]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[section-break-description][padding]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_section_break_title_description', // Required, core or custom.
    'label' => __( 'Padding' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 5px 10px 5px 10px'
  )
  )
);