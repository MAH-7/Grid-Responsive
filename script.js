$(document).ready(function () {
  // Function to update the text based on the viewport width
  function updateText() {
    if ($(window).width() <= 960) {
      $(".change-text").text("ClickMe");
    } else {
      $(".change-text").text("HoverMe");
    }
  }

  // Initial text update
  updateText();

  // Update text on window resize
  $(window).on("resize", updateText);

  // Toggle the hover effect class when a card is clicked
  $(".card").on("click", function () {
    $(this).toggleClass("card-clicked");
  });
});
