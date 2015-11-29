var isXmas = true;

function readyHandler() {
  // display X-mas pop up window if the isXmas is enabled
  showLetak();
   
}

function showLetak() {
     
     if(isXmas) {
	//Getting the variable's value from a link 
	var loginBox = $(this).attr('href');
	//Fade in the Popup
	$(loginBox).fadeIn(300);
	//Set the center alignment padding + border see css style
	var popMargTop = ($(loginBox).height() + 24) / 2; 
	var popMargLeft = ($(loginBox).width() + 24) / 2; 
	$(loginBox).css({ 
	    'margin-top' : -popMargTop,
	    'margin-left' : -popMargLeft       
	});
	// Add the mask to body
	$('body').append('<div id="mask"></div>');
	$('#mask').fadeIn(300);
	$(loginBox).css({ 
	    'display' : 'block'       
	});
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .login-popup').fadeOut(300 , function() {
	    $('#mask').remove();  
	}); 
	return false;
	});

     } else {
	$('#login-box').remove();
     } 
}
