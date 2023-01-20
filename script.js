const navToggle = document.querySelector(".navToggle")
const navContent = document.querySelector("header div")

navToggle.onclick = () => {
  navContent.classList.toggle('show');
}