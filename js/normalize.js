/* Selectors */
let header;
while (!header) {
  header = document.querySelector("header");
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

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
            data-bs-backdrop="false"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <div class="dropdown mt-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Logo -->
        <a href="../index.html">
          <img src="../media/icons/google.svg" alt="logo" class="navBar_logo"/>
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
              <a class="dropdown-item" href="#">
                <img src="../media/icons/about us.svg" alt="icon" />
                <p
                  class="d-flex justify-content-center align-content-center m-0"
                >
                  About Us
                </p>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="../pages/contactUs.html">
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
              <button class="dropdown-item">
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
    `;
  } else {
    document.body.prepend(document.createElement("header"));
  }
}

/* Events */
