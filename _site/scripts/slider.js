$(document).ready(function() {
  let autoslide = setInterval(moveRight, 7000);

  var slideCount = $("#slider ul li").length;
  var slideWidth = $(window).width();
  if ($(window).width() > 700) {
    var slideHeight = $(window).height();
  } else {
    var slideHeight = 800;
  }
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });
  $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
  $("#slider ul li").css({ width: slideWidth, height: slideHeight });
  $("#slider ul li:last-child").prependTo("#slider ul");

  $(window).resize(function() {
    var slideCount = $("#slider ul li").length;
    var slideWidth = $(window).width();
    var slideHeight = $(window).height();
    var sliderUlWidth = slideCount * slideWidth;

    $("#slider").css({ width: slideWidth, height: slideHeight });
    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $("#slider ul li").css({ width: slideWidth, height: slideHeight });
  });

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth
      },
      400,
      function() {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth
      },
      400,
      function() {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $("div.control_prev").click(function() {
    moveLeft();
    clearInterval(autoslide);
  });

  $("div.control_next").click(function() {
    moveRight();
    clearInterval(autoslide);
  });

});
