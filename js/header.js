/* Selects */
const card_flip_animation = document.querySelector(".card-flip-animation");

if(localStorage.getItem("darkMode")){
const logo_darkMode = document.querySelector(".icon-logo-index");
logo_darkMode.src = "../media/icons/prueba-logo2-darkmode-removebg.png";
}

card_flip_animation.addEventListener("click", () => {
    if(localStorage.getItem("darkMode")){
        const back_flip = document.querySelector(".back-flip-imagen");
        back_flip.src = "../media/icons/info-darkMode.svg"
    }
    card_flip_animation.classList.toggle("star-flip")
    })