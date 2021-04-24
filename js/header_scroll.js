
$(document).ready(function () {
  
    ///////////////// fixed menu on scroll for desctop
    if ($(window).width() > 300) {

        var navbar_height = $('.navbar').outerHeight();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.navbar-wrap').css('height', navbar_height + 'px');
                $('#navbar_top').addClass("fixed-top bg-light animate__animated animate__fadeInDown shadow");
                

                if (window.matchMedia('(max-width: 768px)').matches) {
                    // do functionality on screens smaller than 768px
                    $('#brand-image').height("55");
                }
                else{
                    $('#brand-image').height("70");
                }

            } else {
                $('#navbar_top').removeClass("fixed-top bg-light animate__animated animate__fadeInDown shadow");
                $('.navbar-wrap').css('height', 'auto');
               



            }
        }); //end if
    }   //end navbar scroll

   



});

