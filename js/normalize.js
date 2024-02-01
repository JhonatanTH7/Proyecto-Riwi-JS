/* Selectors */
let header
while (!header) {
    header = document.querySelector("header")
    if (header) {
        header.innerHTML = `
    <!-- Left side icons -->
      <div class="navBar_icons_leftSide">
        <!-- Left side menu  -->
        <div>
          <button
            class="navBar_infoButton_leftSide"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <img src="../media/icons/info.svg" alt="Menu" />
          </button>

        </div>
        <!-- Logo -->
        <a href="../index.html">
          <img src="../media/icons/google.svg" alt="logo" />
        </a>
        <!-- Page name -->
        <h6 class="m-0">Ruta 57</h6>
      </div>

      <!-- Input search bar -->
      <div class="navBar_searchBar">
        <input
          type="search"
          id="search_bar"
          class="border-0"
          placeholder="Search"
        />
        <label for="search_bar"><img src="../media/icons/search.svg" /></label>
      </div>

      <!-- Right side icons -->
      <div class="navBar_icons_rigthSide">
        <!-- DropDown SOS-->
        <li class="nav-item dropdown navBar_helpDropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../media/icons/sos.svg" alt="SOS" />
            <img
              src="../media/icons/arrow down.png"
              class="arrow_down_dropdownMenu"
            />
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="../pages/">
                <img src="../media/icons/about us.svg" alt="icon" />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  About Us
                </p>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="../pages/contact_us.html">
                <img src="../media/icons/phone.svg" alt="icon" />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  Contact Us
                </p>
              </a>
            </li>
          </ul>
        </li>
        <!-- Notifications -->
        <img src="../media/icons/notification.svg" alt="Bell" />

        <!-- DropDown language-->
        <li class="nav-item dropdown navBar_languageDropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../media/icons/language.svg" alt="Language" />
            <img
              src="../media/icons/arrow down.png"
              class="arrow_down_dropdownMenu"
            />
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"
                ><img
                  src="../media/icons/Spain-Flag.png"
                  class="navBar_languageDropdown_flag"
                />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  Spanish
                </p></a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                ><img
                  src="../media/icons/USA-Flag.png"
                  class="navBar_languageDropdown_flag"
                />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  English
                </p></a
              >
            </li>
          </ul>
        </li>

        <!-- DropDown user-->
        <li class="nav-item dropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../media/icons/user nav.svg" alt="User" />
            <img
              src="../media/icons/arrow down.png"
              class="arrow_down_dropdownMenu"
            />
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="../media/icons/sign in.svg" alt="Icon" />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  Sign In
                </p>
              </button>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <img src="../media/icons/sign up.svg" alt="Icon" />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  Sign Up
                </p>
              </a>
            </li>
          </ul>
        </li>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body signIn">
      <div class="signIn_Title">
        <h1>WELCOME BACK!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <section class="signIn_Form">
        <form class="formSing" id="form">
          <div class="signIn_Subtitle">
            <p>Username</p>
          </div>
          <div class="signIn_Form_Option">
            <label for="Username">
              <img
                src="/media/icons/user input.svg"
                alt="user_input"
                class="signIn_Form_User_Icon"
              />
            </label>
            <input
              id="Username"
              class="signIn_Form_Username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div class="signIn_Subtitle">
            <p>Password</p>
          </div>
          <div class="signIn_Form_Option">
            <label for="password">
              <img
                id="Key_Icon"
                src="/media/icons/key input.svg"
                alt="key_input"
                class="signIn_Form_Key_Icon"
              />
            </label>
            <input
              id="password"
              class="signIn_Form_password"
              type="password"
              placeholder="**********"
              required
            />
            <img
              id="Eye_Icon"
              src="/media/icons/eye input.svg"
              alt="eye_input"
              class="signIn_Form_Eye_Icon"
            />
            <img
              id="Eye_Icon_Show"
              src="/media/icons/ojo.png"
              alt="eye_input"
              class="signIn_Form_Eye_Icon"
            />
          </div>

          <div class="signIn_Checkbox">
            <div>
              <input
                class="signIn_Checkbox_Remember"
                type="checkbox"
                id="remember"
              />
              <label for="remember">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <button class="signIn_Button" type="submit">SIGN IN</button>
        </form>

        <div class="SignIn_Continue">
          <div class="SignIn_Continue"></div>
          <p>Or continue with</p>
        </div>

        <div class="SignIn_SocialMedia">
          <!-- reviar los href -->
          <div class="SocialMedia_Google">
            <a href="https://www.gmail.com">
              <img
                class="signIn_SocialMedia_Google"
                src="/media/icons/google.svg"
                alt="Aconunt Google"
              />
            </a>
          </div>
          <div class="SocialMedia_Whatsapp">
            <a href="https://web.whatsapp.com">
              <img
                class="signIn_SocialMedia_Whatsapp"
                src="/media/icons/whatsapp.svg"
                alt="Aconunt whatsapp"
              />
            </a>
          </div>
          <div class="SocialMedia_Facebook">
            <a href="https://facebook.com">
              <img
                class="signIn_SocialMedia_Facebook"
                src="/media/icons/facebook.svg"
                alt="Aconunt facebook"
              />
            </a>
          </div>
        </div>
        <div class="signIn_CreateAccount">
          <label for="don't have">Don't have an account?</label>
          <a href="/pages/signUp">Sign up</a>
        </div>
      </section>
    
      </div>

</div>
    `
    } else {
        document.body.prepend(document.createElement("header"))
    }
}

/* Events */
