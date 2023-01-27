{
  const navToggle = document.querySelector(".navToggle");
  const navContent = document.querySelector("header div");

  navToggle.onclick = () => {
    navContent.classList.toggle("show");
  };
}
{
  const date = new Date()
  const year = date.getFullYear()
  const yearEl = document.getElementById("year");
  yearEl.textContent = year;
}
{
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide__images");
  showSlides()

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
}