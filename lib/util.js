var isXmas = true;

$(document).ready(function () {
    readyHandler();
});

function readyHandler() {
    // display X-mas pop up window if the isXmas is enabled
    showLetak();
    runSlider();
}

function showLetak() {

    if (isXmas) {
        //Getting the variable's value from a link
        var loginBox = $(this).attr('href');
        //Fade in the Popup
        $(loginBox).fadeIn(300);
        //Set the center alignment padding + border see css style
        var popMargTop = ($(loginBox).height() + 24) / 2;
        var popMargLeft = ($(loginBox).width() + 24) / 2;
        $(loginBox).css({
            'margin-top': -popMargTop,
            'margin-left': -popMargLeft
        });
        // Add the mask to body
        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300);
        $(loginBox).css({
            'display': 'block'
        });
        // When clicking on the button close or the mask layer the popup closed
        $('a.close, #mask').live('click', function () {
            $('#mask , .login-popup').fadeOut(300, function () {
                $('#mask').remove();
            });
            return false;
        });

    } else {
        $('#login-box').remove();
    }
}

function runSlider() {
    var sliderImages = ['images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg', 'images/16.jpg', 'images/17.jpg', 'images/18.jpg', 'images/19.jpg', 'images/20.jpg', 'images/21.jpg'];
    var imagesLoaded = 1;
    //set to one as the first image is loaded with the page


    for (var i in sliderImages) {
        //console.info('ctu: ', sliderImages[i]);
        //create new img element
        var img = $('<img></img>').attr('src', sliderImages[i]).attr('id', 'sliderImg_' + i);

        //append to slider wrapper
        $('#sliderWrapper').append(img);

        //after image is loaded increase the counter,
        //it will tell us when to start slider
        $('#sliderImg_' + i).load(function () {
            imagesLoaded += 1;
        });
    }

    //after inserting images run nivo slider
    runNivoSlider();


    function runNivoSlider() {
        if (imagesLoaded == $('#sliderWrapper img').length) {
            //all images are loaded, we can run nivo slider
            $('#sliderWrapper').nivoSlider();
        } else {
            //something is still missing try in 300 ms
            setTimeout(function () {
                runNivoSlider();
            }, 10);
        }
    }
}
