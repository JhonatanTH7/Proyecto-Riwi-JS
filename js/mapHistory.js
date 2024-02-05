// Selectors
const containerCards = document.querySelector(".containerCards");

// Functions
async function getdata() {
  const URL = "http://localhost:3000/history";
  const respuesta = await fetch(URL);
  const data = await respuesta.json();
  drawHistory(data);
  detectStars();
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

getdata();
