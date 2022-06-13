var placementEl = document.getElementById("placementsH2");

var score = JSON.parse(localStorage.getItem("Score"));

placementEl.style.fontSize = "30px";
placementEl.textContent = " Name: " + score.name + " Score: " + score.score;