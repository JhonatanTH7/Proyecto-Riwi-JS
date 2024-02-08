const cards = document.querySelector(
  "body > div.savedMaps > div.savedMaps_ContainerCards"
);

async function getFavorites() {
  const response = await fetch("http://localhost:3000/history");
  const data = await response.json();
  const favoriteList = data.filter((record) => record.favorite == true);
  return await favoriteList;
}

document.addEventListener("DOMContentLoaded", async () => {
  cards.innerHTML = "";
  const data = await getFavorites();
  data.forEach((element) => {
    cards.innerHTML += ` 
      <div class="savedMaps_Card">
          <div class="savedMaps_Card_Icon">
            <img
              src="/media/icons/star yellow.svg"
              alt="star_yellow"
              class="savedMaps_Card_Icon_Star"
              data-id="${element.id}"
            />
          </div>
          <div class="savedMaps_Card_From">
            <img
              src="/media/icons/location.svg"
              alt="location"
              class="savedMaps_Card_From_Icon"
            />
            <input
              class="savedMaps_Card_From_Input"
              type="text"
              value="${element.from}"
              disabled
            />
          </div>
          <div class="savedMaps_Card_To">
            <img
              src="/media/icons/location.svg"
              alt="location"
              class="savedMaps_Card_To_Icon"
            />
            <input
              class="savedMaps_Card_To_Input"
              type="text"
              value="${element.to}"
              disabled
            />
          </div>
          <div class="savedMaps_Card_Button">
            <button class="savedMaps_Card_Button_Go" type="submit">
              GO BACK!
            </button>
          </div>
        </div>`;
  });
  detectStars(data);
});

function detectStars(history) {
  document.querySelectorAll(".savedMaps_Card_Icon_Star").forEach((star) => {
    star.addEventListener("click", async () => {
      const id = star.getAttribute("data-id");
      const recordSelected = history.filter((record) => record.id == id);
      await fetch(`${"http://localhost:3000/history"}/${id}`, {
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
