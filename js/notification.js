/* selector */
const notification_Emerg = document.querySelector(".notification-Emerg")
const bellIcon = document.querySelector(".bellIcon")
const bellNoti = document.querySelector(".contadorNoti")
const container_noti_noSee = document.querySelector(".container_noti_noSee")
let contadorNoti = 0;

function alertaNoti(tipoAlerta) {

    let box_Alert_event = document.getElementById("box_Alert_event")
    let box_Alert_title = document.getElementById("box_Alert_title")
    let imagen_box_Alert = document.getElementById("imagen_box_Alert")
    let title_box_Alert_event = document.getElementById("title_box_Alert_event")
    let notification_Content = document.querySelector(".notification_Content")

    switch (tipoAlerta) {
        case "caution":
            box_Alert_event.classList = "notification_CautionOrange"
            box_Alert_title.classList = "notification_Caution_Title"
            imagen_box_Alert.src =  "media/icons/alert_Caution.svg"

            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "precaución"
                notification_Content = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = 
                notification_Content = "Here is a description of the alert"
            }
            break;

        case "alert":
            box_Alert_event.classList = "notification_AlertMagenta"
            box_Alert_title.classList = "notification_Alert_Title"
            imagen_box_Alert.src = "media/icons/alert magenta.svg"
            
            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "alerta"
                notification_Content = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "alert"
                notification_Content = "Here is a description of the alert"
            }
            break;

        case "info":
            box_Alert_event.classList = "notification_InfoCyan"
            box_Alert_title.classList = "notification_Information_Title"
            imagen_box_Alert.src = "media/icons/alert cyan.svg"
            
            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "información"
                notification_Content = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "info"
                notification_Content = "Here is a description of the alert"
            }
            break;

        case "news":
            box_Alert_event.classList = "notification_NewsPurple"
            box_Alert_title.classList = "notification_News_Title"
            imagen_box_Alert.src = "media/icons/alert purple.svg"
            
            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "novedades"
                notification_Content = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "news"
                notification_Content = "Here is a description of the alert"
            }
            break;
    }

    notification_Emerg.id = "animation"

    setTimeout(() => {
        notification_Emerg.id = ""
        contadorNoti++

        bellNoti.textContent = contadorNoti
        container_noti_noSee.innerHTML += notification_Emerg.innerHTML;

    }, 9000);
}

bellIcon.addEventListener("click", () => {
    contadorNoti = "";
    bellNoti.textContent = contadorNoti;
})

/* function for random alerts */
setInterval(() => {
    const type = ["alert", "news", "info", "caution"]
    alertaNoti(type[Math.floor(Math.random()*4)])
}, 30000);

