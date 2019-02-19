// dropdown menu scripts
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// close dropdown when you click out of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// main page button scripts
window.onload = function startButtonFunc() {
  startButton = document.getElementById("startButton");
  startButton.addEventListener("click", function jumpScroll() {
    window.scroll(0, 1000);
  });
};
