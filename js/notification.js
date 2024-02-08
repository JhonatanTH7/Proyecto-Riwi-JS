/* selector */
const notification_Emerg = document.querySelector(".notification-Emerg")
const bellIcon = document.querySelector(".bellIcon")
const bellNoti = document.querySelector(".contadorNoti")
const container_noti_noSee = document.querySelector(".container_noti_noSee")
let contadorNoti = 0;

function alertaNoti(tipoAlerta) {

    const box_Alert_event = notification_Emerg.querySelector("#box_Alert_event")
    const box_Alert_title = notification_Emerg.querySelector("#box_Alert_title")
    const imagen_box_Alert = notification_Emerg.querySelector("#imagen_box_Alert")
    const title_box_Alert_event = notification_Emerg.querySelector("#title_box_Alert_event")
    const notification_Content = notification_Emerg.querySelector(".notification_Content")

    switch (tipoAlerta) {
        case "caution":
            box_Alert_event.classList = "notification_CautionOrange"
            box_Alert_title.classList = "notification_Caution_Title"
            imagen_box_Alert.src =  "media/icons/alert_Caution.svg"

            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "Precaución"
                notification_Content.textContent = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "Caution"
                notification_Content.textContent = "Here is a description of the alert"
            }
            break;

        case "alert":
            box_Alert_event.classList = "notification_AlertMagenta"
            box_Alert_title.classList = "notification_Alert_Title"
            imagen_box_Alert.src = "media/icons/alert magenta.svg"
            
            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "Alerta"
                notification_Content.textContent = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "Alert"
                notification_Content.textContent = "Here is a description of the alert"
            }
            break;

        case "info":
            box_Alert_event.classList = "notification_InfoCyan"
            box_Alert_title.classList = "notification_Information_Title"
            imagen_box_Alert.src = "media/icons/alert cyan.svg"
            
            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "Información"
                notification_Content.textContent = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "Info"
                notification_Content.textContent = "Here is a description of the alert"
            }
            break;

        case "news":
            box_Alert_event.classList = "notification_NewsPurple"
            box_Alert_title.classList = "notification_News_Title"
            imagen_box_Alert.src = "media/icons/alert purple.svg"
            
            if(document.querySelector("html").lang == "es") {
                title_box_Alert_event.textContent = "Novedades"
                notification_Content.textContent = "Aqui va una descripcion del la alerta"
            } else {
                title_box_Alert_event.textContent = "News"
                notification_Content.textContent = "Here is a description of the alert"
            }
            break;
    }

    notification_Emerg.id = "animation"
    
    setTimeout(async () => {
        await fetch("http://localhost:3000/notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "type": tipoAlerta ,
            "content": notification_Content.textContent,
            "hour": new Date().toLocaleTimeString('en-US'),
            "date": new Date().toLocaleDateString('en-US')
        }),
      });
    }, 300000);

    setTimeout(() => {
        notification_Emerg.id = ""
        contadorNoti++
        if(!bellIcon.classList.contains("notsee")){
            bellIcon.classList.add("notsee")
            container_noti_noSee.innerHTML = notification_Emerg.innerHTML;
        } else {
            container_noti_noSee.innerHTML += notification_Emerg.innerHTML;
        }

        bellNoti.textContent = contadorNoti
    }, 9000);
}

bellIcon.addEventListener("click", () => {
    contadorNoti = "";
    bellNoti.textContent = contadorNoti;
    if(bellIcon.classList.contains("notsee")){
        bellIcon.classList.remove("notsee")
    }
})

/* function for random alerts */
setInterval(() => {
    const type = ["alert", "news", "info", "caution"]
    const eleccion = type[Math.floor(Math.random()*4)];
    alertaNoti(eleccion)
}, 50000);
