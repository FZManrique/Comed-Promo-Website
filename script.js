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

}