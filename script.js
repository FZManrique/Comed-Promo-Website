{
  const navToggle = document.querySelector(".navToggle");
  const navContent = document.querySelector("header div");

  navToggle.onclick = () => {
    navContent.classList.toggle("show");
  };
}
{
  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide__images");
  showSlides()

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
}