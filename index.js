$('.menu-toggle').click(function(event) {
    $('.site-nav').toggleClass('site-nav--open',500);
    $(this).toggleClass('open');
});

$(".link").click(function(){
  let pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});
      
    