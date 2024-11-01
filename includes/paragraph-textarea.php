<?php
//form text fields section

$wp_customize->add_section( 'cf_styler_form_id_paragraph_textarea' , array(
    'title' => 'Paragraph Textarea Fields',
    'panel' => 'cf_styler_panel',
  ) );

 $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[paragraph-textarea][max-width]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[paragraph-textarea][max-width]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_paragraph_textarea', // Required, core or custom.
    'label' => __( 'Maximum Width' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 400px or 90%'
  )
  )
);
 
  $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[paragraph-textarea][margin]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[paragraph-textarea][margin]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_paragraph_textarea', // Required, core or custom.
    'label' => __( 'Margin' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 5px 10px 5px 10px'
  )
  )
);

   $wp_customize->add_setting( 'cf_styler_form_id_'.$current_form_id.'[paragraph-textarea][padding]' , array(
      'default'     => '',
      'transport'   => 'postMessage',
      'type' => 'option'
  ) );

  $wp_customize->add_control('cf_styler_form_id_'.$current_form_id.'[paragraph-textarea][padding]',   array(
    'type' => 'text',
    'priority' => 10, // Within the section.
    'section' => 'cf_styler_form_id_paragraph_textarea', // Required, core or custom.
    'label' => __( 'Padding' ),
   'input_attrs' => array(
    'placeholder' => 'Example: 5px 10px 5px 10px'
  )
  )
);