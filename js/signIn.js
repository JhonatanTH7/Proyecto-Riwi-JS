const form = document.getElementById("form");
const userName = document.getElementById("Username");
const userPassword = document.getElementById("password");

const URL = "http://localhost:3000/users";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  signin();
});

async function signin() {
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
