$('.menu-toggle, .nav-link').click(function(event) {
  console.log('click!');
  $('.site-nav').toggleClass('site-nav--open',500);
  $('.menu-toggle').toggleClass('open');
});

$(".nav-link").click(function(){
  let prefix = "#";
  let pageId = prefix + $(this).attr("data-page");
  console.log(pageId);
  $("html, body").animate({ scrollTop: $(pageId).offset().top - 60 }, 1000);
});
      
    