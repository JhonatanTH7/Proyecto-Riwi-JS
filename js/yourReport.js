// Selectors
const dateYourReport = document.querySelector("#date");
const hourYourReport = document.querySelector("#hour");
const nameYourReport = document.querySelector("#name");
const emailYourReport = document.querySelector("#email");
const locationYourReport = document.querySelector("#location");
const detailsYourReport = document.querySelector("#details");
const formYourReport = document.querySelector(".form_yourReport");
const btnYourReport = document.querySelector(".btnYourReport");

// Events
document.addEventListener("DOMContentLoaded", () => {
  cleanForm();
});

formYourReport.addEventListener("submit", (event) => {
  event.preventDefault();
  addReport();
});

// Functions
function cleanForm() {
  formYourReport.reset();
}

async function addReport() {
  const URL = "http://localhost:3000/reports";
  const report = {
    date: dateYourReport.value,
    hour: hourYourReport.value,
    name: nameYourReport.value,
    email: emailYourReport.value,
    location: locationYourReport.value,
    details: detailsYourReport.value,
  };
  console.log(report);
  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
}
