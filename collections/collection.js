
var mobilenav = $('.mobilenav');
var mobileView = $('.mobile-view')
        mobilenav.on('click', function(){
         mobileView.slideToggle();
        }); 
        
        TweenLite.from($('.nav-wapper ul li'), 1,{
            y:20,
            autoAlpha:0,
            ease:Power3.easeOut
        })
        TweenLite.from($('img'), 2, {
            delay:1,
            y:20,
            autoAlpha:0,
            ease:Power3.easeOut
        });