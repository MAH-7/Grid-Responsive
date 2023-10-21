// Function to hide the loader and show the content
function showContent() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".content").style.display = "block";
}

// Simulate a 2-second loading delay (you can replace this with actual data loading)
setTimeout(showContent, 2000);
