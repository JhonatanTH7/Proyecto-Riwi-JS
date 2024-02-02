const cards = document.querySelector(
  "body > div.savedMaps > div.savedMaps_ContainerCards"
);

async function getaddedSave() {
  const URL = "http://localhost:3000/saved";

  const response = await fetch(`${URL}`);
  const data = await response.json();
  return await data;
}

getaddedSave();

document.addEventListener("DOMContentLoaded", async () => {
  cards.innerHTML = "";
  const data = await getaddedSave();
  data.forEach((element) => {
    cards.innerHTML += ` <div class="savedMaps_Card">
        <div class="savedMaps_Card_Icon">
          <img src="/media/icons/star yellow.svg" alt="star_yellow" class="savedMaps_Card_Icon_Star">
        </div>
        <div class="savedMaps_Card_From">
          <img src="/media/icons/location.svg" alt="location" class="savedMaps_Card_From_Icon">
          <input class="savedMaps_Card_From_Input" type="text" placeholder="Medellín" disabled="">
        </div>
        <div class="savedMaps_Card_To">
          <input class="savedMaps_Card_To_Input" type="text" placeholder="Coveñas" disabled="">
        </div>
        <div class="savedMaps_Card_Button">
          <button class="savedMaps_Card_Button_Go" type="submit">
            GO BACK!
          </button>
        </div>
      </div>`;
  });
});
