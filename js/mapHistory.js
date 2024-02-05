// Selectores
const star = document.querySelector(".star");

// Eventos
star.addEventListener("click", () => {
  if (star.getAttribute("src") == "../../media/icons/star gray.svg") {
    star.setAttribute("src", "../../media/icons/star yellow.svg");
  } else {
    star.setAttribute("src", "../../media/icons/star gray.svg");
  }
});
