$(window).scroll(function(){
  if ($(window).scrollTop() === 100) {
      $('#').get(0).play();
  } else {
      $('#background').get(0).pause();
  }
});


$(function(){

  $(window).scroll(function(e) {

      var scrollAmount = $('body').scrollTop();   
      console.log(scrollAmount);


  if(scrollAmount >="500" && scrollAmount <= "510") {


      $("#video").html(
          '<video autoplay>' +

      '<source src="img/shot.mp4" type="video/mp4"></source>' +

       '</video>');

$(window).scroll(function(e)
  {
    var offsetRange = $(window).height() / 3,
        offsetTop = $(window).scrollTop() + offsetRange + $('header').outerHeight(true),
        offsetBottom = offsetTop + offsetRange;

    $('video').each(function () { 
      var y1 = $(this).offset().top;
      var y2 = offsetTop;
      if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
        this.pause(); 
      } else {
        this.play();
      }
    });
});
