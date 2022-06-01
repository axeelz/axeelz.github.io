var x = document.getElementById("navlinks");
var y = document.getElementById("icon_link");

document.addEventListener("click", function (event) {
  var isClickInside = x.contains(event.target);
  var isClickOnIcon = y.contains(event.target);
  var visibility = getComputedStyle(x).visibility;
  if (!isClickInside && visibility == "visible" && !isClickOnIcon) {
    toggleNav();
  }
});

function toggleNav() {
  var x = document.getElementById("navlinks");
  var visibility = getComputedStyle(x).visibility;

  if (visibility == "hidden") {
    x.classList.toggle("nav-active");
    x.classList.toggle("slide-in-blurred-top");
    changeIcon();
  } else {
    x.classList.toggle("slide-in-blurred-top");
    x.classList.toggle("slide-out-blurred-top");
    setTimeout(function () {
      x.classList.toggle("nav-active");
      x.classList.toggle("slide-out-blurred-top");
    }, 500);
    changeIcon();
  }
}

function changeIcon() {
  var icon = document.getElementById("icon");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}
