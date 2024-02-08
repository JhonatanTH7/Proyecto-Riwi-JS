// Selectors
const Road_Advisories_Icon = document.querySelector(".Road_Advisories_Icon");
const yourRoute_Form_Info = document.querySelector(".yourRoute_Form_Info");
const formYourRoute = document.querySelector("#form");

// Events
Road_Advisories_Icon.addEventListener("click", () => {
  const Road_Advisories_DropUp = document.querySelector(
    ".Road_Advisories_DropUp"
  );
  Road_Advisories_DropUp.classList.toggle("d-none");
});

yourRoute_Form_Info.addEventListener("click", () => {
  const imgCategories = document.querySelector(".imgCategories");
  imgCategories.classList.toggle("d-none");
});

document.addEventListener("DOMContentLoaded", () => {
  formYourRoute.reset();
});

async function getInfo() {
  const respuesta = await fetch("http://localhost:3000/history");
  const data = await respuesta.json();
  drawInputs(data);
}

function drawInputs(data) {
  document.querySelector("#From").value = data[0].from;
  document.querySelector("#to").value = data[0].to;
  document.querySelector("#Appriximate").value = data[0].start;
  document.querySelector("#kilometers").value = data[0].km;
}

getInfo();
