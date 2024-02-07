const arsd = document.querySelector(".menu-left")

document.addEventListener("click", ()=>{
    setTimeout(() => {
        console.log(arsd.getBoundingClientRect());
    }, 1000);
})
