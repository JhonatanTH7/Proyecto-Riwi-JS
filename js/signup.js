const form_SingUp = document.getElementById("formsp");
const firstName = document.getElementById("first_Name");
const lastName = document.getElementById("last_Name");
const email = document.getElementById("email");
const userName = document.getElementById("username");
const userPassword = document.getElementById("password");
const mobile = document.getElementById("mobile");

const URL = "https://jhonatanth7.github.io/users";

form_SingUp.addEventListener("submit", (event) => {
  event.preventDefault();

  createUser();
});

async function createUser() {
  // if (!validatePassword()) {
  //   showAlert("invalid password ");
  //   return;
  // }

  if (await validateEmail()) {
    showAlert("Email is already registered");
    return;
  }

  if (await validateUserName()) {
    showAlert("the user name is already registered");
    return;
  }

  console.log("PASS");

  try {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firtsName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        userName: userName.value,
        password: userPassword.value,
        NMobile: mobile.value,
      }),
    });
  } catch (error) {
    showAlert("An error has occurred");
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

// function validatePassword() {
//   const regex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

//   return regex.test(userPassword.value);
// }

async function validateEmail() {
  try {
    const responseEmail = await fetch(`${URL}?email=${email.value}`);

    const dataEmail = await responseEmail.json();

    return dataEmail.length;
  } catch (error) {
    return false;
  }
}

async function validateUserName() {
  try {
    const responseUser = await fetch(`${URL}?userName=${userName.value}`);

    const dataUser = await responseUser.json();

    return dataUser.length;
  } catch (error) {
    return false;
  }
}
