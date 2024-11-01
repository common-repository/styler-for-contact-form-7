( function( $ ) {

var waitforformsubmit;
var reload_url_key = 'cf7formid';
var reload_url_value;

//change select form dropdown to -1 value
$('body').on('click', '#accordion-section-cf_styler_select_form_section h3.accordion-section-title', function(){
	if($('#customize-control-cf_styler_hidden_field_for_form_id').length){
	$('#customize-control-cf_styler_select_form_id label select').val(-1);
 	} 	});


//hide all the selection fields if no form selected
$('body').on('click', '#accordion-panel-cf_styler_panel',function(){
if($('#customize-control-cf_styler_hidden_field_for_form_id').length){
    $('#accordion-section-cf_styler_form_id_form_wrapper').hide();
    $('#accordion-section-cf_styler_form_id_form_header').hide();
    $('#accordion-section-cf_styler_form_id_form_title_description').hide();
    $('#accordion-section-cf_styler_form_id_submit_button').hide();
    $('#accordion-section-cf_styler_form_id_field_labels').hide();
    $('#accordion-section-cf_styler_form_id_field_descriptions').hide();
    $('#accordion-section-cf_styler_form_id_text_fields').hide();
    $('#accordion-section-cf_styler_form_id_dropdown_fields').hide();
    $('#accordion-section-cf_styler_form_id_radio_inputs').hide();
    $('#accordion-section-cf_styler_form_id_checkbox_inputs').hide();
    $('#accordion-section-cf_styler_form_id_paragraph_textarea').hide();
    $('#accordion-section-cf_styler_form_id_section_break_title_description').hide();
    $('#accordion-section-cf_styler_form_id_confirmation_message').hide();
    $('#accordion-section-cf_styler_form_id_error_message').hide();
    $('#accordion-section-cf_styler_form_id_addons').hide();
    $('#accordion-section-cf_styler_form_id_field_sub_labels').hide();
    }

});

//append form id in url and refresh the page
$('body').on('change', '#customize-control-cf_styler_select_form_id select', function(){

alert('Saving Form Selection. Start Styling after page refresh !!!');
$('form #customize-header-actions #save').click();
$('#customize-preview').removeClass('iframe-ready');
$('#customize-preview iframe').hide();
 waitforformsubmit = setInterval(check_button_disabled, 2000);
});

function check_button_disabled(){
    if(!$('body.wp-customizer').hasClass('saving')){

      clearInterval(waitforformsubmit);
    reload_url_value = 'cf_styler_panel';

     reload_url_key = 'autofocus[panel]';

        var kvp = document.location.search.substr(1).split('&');
        if (kvp == '') {
            document.location.search = '?' + reload_url_key + '=' + reload_url_value;
        }
        else {

            var i = kvp.length; var x; while (i--) {
                x = kvp[i].split('=');

                if (x[0] == reload_url_key) {
                    x[1] = reload_url_value;
                    kvp[i] = x.join('=');
                    break;
                }
            }

            if (i < 0) { kvp[kvp.length] = [reload_url_key, reload_url_value].join('='); }

            //this will reload the page, it's likely better to store this until finished
           document.location.search = kvp.join('&');
             }

      }}

} )( jQuery );