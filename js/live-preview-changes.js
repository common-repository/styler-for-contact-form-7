( function( $ ) {

// var urlParams;
// (window.onpopstate = function () {
//     var match,
//         pl     = /\+/g,  // Regex for replacing addition symbol with a space
//         search = /([^&=]+)=?([^&]*)/g,
//         decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
//         query  = window.location.search.substring(1);

//     urlParams = {};
//     while (match = search.exec(query))
//        urlParams[decode(match[1])] = decode(match[2]);
// })();

var selectorIds = $('[id^="wpcf7-f'+formId);
var idList = [];




  

function addPxToValue(to){
  var parsedTo = parseInt(to);
      if(parsedTo == to){
        to = to+'px';
      }
      return to;
}

function addGoogleFont(FontName) {
var fontPlus='';
    FontName=FontName.split(" ");
    if($.isArray(FontName)){
      fontPlus = FontName[0];
      for(var i=1; i<FontName.length; i++){
       fontPlus = fontPlus +'+'+FontName[i];
      }

    }
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + fontPlus + "' rel='stylesheet' type='text/css'>");
}
//********************************* Form Wrapper *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][background-color]', function( value ) {
    
    value.bind( function( to ) {

        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'background-color',to );
            });
         } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][max-width]', function( value ) {
    value.bind( function( to ) {
      to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'width',to );
         } );
        });
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][font]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
      if(to == 'Default') {
      
         $( 'body #'+this.id ).css( 'font-family','inherit' );
      }
      else{
              addGoogleFont(to);
            $( 'body #'+this.id ).css( 'font-family',to );
          }
         } );
        });
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][border-size]', function( value ) {
    value.bind( function( to ) {
      to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'border-width',to );
         } );
        });
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][border-type]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'border-style',to );
         } );
      } );  
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][border-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'border-color',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][border-radius]', function( value ) {
    value.bind( function( to ) {
      to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'border-radius',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][background-image]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'background-image','url(' + to + ')' );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][margin]', function( value ) {
    value.bind( function( to ) {
      // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[form-wrapper][padding]', function( value ) {
    value.bind( function( to ) {
      // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body #'+this.id ).css( 'padding',to);
         } );
        } );
  } );

//********************************* Form Header *******************************************

//   wp.customize( 'cf_styler_form_id_'+formId+'[form-header][background-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'background',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[form-header][border-size]', function( value ) {
//     value.bind( function( to ) {
//       to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'border-width',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-header][border-type]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'border-style',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-header][border-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'border-color',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-header][border-radius]', function( value ) {
//     value.bind( function( to ) {
//       to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'border-radius',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[form-header][margin]', function( value ) {
//     value.bind( function( to ) {
//       to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-header][padding]', function( value ) {
//     value.bind( function( to ) {
//       to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading' ).css( 'padding',to);
//          } );
//         } );
//   } );


//********************************* Form Title *******************************************


// wp.customize( 'cf_styler_form_id_'+formId+'[form-title][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_title' ).css( 'color',to );
//          } );
//         } );
//   } );



// wp.customize( 'cf_styler_form_id_'+formId+'[form-title][font-size]', function( value ) {
//     value.bind( function( to ) {
//     to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_title' ).css( 'font-size',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-title][text-align]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_title' ).css( 'text-align',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[form-title][margin]', function( value ) {
//     value.bind( function( to ) {
//     to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_title' ).css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-title][padding]', function( value ) {
//     value.bind( function( to ) {
//     to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_title' ).css( 'padding',to);
//          } );
//         } );
//   } );


// //********************************* Form Description *******************************************

// wp.customize( 'cf_styler_form_id_'+formId+'[form-description][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_description' ).css( 'color',to );
//          } );
//         } );
//   } );



// wp.customize( 'cf_styler_form_id_'+formId+'[form-description][font-size]', function( value ) {
//     value.bind( function( to ) {
//     to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_description' ).css( 'font-size',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-description][text-align]', function( value ) {
//     value.bind( function( to ) {

//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_description' ).css( 'text-align',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[form-description][margin]', function( value ) {
//     value.bind( function( to ) {
//     to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_description' ).css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[form-description][padding]', function( value ) {
//     value.bind( function( to ) {
//     to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_heading .gform_description' ).css( 'padding',to);
//          } );
//         } );
//   } );

//********************************* Dropdown Fields *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][font-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'color',to );
         } );
        } );
  } );

   wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][font-size]', function( value ) {
    value.bind( function( to ) {
    to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'font-size',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][max-width]', function( value ) {
    value.bind( function( to ) {
    to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][background-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'background',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][border-size]', function( value ) {
    value.bind( function( to ) {
    to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'border-width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][border-type]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'border-style',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][border-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'border-color',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][border-radius]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'border-radius',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[dropdown-fields][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 select.wpcf7-select' ).css( 'padding',to);
         } );
        } );
  } );

