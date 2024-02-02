/* Selectors SingIN */
const form = document.getElementById("form");
const userName = document.getElementById("Username");
const userPassword = document.getElementById("password");
const eye_Icon = document.getElementById("Eye_Icon");
const eye_Icon_Show = document.getElementById("Eye_Icon_Show");

/* Events SingIN */
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   signin();
// eye_Icon.addEventListener("click", () => {
//     eye_Icon.style.display = "none"
//     eye_Icon_Show.style.display = "block"
  
//     userPassword.type = "text"
//   })
  
//   eye_Icon_Show.addEventListener("click", () => {
//     eye_Icon_Show.style.display = "none"
//     eye_Icon.style.display = "block"
  
//     userPassword.type = "password"
//   })
// });

/* Funcion SingIN */
async function signin() {
  const URL = "http://localhost:3000/users";
  const response = await fetch(`${URL}?usernName=${userName.value}`);
  const data = await response.json();

  console.log(data);

  if (!data.length) {
      showAlert("Email not registered");
      return;
  }

  if (data[0].password === userPassword.value) {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "administrator.html";
  } else {
      console.log("Contraseña incorrecta");
  }
}

function showAlert(msg) {
  Swal.fire({
      title: "Error!",
      text: msg,
      icon: "error",
      showConfirmButton: false,
      timer: 4000,
      toast: "true",
      position: "bottom-right",
  });
}