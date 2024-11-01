<?php
$get_form_options = get_option( "cf_styler_form_id_".$css_form_id );
if ( isset( $get_form_options['form-wrapper']['font'])) {
    $font_name = $get_form_options['form-wrapper']['font'];
    $font_name= str_replace(' ', '+', $font_name);

    if ($font_name !== 'Default') {
        echo "<link href='https://fonts.googleapis.com/css?family=".$font_name."' rel='stylesheet' type='text/css'>";
    }
}
$this->cf_styler_form_count++;

$form_count = $this->cf_styler_form_count;
    if ( in_the_loop() ) {
            $unit_tag = sprintf( 'wpcf7-f%1$d-p%2$d-o%3$d',
                absint( $css_form_id ), get_the_ID(), $form_count );
        } else {
            $unit_tag = sprintf( 'wpcf7-f%1$d-o%2$d',
                absint( $css_form_id ), $form_count );
        }
    
?>

<style type="text/css">

body #<?php echo $unit_tag ?> {

    <?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'form-wrapper' );  ?>
<?php echo empty($get_form_options['form-wrapper']['background-image'])?'':'background-image:url("'. $get_form_options['form-wrapper']['background-image'].'");' ;  ?>
<?php
if(!empty($get_form_options['form-wrapper']['font'])){
    if($get_form_options['form-wrapper']['font'] == 'Default'){
        echo 'font-family:inherit;' ;
    }
    else{
        echo 'font-family:'. $get_form_options['form-wrapper']['font'].';' ;
    }
} ?>


}


body #<?php echo $unit_tag ?> p, body #<?php echo $unit_tag ?> span, body #<?php echo $unit_tag ?> div, body #<?php echo $unit_tag ?> label{
    border-width:0px;
    border-style:inherit;
<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'field-labels' );  ?>

}

body #<?php echo $unit_tag ?> input.wpcf7-text, body #<?php echo $unit_tag ?> input.wpcf7-quiz, body #<?php echo $unit_tag ?> input.wpcf7-number, body #<?php echo $unit_tag ?> textarea.wpcf7-textarea{
border-width:0px;
border-style:inherit;
<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'text-fields' );  ?>

}

body #<?php echo $unit_tag ?> select.wpcf7-select {
border-width:0px;
border-style:inherit;
<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'dropdown-fields' );  ?>

}

body #<?php echo $unit_tag ?> .wpcf7-radio .wpcf7-list-item-label{
border-width:0px;
border-style:inherit;
<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'radio-inputs' );  ?>

}

body #<?php echo $unit_tag ?> .wpcf7-checkbox .wpcf7-list-item-label{
border-width:0px;
border-style:inherit;
<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'checkbox-inputs' );  ?>

}

body #<?php echo $unit_tag ?> textarea.wpcf7-textarea {

<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'paragraph-textarea' );  ?>

}

body #<?php echo $unit_tag ?> input.wpcf7-submit {
border-width:0px;
border-style:inherit;
<?php echo $main_class_object->cf_styler_get_saved_styles($css_form_id, 'submit-button' );  ?>

}
</style>