//********************************* Radio Inputs *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[radio-inputs][font-color]', function( value ) {
    value.bind( function( to ) {
     
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-radio .wpcf7-list-item-label' ).css( 'color',to );
         } );
        } );
  } );

   wp.customize( 'cf_styler_form_id_'+formId+'[radio-inputs][font-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-radio .wpcf7-list-item-label' ).css( 'font-size',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[radio-inputs][max-width]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-radio .wpcf7-list-item-label' ).css( 'width',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[radio-inputs][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-radio .wpcf7-list-item-label' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[radio-inputs][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-radio .wpcf7-list-item-label' ).css( 'padding',to);
         } );
        } );
  } );

//********************************* Checkbox Inputs *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[checkbox-inputs][font-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-checkbox .wpcf7-list-item-label' ).css( 'color',to );
         } );
        } );
  } );

   wp.customize( 'cf_styler_form_id_'+formId+'[checkbox-inputs][font-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-checkbox .wpcf7-list-item-label' ).css( 'font-size',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[checkbox-inputs][max-width]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-checkbox .wpcf7-list-item-label' ).css( 'width',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[checkbox-inputs][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-checkbox .wpcf7-list-item-label' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[checkbox-inputs][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7-form .wpcf7-checkbox .wpcf7-list-item-label' ).css( 'padding',to);
         } );
        } );
  } );
//********************************* Field Labels *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[field-labels][font-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 p' ).css( 'color',to );
            $( 'body .wpcf7 div' ).css( 'color',to );
            $( 'body .wpcf7 label' ).css( 'color',to );
            $( 'body .wpcf7 span' ).css( 'color',to );

         } );
        } );
  } );

   wp.customize( 'cf_styler_form_id_'+formId+'[field-labels][font-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 p' ).css( 'font-size',to );
            $( 'body .wpcf7 div' ).css( 'font-size',to );
            $( 'body .wpcf7 label' ).css( 'font-size',to );
            $( 'body .wpcf7 span' ).css( 'font-size',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[field-labels][text-align]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 p' ).css( 'text-align',to );
            $( 'body .wpcf7 div' ).css( 'text-align',to );
            $( 'body .wpcf7 label' ).css( 'text-align',to );
            $( 'body .wpcf7 span' ).css( 'text-align',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[field-labels][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 p' ).css( 'margin',to );
            $( 'body .wpcf7 div' ).css( 'margin',to );
            $( 'body .wpcf7 label' ).css( 'margin',to );
            $( 'body .wpcf7 span' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[field-labels][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 p' ).css( 'padding',to);
            $( 'body .wpcf7 div' ).css( 'padding',to );
            $( 'body .wpcf7 label' ).css( 'padding',to );
            $( 'body .wpcf7 span' ).css( 'padding',to );
         } );
        } );
  } );

//********************************* Sub Labels *******************************************


// wp.customize( 'cf_styler_form_id_'+formId+'[field-sub-labels][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//                 $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_full label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_right label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_left label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_time_hour label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_time_minute label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_month label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_day label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_year label' ).css( 'color',to );

//               $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .name_first label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .name_last label' ).css( 'color',to );
             
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_line_1 label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_line_2 label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_city label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_state label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_zip label' ).css( 'color',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_country label' ).css( 'color',to );
//          } );
//         } );
//   } );

//    wp.customize( 'cf_styler_form_id_'+formId+'[field-sub-labels][font-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_full label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_right label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_left label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_time_hour label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_time_minute label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_month label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_day label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_year label' ).css( 'font-size',to );

//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .name_first label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .name_last label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_line_1 label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_line_2 label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_city label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_state label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_zip label' ).css( 'font-size',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_country label' ).css( 'font-size',to );

//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[field-sub-labels][padding]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_full label' ).css( 'padding',to);
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_right label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .ginput_complex .ginput_left label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_time_hour label' ).css( 'padding',to);
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_time_minute label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_month label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_day label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_date_year label' ).css( 'padding',to );

//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .name_first label' ).css( 'padding',to);
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .name_last label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_line_1 label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_line_2 label' ).css( 'padding',to);
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_city label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_state label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_zip label' ).css( 'padding',to );
//              $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .address_country label' ).css( 'padding',to );
//          } );
//         } );
//   } );
// //********************************* Field Descriptions *******************************************


//   wp.customize( 'cf_styler_form_id_'+formId+'[field-descriptions][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_description' ).css( 'color',to );
//          } );
//         } );
//   } );

//    wp.customize( 'cf_styler_form_id_'+formId+'[field-descriptions][font-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_description' ).css( 'font-size',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[field-descriptions][text-align]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_description' ).css( 'display','block' );
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_description' ).css( 'text-align',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[field-descriptions][margin]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_description' ).css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[field-descriptions][padding]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gfield .gfield_description' ).css( 'padding',to);
//          } );
//         } );
//   } );

