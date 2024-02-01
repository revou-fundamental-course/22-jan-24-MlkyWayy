// Burger Menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navList = document.querySelector(".nav-menu");

  burgerMenu.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});

// Carousel
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}

// Validate form

const nama = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (nama.value === "" || nama.value == null) {
    messages.push("Name is required");
  }

  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
