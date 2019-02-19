// dropdown menu scripts
function dropdown() {
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
  if (document.getElementById("startButton")) {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function jumpScroll() {
      window.scroll(0, 1100);
    });
  } else {
    console.log("Not purchase page, start button functionality revoked");
  }
};

window.onload = function agentFinderFunc() {
  if (document.getElementById("results")) {
    let findAgent = document.getElementById("findAgent");
    let agentName = [
      "Jordan",
      "Jake",
      "Jessy",
      "James",
      "Adrian",
      "Anton",
      "Elena",
      "Malkeet",
      "Dani",
      "Doug",
      "Kuol",
      "Kiefer",
      "Muhommad"
    ];

    let agentNumbers = [
      "(555)-555-9846",
      "(555)-555-2365",
      "(555)-555-7357",
      "(555)-555-6779",
      "(555)-555-1246",
      "(555)-555-8325",
      "(555)-555-9042",
      "(555)-555-0568",
      "(555)-555-3175",
      "(555)-555-7653",
      "(555)-555-3687",
      "(555)-555-9960",
      "(555)-555-9837"
    ];
    findAgent.addEventListener("click", function contacts() {
      let i = Math.floor(Math.random() * 12 + 1);
      let results = document.getElementById("results");
      results.innerHTML = agentName[i] + " " + agentNumbers[i];
    });
  } else {
    console.log("Not about page");
  }
};