//********************************* Text Fields *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][font-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'color',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'color',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'color',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'color',to );
         } );
        } );
  } );

   wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][font-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'font-size',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'font-size',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'font-size',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'font-size',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][max-width]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'width',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'width',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'width',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][background-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'background-color',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'background-color',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'background-color',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'background-color',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'border-width',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'border-width',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'border-width',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-type]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'border-style',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'border-style',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'border-style',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-style',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'border-color',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'border-color',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'border-color',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-style',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-radius]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'border-radius',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'border-radius',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'border-radius',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-radius',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'margin',to );
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'margin',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'margin',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-text' ).css( 'padding',to);
            $( 'body .wpcf7 input.wpcf7-quiz' ).css( 'padding',to );
            $( 'body .wpcf7 input.wpcf7-number' ).css( 'padding',to );
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'padding',to );
         } );
        } );
  } );

//********************************* Paragraph Textarea Fields *******************************************
  wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][font-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'color',to );
         } );
        } );
  } );

   wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][font-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'font-size',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][background-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'background',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-type]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-style',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-color',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[text-fields][border-radius]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'border-radius',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[paragraph-textarea][max-width]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'width',to );
         } );
        } );
  } );


wp.customize( 'cf_styler_form_id_'+formId+'[paragraph-textarea][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[paragraph-textarea][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 textarea.wpcf7-textarea' ).css( 'padding',to);
         } );
        } );
  } );

//********************************* Submit Button *******************************************


  wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][button-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'background',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][width]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][height]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'height',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][button-align]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'float',to );
            $( 'body .wpcf7 div.wpcf7-response-output' ).css( 'clear','both' );
         } );
        } );
  } );



wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][font-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'font-size',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][border-size]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'border-width',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][border-type]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'border-style',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][border-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'border-color',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][border-radius]', function( value ) {
    value.bind( function( to ) {
     to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'border-radius',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][font-color]', function( value ) {
    value.bind( function( to ) {
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'color',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][margin]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'margin',to );
         } );
        } );
  } );

wp.customize( 'cf_styler_form_id_'+formId+'[submit-button][padding]', function( value ) {
    value.bind( function( to ) {
     // to = addPxToValue(to);
        $.each(selectorIds, function(){
            $( 'body .wpcf7 input.wpcf7-submit' ).css( 'padding',to);
         } );
        } );
  } );

//********************************* Section Break Title *******************************************


//   wp.customize( 'cf_styler_form_id_'+formId+'[section-break-title][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_title' ).css( 'color',to );
//          } );
//         } );
//   } );

//    wp.customize( 'cf_styler_form_id_'+formId+'[section-break-title][font-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_title' ).css( 'font-size',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[section-break-title][text-align]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_title' ).css( 'text-align',to );
//          } );
//         } );
//   } );


// //********************************* Section Break Description *******************************************


//   wp.customize( 'cf_styler_form_id_'+formId+'[section-break-description][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_description' ).css( 'color',to );
//          } );
//         } );
//   } );

//    wp.customize( 'cf_styler_form_id_'+formId+'[section-break-description][font-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_description' ).css( 'font-size',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[section-break-description][text-align]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_description' ).css( 'text-align',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[section-break-description][margin]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection .gsection_description' ).css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[section-break-description][padding]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .gform_body .gform_fields .gsection' ).css( 'padding',to);
//          } );
//         } );
//   } );

// //********************************* Confirmation Message *******************************************


//   wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'color',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][text-align]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'text-align',to );
//          } );
//         } );
//   } );

//    wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][font-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'font-size',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][max-width]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'width',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][background-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'background',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][border-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'border-width',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][border-type]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'border-style',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][border-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'border-color',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][border-radius]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'border-radius',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][margin]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[confirmation-message][padding]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gforms_confirmation_message_' ).css( 'padding',to);
//          } );
//         } );
//   } );

// //********************************* error Message *******************************************


//   wp.customize( 'cf_styler_form_id_'+formId+'[error-message][font-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'color',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][text-align]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'text-align',to );
//          } );
//         } );
//   } );

//    wp.customize( 'cf_styler_form_id_'+formId+'[error-message][font-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'font-size',to );
//          } );
//         } );
//   } );


// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][max-width]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'width',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][background-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'background',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][border-size]', function( value ) {
//     value.bind( function( to ) {
//      to = addPxToValue(to);
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'border-width',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][border-type]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'border-style',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][border-color]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//             $( '#gform_wrapper_'+' .validation_error').css( 'border-color',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][border-radius]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//          to = addPxToValue(to);
//             $( '#gform_wrapper_'+' .validation_error').css( 'border-radius',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][margin]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//          to = addPxToValue(to);
//             $( '#gform_wrapper_'+' .validation_error').css( 'margin',to );
//          } );
//         } );
//   } );

// wp.customize( 'cf_styler_form_id_'+formId+'[error-message][padding]', function( value ) {
//     value.bind( function( to ) {
//         $.each(selectorIds, function(){
//          to = addPxToValue(to);
//             $( '#gform_wrapper_'+' .validation_error').css( 'padding',to);
//          } );
//         } );
//   } );


} )( jQuery );
