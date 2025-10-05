const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// testimonial-js

let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex += n));
}

function currentslide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("Testimonail-slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

//event listner
document.querySelector(".pre").addEventListener("click", () => plusSlide(-1));
document.querySelector(".next").addEventListener("click", () => plusSlide(1));

document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => currentsldie(index + 1));
});
