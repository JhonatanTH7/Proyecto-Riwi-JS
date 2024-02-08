/******  Selects ******/
/* flip-menu-effect */
const card_flip_animation = document.querySelector(".card-flip-animation");
/* preloader */
const preloader = document.querySelector(".preloader")
const path = window.location.pathname;
const pacthAct = path.substring(path.lastIndexOf("/") + 1);


/* event flip-menu */
if (localStorage.getItem("darkMode")) {
    const logo_darkMode = document.querySelector(".icon-logo-index");

    if (pacthAct == "index_en.html" || pacthAct == "index_es.html") {
        logo_darkMode.src = "../media/icons/logo_final_darkmode.svg";
    } else {
        logo_darkMode.src = "../../media/icons/logo_final_darkmode.svg";
    }
}

card_flip_animation.addEventListener("click", () => {
    if (localStorage.getItem("darkMode")) {
        const back_flip = document.querySelector(".back-flip-imagen");

        if (pacthAct == "index_en.html" || pacthAct == "index_es.html") {
            back_flip.src = "../media/icons/info-darkMode.svg"
        } else {
            back_flip.src = "../../media/icons/info-darkMode.svg"
        }

    }
    card_flip_animation.classList.toggle("star-flip")
})

/* preloader */
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        preloader.remove()
    }, 7000);
})

