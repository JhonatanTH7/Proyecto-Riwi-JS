// Selectors
const containerCards = document.querySelector(".containerCards");
const inputFilterSince = document.getElementById("filterSinceDate");
const inputFilterTo = document.getElementById("filterToDate");
const filterContent = document.querySelector(".filterContent");
const URLHistoryPage = "https://jhonatanth7.github.io/database/data.json";

// Functions
async function getdata() {
  const respuesta = await fetch(URLHistoryPage);
  const data = await respuesta.json();
  console.log(data);
  drawHistory(data);
}

function drawHistory(history) {
  history.forEach((record) => {
    containerCards.innerHTML += `
    <div class="card">
              <div class="text-end">
              <img
                  src="../../media/icons/star gray.svg"
                  class="star"
                  alt="star"
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
  detectStars();
}

function detectStars() {
  document.querySelectorAll(".star").forEach((star) => {
    star.addEventListener("click", () => {
      if (star.getAttribute("src") == "../../media/icons/star gray.svg") {
        star.setAttribute("src", "../../media/icons/star yellow.svg");
      } else {
        star.setAttribute("src", "../../media/icons/star gray.svg");
      }
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
  console.log(data);
  drawHistory(data);
});

getdata();
