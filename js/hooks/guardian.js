() => {
  const isLogin = localStorage.getItem("isLogin");

  const path = window.location.pathname;

  const pacthAct = path.substring(path.lastIndexOf("/") + 1);

  const privatePaths = ["mapHistory.html", "savesMaps.html"];


  const user = localStorage.getItem("User")

  if (user) {
    const history = document.querySelector(".history")
    const log_out = document.querySelector(".log_out")
    const userlogin = document.querySelector(".userlogin")

    history.classList.remove("d-none")
    log_out.classList.remove("d-none")
    
    user = JSON.parse(user)

    userlogin.innerHTML = `
      <li>
        <p>${user.userName}</p>
      </li>
    `
  }

  if (privatePaths.includes(pacthAct) && !isLogin) {
    console.log("Don'have access");
    window.location.href = `../../index_${document.querySelector("html").lang
      }.html`;
  }
};
