$(document).ready(function(){
    
    var enteryLogo = $(".ani-logo img"),
        entryImg = $(".entry img"),
        gridAni = $(".grid-shocase-shoes .gani-shoes");
     var subNav = $(".side-2-heading > *"),
         sideFilter = $(".side-one .filter "),
         mainNav = $(".nav-container .nav-wapper ul li");
      var tl = new TimelineLite();

      tl
      .from(enteryLogo, 1, { ease:Power1.easeIn })
      .to(enteryLogo, 1,  { delay:.5, scale:1, ease:Power1.easeIn })
      .to(enteryLogo, 1, {delay:1 , scale:100,ease:Power3.easeout, onComplete: onEnd });

      function onEnd(){
        tl
         .to(enteryLogo, 1, { display: 'none'}, '-=0.9')
         .to(entryImg, 1, { display: 'none'}, '-=1')
         .staggerFrom(mainNav, 1, { y:20 ,autoAlpha:0 , ease:Power3.easeOut}, 0.1)
         .from(subNav, 1, { y:20 , autoAlpha:0,ease:Power3.easeOut})
         .from(sideFilter, 1, { x:20 , autoAlpha:0,ease:Power3.easeOut}, '-=0.3')
         .from(gridAni, 1, { y:20 , autoAlpha:0, ease:Power3.easeOut}, '-=0.8');
      }
    
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////   scrollmagic
//////////////////////////////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();

$('.ani-shoes').each(function(){
    var myScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
  }).setClassToggle(this,'fide-in').addTo(controller);
  
});
var fotter = $('.footer-img img');
var newscene = new ScrollMagic.Scene({
 triggerElement: '.footer .center',
 triggerHook: 0.5
}).setTween(TweenLite.to( $('.footer .center'), 1,{ opacity:1})).addTo(controller);

var mobilenav = $('.mobilenav');
var mobileView = $('.mobile-view')
        mobilenav.on('click', function(){
         mobileView.slideToggle();
        }); 





 });