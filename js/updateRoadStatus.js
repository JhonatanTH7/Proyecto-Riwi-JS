const arsd = document.querySelector(".menu-left");

document.addEventListener("click", () => {
  setTimeout(() => {
    console.log(arsd.getBoundingClientRect());
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

async function getData() {
  const respuesta = await fetch("http://localhost:3000/notification");
  const data = await respuesta.json();
  drawTable(data);
}

function drawTable(notifications) {
  const table = document.querySelector(".update_Table_Notifications");
  let id;
  notifications.forEach((notification) => {
    id = "alertNotification";
    if (notification.type == "caution") {
      id = "cautionNotification";
    }
    if (notification.type == "info") {
      id = "infoNotification";
    }
    if (notification.type == "news") {
      id = "newsNotification";
    }
    table.innerHTML += `
    <tr>
    <td colspan="4">
      <div class="collapse" id="${id}">
        <div class="card card-body">${notification.content}</div>
      </div>
    </td>
  </tr>
    `;
  });
}
