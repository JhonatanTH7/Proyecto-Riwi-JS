/* Selector */
const inputDarkMode = document.querySelector(".inputDarkMode");

/* Event */
if (localStorage.getItem("darkMode")) {
  inputDarkMode.checked = "true";
  document.addEventListener("DOMContentLoaded", () => {
    darkmodeactive(document.querySelector("body"));
  });
}

function darkmodeactive(element) {
  if (
    element.id != "search_bar" &&
    element.localName != "script" &&
    !element.classList.contains("form-check-reverse")
  ) {
    Array.from(element.children).forEach((elementChild) => {
      try {
        if (
          elementChild.id != "exampleModal" &&
          elementChild.id != "preloader_gif" &&
          !element.classList.contains("container_About_Us")
        ) {
          elementChild.style.background = "#1b1b1b";
          elementChild.style.color = "white";

          if (elementChild.children) {
            darkmodeactive(elementChild);
          }
        }

        if (elementChild.id == "exampleModal") {
          elementChild
            .querySelector(".modal-content")
            .classList.add("darkmode_singIn");
        }

        if(elementChild.classList.contains("container_noti_noSee")) {
          elementChild.classList.add("container_noti_noSee_dark")
        }
      } catch (error) {
        console.log(error, elementChild);
      }
    });
  }
}

inputDarkMode.addEventListener("click", () => {
  if (inputDarkMode.checked) {
    localStorage.setItem("darkMode", "Actived");
  } else {
    localStorage.removeItem("darkMode");
  }
  window.location.href = window.location.pathname;
});
