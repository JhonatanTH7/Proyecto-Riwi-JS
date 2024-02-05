/* Selectors SingIN */
const form_SignIn = document.getElementById("Form");
const userName_SignIn = document.getElementById("Username");
const userPassword_Signin = document.getElementById("Password");
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
async function signIn() {
  const URL = "http://localhost:3000/users";
  const response = await fetch(`${URL}?userName=${userName_SignIn.value}`);
  const data = await response.json();

  console.log(data);

  if (!data.length) {
    showAlert("Email not registered");
    return;
  }

  if (data[0].password === userPassword_Signin.value) {
    localStorage.setItem("isLogin", "true");
    window.location.href = `../../index_${
      document.querySelector("html").lang
    }.html`;
  } else {
    console.log("Incorrect password");
  }
}

function showAlert(msg) {
  Swal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
    showConfirmButton: false,
    timer: 4000,
    position: "bottom-right",
  });
}
