// Selectors
const containerCards = document.querySelector(".containerCards");
const inputFilterSince = document.getElementById("filterSinceDate");
const inputFilterTo = document.getElementById("filterToDate");
const filterContent = document.querySelector(".filterContent");
const URLHistoryPage = "http://localhost:3000/history";

// Functions
async function getdata() {
  const respuesta = await fetch(URLHistoryPage);
  const data = await respuesta.json();
  drawHistory(data);
}

function drawHistory(history) {
  history.forEach((record) => {
    let URLimg = "../../media/icons/star gray.svg";
    if (record.favorite == true) {
      URLimg = "../../media/icons/star yellow.svg";
    }
    containerCards.innerHTML += `
    <div class="card">
              <div class="text-end">
              <img
                  src="${URLimg}"
                  class="star"
                  alt="star"
                  data-id="${record.id}"
                  />
                  </div>
                  <div class="text-center">
                  <img
                  src="../../media/icons/img_card.jpg"
                  class="card-img-top"
                  alt="route img"
                />
              </div>
              <div class="card-body">
                <div>
                  <div>
                    <label for="from">From:</label>
                    <input type="text" id="from" value="${record.from}" disabled />
                    </div>
                    <div>
                    <label for="to">To:</label>
                    <input type="text" id="to" value="${record.to}" disabled />
                    </div>
                    </div>
                    <div>
                    <div>
                    <label for="startTime">Start:</label>
                    <input type="text" id="startTime" value="${record.start}" disabled />
                  </div>
                  <div>
                  <label for="endTime">End:</label>
                  <input type="text" id="endTime" value="${record.end}" disabled />
                  </div>
                  </div>
                  <div>
                  <div>
                  <label for="date">Date:</label>
                  <input type="text" id="date" value="${record.date}" disabled />
                  </div>
                  <div>
                  <label for="end">Km:</label>
                  <input type="text" id="end" value="${record.km}" disabled />
                  </div>
                  </div>
                  </div>
                  </div>
                  `;
  });

  detectStars(history);
}

function detectStars(history) {
  document.querySelectorAll(".star").forEach((star) => {
    star.addEventListener("click", async () => {
      const id = star.getAttribute("data-id");
      const recordSelected = history.filter((record) => record.id == id);
      await fetch(`${URLHistoryPage}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: recordSelected[0].from,
          to: recordSelected[0].to,
          start: recordSelected[0].start,
          end: recordSelected[0].end,
          date: recordSelected[0].date,
          km: recordSelected[0].km,
          favorite: !recordSelected[0].favorite,
        }),
      });
    });
  });
}

function cleanHistory() {
  while (containerCards.firstChild) {
    containerCards.removeChild(containerCards.firstChild);
  }
}

// Events
filterContent.addEventListener("input", async () => {
  cleanHistory();
  const respuesta = await fetch(URLHistoryPage);
  let data = await respuesta.json();
  console.log(new Date().toLocaleDateString());
  data = data.filter(
    (record) =>
      inputFilterSince.value <= record.date &&
      inputFilterTo.value >= record.date
  );
  drawHistory(data);
});

document.addEventListener("DOMContentLoaded", () => {
  getdata();
});
