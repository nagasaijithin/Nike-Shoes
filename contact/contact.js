
var mobilenav = $('.mobilenav');
var mobileView = $('.mobile-view')
        mobilenav.on('click', function(){
         mobileView.slideToggle();
        }); 
        TweenLite.from($('div'), 2,{
                ease:Power3.easeOut,
                y:20,
                autoAlpha:0
        });