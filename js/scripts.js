function openNav() {
  var nav = document.getElementById("navigation");

  if (nav.className === "navigation") {
    nav.classList.add("menujs");
    document.getElementById("threeline-icon").innerHTML = "&Cross;";
  } else {
    nav.className = "navigation";
    document.getElementById("threeline-icon").innerHTML = "&#9776;";
  }

}
