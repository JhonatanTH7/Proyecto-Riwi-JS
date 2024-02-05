/* Selector Skeleton */
let header;

/* Skeleton */
while (!header) {
  header = document.querySelector("header")

  if (header) {

    const menu_left = document.createElement("div")
    menu_left.classList = "menu-left"
    document.body.appendChild(menu_left)

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
          <div class="flip-container">
            <div class="card-flip-animation">
              <div class="front-flip">
                <img src="../media/icons/info.svg" alt="Menu" />
              </div>
              <div class="back-flip">
                <img class="back-flip-imagen" src="../media/icons/info-ligthMode.svg" alt="Menu" />
              </div>
            </div>
          </div> 
          </button>
          
          </div>
          <!-- Logo -->
          <a href="index_${document.querySelector("html").lang}.html">
          <img class="icon-logo-index" src="../media/icons/logo_prueba2.png" alt="logo" />
          </a>
          <!-- Page name -->
          <!-- <h6 class="m-0">Ruta 57</h6> -->
          </div>
          
          <!-- Input search bar -->
          <!-- <div class="navBar_searchBar">
          <input
          type="search"
          id="search_bar"
          class="border-0"
          placeholder="Busqueda"
          />
          <label for="search_bar"><img src="../media/icons/search.svg" /></label>
          </div> -->
          
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
            <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/aboutUs.html">
            <img src="../media/icons/about us.svg" alt="icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Acerca de nosotros
            </p>
            </a>
            </li>
            <li>
            <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/contactUs.html">
            <img src="../media/icons/phone.svg" alt="icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Contáctanos
            </p>
            </a>
            </li>
            </ul>
            </li>

            <!-- Notifications -->
            <li class="nav-item dropdown navBar_helpDropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            <img src="../media/icons/notification.svg" alt="Bell" />
            <img
            src="../media/icons/arrow down.png"
            class="arrow_down_dropdownMenu"
            />
            </button>
            <ul class="dropdown-menu">
            <li>
            <div class="notification">
            <div class="notification_Title">
              <h1>Notificaciones</h1>
            </div>
            <div class="notification_CautionOrange">
              <div class="notification_Caution_Title">
                <img
                  src="../../media/icons/alert orange.svg"
                  alt="Alert orange"
                  class="notification_CautionOrange_icon"
                />
                <h3 class="notification_Type">Peligro</h3>
              </div>
              <div class="notification_Content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  inventore voluptas optio porro ullam magnam nobis natus quisquam?
                  Reprehenderit modi iusto quaerat excepturi deleniti labore harum
                  dolor dicta rem impedit.
                </p>
              </div>
            </div>
            <div class="notification_AlertMagenta">
              <div class="notification_Alert_Title">
                <img
                  src="../../media/icons/alert magenta.svg"
                  alt="Alert magenta"
                  class="notification_AlertMagenta_icon"
                />
                <h3 class="notification_Type">Advertencia</h3>
              </div>
              <div class="notification_Content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  inventore voluptas optio porro ullam magnam nobis natus quisquam?
                  Reprehenderit modi iusto quaerat excepturi deleniti labore harum
                  dolor dicta rem impedit.
                </p>
              </div>
            </div>
            <div class="notification_InfoCyan">
              <div class="notification_Information_Title">
                <img
                  src="../../media/icons/alert cyan.svg"
                  alt="Alert cyan"
                  class="notification_InfoCyan_icon"
                />
                <h3 class="notification_Type">Información</h3>
              </div>
              <div class="notification_Content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  inventore voluptas optio porro ullam magnam nobis natus quisquam?
                  Reprehenderit modi iusto quaerat excepturi deleniti labore harum
                  dolor dicta rem impedit.
                </p>
              </div>
            </div>
            <div class="notification_NewsPurple">
              <div class="notification_News_Title">
                <img
                  src="../../media/icons/alert purple.svg"
                  alt="Alert purple"
                  class="notification_NewsPurple_icon"
                />
                <h3 class="notification_Type">Novedades</h3>
              </div>
              <div class="notification_Content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  inventore voluptas optio porro ullam magnam nobis natus quisquam?
                  Reprehenderit modi iusto quaerat excepturi deleniti labore harum
                  dolor dicta rem impedit.
                </p>
              </div>
            </div>
          </div>
            </li>
              </ul>
            </li>
            
            
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
            <a class="dropdown-item" href="index_es.html"
            ><img
            src="../media/icons/Spain-Flag.png"
            class="navBar_languageDropdown_flag"
            />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Español
            </p></a
            >
            </li>
            <li>
            <a class="dropdown-item" href="index_en.html"
            ><img
            src="../media/icons/USA-Flag.png"
            class="navBar_languageDropdown_flag"
            />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Inglés
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
            <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="../media/icons/sign in.svg" alt="Icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Iniciar sesión
            </p>
            </button>
            </li>
            <li>
            <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/signUp.html">
            <img src="../media/icons/sign up.svg" alt="Icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Registrarse
            </p>
            </a>
            </li>
            
            </ul>
            </li>
            </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                
                <div class="modal-content signIn">
                <section class="signIn_Form">
                  <form class="form" id="form">
                    <div class="signIn_Subtitle">
                      <p>Usuario</p>
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
                        placeholder="Usuario"
                        required
                      />
                    </div>
                    <div class="signIn_Subtitle">
                      <p>Contraseña</p>
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
                        placeholder="********"
                        required
                      />
                      <img
                        id="Eye_Icon"
                        src="/media/icons/eye input.svg"
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
                        <label for="remember">Recordame</label>
                      </div>
                      <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
          
                    <button class="signIn_Button" type="submit">Iniciar Sesión</button>
                  </form>
          
                  <div class="SignIn_Continue">
                    <div class="SignIn_Continue"></div>
                    <p>O Iniciar Sesión Con</p>
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
                    <label for="don't have">¿No tienes una cuenta?</label>
                    <a href="/pages/${document.querySelector("html").lang}/signUp.html">Registrate</a>
                  </div>
                </section>
                  </div>
                </div>
              
            </div>
            `
    document.querySelector(".menu-left").innerHTML = `
          <div class="offcanvas offcanvas-start menu-left" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-bs-backdrop="false">
            
            <div class="offcanvas-body">
              <div class="Item-menuLeft service">
                  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-Menu" aria-expanded="false" aria-controls="service-Menu">
                    <div class="d-flex">
                      <img src="../media/icons/service.svg" alt="Service-IconMenuLeft" />  
                      <span>Servicios</span>
                    </div>
                    <img src="../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                  </button>

                <div class="collapse" id="service-Menu">
                  <div class="card card-body">
                    <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/notification.html"><span class="itemList">-</span> Noticias en la vía</a>
                    <a class="dropdown-item" href="#"><span class="itemList">-</span> Estación de Servicio, Disponibilidad y Precio</a>
                    <a class="dropdown-item" href="#"><span class="itemList">-</span> Mecánica</a>
                  </div>
                </div>
              </div>

              <div class="Item-menuLeft history">
                <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#history" aria-expanded="false" aria-controls="history">
                    <div class="d-flex">    
                      <img src="../media/icons/map.svg" alt="Service-IconMenuLeft" />  
                      <span>Historial</span>
                    </div>
                    <img src="../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                </button>
                
                <div class="collapse" id="history">
                  <div class="card card-body">
                    <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/savesMaps.html"><span class="itemList">-</span> Mapas Guardados</a>
                    <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/mapHistory.html"><span class="itemList">-</span> Historial de Mapas</a>
                  </div>
                </div>
              </div>

              <div class="Item-menuLeft your_Route">
              <button class="btn d-flex" type="button">
                <img src="../media/icons/route.svg" alt="Service-IconMenuLeft" />  
                <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/yourRoute.html">Tu ruta</a>
              </button>
              </div>

              <div class="Item-menuLeft your_Report">
              <button class="btn d-flex" type="button">
                <img src="../media/icons/report.svg" alt="Service-IconMenuLeft" />  
                <a class="dropdown-item" href="/pages/${document.querySelector("html").lang}/yourReport.html">Tus Reportes</a> 
              </button>
              </div>

              <div class="Item-menuLeft Setting">
                  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#setting" aria-expanded="false" aria-controls="setting">
                    <div class="d-flex">
                      <img src="../media/icons/settings.svg" alt="Service-IconMenuLeft" />  
                      <span>Configuración</span>
                    </div>
                    <img src="../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                  </button>
                
                <div class="collapse" id="setting">
                  <div class="card card-body">
                    <a class="dropdown-item" href="#" data-bs-toggle="collapse" data-bs-target="#languaje" aria-expanded="false" aria-controls="languaje"><span class="itemList">-</span> Idioma
                    <img src="../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                    </a>
                    <div class="collapse" id="languaje">
                    <a class="dropdown-item" href="index_es.html"
                    ><img
                    src="../media/icons/Spain-Flag.png"
                    class="navBar_languageDropdown_flag"
                    />
                    
                    <p
                    class="d-flex justify-content-center align-content-center m-0"
                    >
                    Español
                    </p></a
                    >

                    <a class="dropdown-item" href="index_en.html"
                    ><img
                    src="../media/icons/USA-Flag.png"
                    class="navBar_languageDropdown_flag"
                    />
                    <p
                    class="d-flex justify-content-center align-content-center m-0"
                    >
                    Inglés
                    </p></a
                    >
                    </div>
                    
                    <a class="dropdown-item" href="#"><span class="itemList">-</span> 
                    <div class="form-check form-switch form-check-reverse">
                    <input class="form-check-input inputDarkMode" type="checkbox" id="flexSwitchCheckReverse">
                    <label class="form-check-label" for="flexSwitchCheckReverse"> Modo Oscuro</label>
                    </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        
        `
  } else {
    document.body.prepend(document.createElement("header"))
  }
}