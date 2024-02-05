const notification_Emerg = document.querySelector(".notification-Emerg")
const bellIcon = document.querySelector(".bellIcon")
const bellNoti = document.querySelector(".contadorNoti")
let contadorNoti = 0;

function alertaNoti(tipoAlerta) {

    let box_Alert_event = document.getElementById("box_Alert_event")
    let box_Alert_title = document.getElementById("box_Alert_title")
    let imagen_box_Alert = document.getElementById("imagen_box_Alert")
    let title_box_Alert_event = document.getElementById("title_box_Alert_event")
    let notification_Content = document.querySelector(".notification_Content")

    switch (tipoAlerta) {
        case "caution":
            box_Alert_event = notification_CautionOrange
            box_Alert_title = notification_Caution_Title
            imagen_box_Alert.src =  notification_CautionOrange_icon
            title_box_Alert_event.textContent =
            notification_Content = 
            break;

        case "alert":
            box_Alert_event = notification_AlertMagenta
            box_Alert_title = notification_Alert_Title
            imagen_box_Alert = notification_AlertMagenta_icon
            title_box_Alert_event.textContent =
            notification_Content = 
            break;

        case "info":
            box_Alert_event = notification_InfoCyan
            box_Alert_title = notification_Information_Title
            imagen_box_Alert = notification_InfoCyan_icon
            title_box_Alert_event.textContent = 
            notification_Content = 
            break;

        case "news":
            box_Alert_event = notification_NewsPurple
            box_Alert_title = notification_News_Title
            imagen_box_Alert = notification_NewsPurple_icon
            title_box_Alert_event.textContent =
            notification_Content = 
            break;
    }

    notification_Emerg.id = "animationNoti"

    setTimeout(() => {
        notification_Emerg.id = ""
        contadorNoti++

        bellNoti.textContent = contadorNoti

    }, 10000);
}

bellIcon.addEventListener("click", () => {
    contadorNoti = "";
    bellNoti.textContent = contadorNoti;
})

alertaNoti("news")