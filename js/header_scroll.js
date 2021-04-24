
$(document).ready(function() {
    $('#ToggleButton').click(function() {
        if ($('#ToggleButton').children('span').hasClass('fa-bars'))
        {
            $('#Navbar').collapse('show');
            $('#ToggleButton').children('span').removeClass('fa-bars');
            $('#ToggleButton').children('span').addClass('fa-times');
        }
        else if ($('#ToggleButton').children('span').hasClass('fa-times'))
        {
            $('#Navbar').collapse('hide');
            $('#ToggleButton').children('span').removeClass('fa-bars');
            $('#ToggleButton').children('span').addClass('fa-bars');
        }
    });
    ///////////////// fixed menu on scroll for desctop
    if ($(window).width() > 300) {
        
        var navbar_height =  $('.navbar').outerHeight();

        $(window).scroll(function(){  
            if ($(this).scrollTop() > 300) {
                $('.navbar-wrap').css('height', navbar_height + 'px');
                $('#navbar_top').addClass("fixed-top bg-light animate__animated animate__fadeInDown shadow");
                $('.nav-link').css('color','black');
                $('#brand-image').height("70");
                
            }else{
                $('#navbar_top').removeClass("fixed-top bg-light animate__animated animate__fadeInDown shadow");
                $('.nav-link').css('color','black');
                $('#brand-image').height("70");
                $('.navbar-wrap').css('height', 'auto');
            }   
        }); //end if
    }   //end navbar scroll
    
    // Counter Animations
    // http://stackoverflow.com/a/26831113/383904
    $(function($, win) {
        $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
            var H = $(this).height(),
                r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
            return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
            } visPx();
            $(win).on("resize scroll", visPx);
        });
        };
    }(jQuery, window));
    
    
    jQuery(function($) { // DOM ready and $ in scope
    
        $(".Count").inViewport(function(px) { // Make use of the `px` argument!!!
        // if element entered V.port ( px>0 ) and
        // if prop initNumAnim flag is not yet set
        //  = Animate numbers
        if(px>0 && !this.initNumAnim) { 
            this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
            $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
            duration: 3000,
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
            });         
        }
        });
    
    });

});

