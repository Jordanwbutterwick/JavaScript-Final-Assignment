// Jordan Butterwick final JS Assignment
// February 19, 2019

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
// scrolls the viewport down to the content, skipping the hero
window.onload = function startButtonFunc() {
  if (document.getElementById("startButton")) {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function jumpScroll() {
      window.scroll(0, 1100);
    });
  } else {
    /* log to show the function isn't running and won't throw an error
     if you're on a page without the button*/
    console.log("Not purchase page, start button functionality revoked");
  }
};

// Agent Name + Number Generator
window.onload = function agentFinderFunc() {
  if (document.getElementById("results")) {
    let findAgent = document.getElementById("findAgent");
    // name and number arrays
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
    /* eventlistener and random math function to decide what 
    name and number are displayed on the page*/

    findAgent.addEventListener("click", function contacts() {
      let i = Math.floor(Math.random() * 12 + 1);
      let results = document.getElementById("results");
      results.innerHTML = agentName[i] + " " + agentNumbers[i];
    });
  } else {
    console.log("Not about page");
  }
};
