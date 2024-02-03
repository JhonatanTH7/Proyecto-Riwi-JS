() => {
  const isLogin = localStorage.getItem("isLogin");

  const path = window.location.pathname;

  const pacthAct = path.substring(path.lastIndexOf("/") + 1);

  const privatePaths = ["mapHistory.html", "savesMaps.html"];

  if (privatePaths.includes(pacthAct) && !isLogin) {
    console.log("Don'have access");
    window.location.href = `../../index_${
      document.querySelector("html").lang
    }.html`;
  }
};
