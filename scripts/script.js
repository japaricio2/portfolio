function addButtonHover(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("mouseover", function () {
      this.classList.add("bright-button");
    });
    arr[i].addEventListener("mouseout", function () {
      this.classList.remove("bright-button");
    });
  }
}

function addIconHover() {
  for (var i = 1; i < 13; i++) {
    document.getElementById(i).addEventListener("mouseover", function () {
      this.classList.add("colored")
    });
    document.getElementById(i).addEventListener("mouseout", function () {
      this.classList.remove("colored")
    });
  }
}

function menuClick() {
  var nav = document.getElementById("muhnav");
  var flexybox = document.getElementById("flexybox");

  if (document.getElementById("muhnav").classList.contains("active")) {
    console.log("removing...")
    nav.classList.remove("active");
    console.log(nav.classList)

  } else {
    console.log("adding...")
    nav.classList.add("active");
    console.log(nav.classList)

  }

  if (document.getElementById("flexybox").classList.contains("active")) {
    flexybox.classList.remove("active");

  } else {
    flexybox.classList.add("active");
  }


}

var buttons = document.getElementsByClassName("project-buttons");
addButtonHover(buttons);
addIconHover();