$(document).ready(function () {
  // Toggle the hover effect class when a card is clicked
  $(".card").on("click", function () {
    $(this).toggleClass("card-clicked");
  });
});
