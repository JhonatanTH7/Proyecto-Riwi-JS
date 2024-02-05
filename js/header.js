/* Selects */
const btnMenuLeft = document.querySelector(".menu-left").querySelectorAll("button")

btnMenuLeft.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("itemCollap")
    })
})