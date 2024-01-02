// Using jQuery for simplicity, ensure you include jQuery in your HTML file
$(document).ready(function () {
  const slideWidth = $(".slide").outerWidth(true); // Width of each slide including margin

  $(".prev").click(function () {
    $(".slides-container").animate({
      scrollLeft: "-=" + slideWidth
    }, 500);
  });

  $(".next").click(function () {
    $(".slides-container").animate({
      scrollLeft: "+=" + slideWidth
    }, 500);
  });
});
