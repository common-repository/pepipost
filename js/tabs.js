
jQuery(document).ready(function($) {
  
  $( "#pepi_from_date" ).datepicker({
      defaultDate: "+1w",
    changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
      minDate: -90, 
      maxDate: "-3M +92D",
      onSelect: function (selectedDate) {
            var dt = new Date(selectedDate);
            dt.setDate(dt.getDate() + 1);
            $("#pepi_to_date").datepicker("option", "minDate", dt);
        },
      onClose: function( selectedDate ) {
       // alert("df");
        
        $( "#pepi_to_date" ).datepicker( "option", "minDate", selectedDate );
        jQuery( "#pepi_to_date" ).focus();
      },
       
    });
    $( "#pepi_to_date" ).datepicker({
      defaultDate: "+1w",
    changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
      minDate: -90, 
      maxDate: "+3M -90D",
      
    onSelect: function( selectedDate ) {
        var dt = new Date(selectedDate);
            dt.setDate(dt.getDate() - 1);
    jQuery('#pepi_dateRangeForm').submit();
      },
      onClose: function( selectedDate ) {
        $( "#pepi_from_date" ).datepicker( "option", "maxDate", selectedDate );
        jQuery('#pepi_dateRangeForm').submit();
    //location.reload(true);
      }
    });
    
    jQuery('#wpms_action').click(function() {
        // jQuery('#error_login').hide();
        jQuery('#pepi_login_error').hide();
        var email = $.trim(jQuery('#pepi_to').val());
        var sub = $.trim(jQuery('#pepi_subject').val());
        var msg = $.trim(jQuery('#pepi_email_message').val());
        var err = '';
        if ( email == '' ) {
            err += '<p>Please enter email address.</p>';
        }else
        if( !IsEmail(email)) {
            err += '<p>Please enter valid email address.</p>';
        }
        if ( sub == '' & sub.value.trim() == "" ) {
            alert("Subject Field cannot be empty");
            err += '<p>Please enter email subject.</p>';
        }
        if ( msg == '' ) {
            alert("Message Field cannot be empty");
            err += '<p>Please enter email message.</p>';
        }
        if ( err != '' ) {
            jQuery('#pepi_show_error').html(err);
            jQuery('#pepi_show_error').addClass('error');
            jQuery('#pepi_show_error').show();
            return false;
        }
    });
    jQuery('#pepi_submit-pepipost').click(function() {
        
        // jQuery('#error_login').hide();
        jQuery('#pepi_login_error').hide();
        var email = $.trim(jQuery('#pepi_mail_from').val());
        var api_key = $.trim(jQuery('#pepi_api_key').val());
        var from_name = $.trim(jQuery('#pepi_mail_from_name').val());
        var reply_to = $.trim(jQuery('#pepi_mail_reply').val());
        var err = '';
        if ( api_key == '' || api_key.length != 32){
                err += '<p>Please enter correct API key.</p>';
                jQuery('#pepi_message').hide();
        }
        if( !IsEmail(email)) {
            err += '<p>Please enter valid email address in From Email field.</p>';
            jQuery('#pepi_message').hide();
        }
        if ( err != '' ) {
            jQuery('#pepi_smtp_error').html(err);
            jQuery('#pepi_smtp_error').addClass('error');
            jQuery('#pepi_smtp_error').show();
            return false;
        }

        //if( from_name == "" ){
            //alert("asd");
          //  document.getElementById("mail_from_name").value = ' ';
           
       // }
        //if( reply_to == "" ){
            //alert("asd");
           // document.getElementById("mail_reply").value = ' ';
           // return true;
        //}
    });
    
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function AllowSingleSpaceNotInFirstAndLast() {
        var obj = document.getElementById('subject');
        obj.value = obj.value.replace(/^\s+|\s+$/g, "");
        var CharArray = obj.value.split(" ");
        if (CharArray.length > 2) {
            alert("User name NOT VALID");
            return false;
        }
        else {
            alert("User name VALID");
        }
        return true;
    }
