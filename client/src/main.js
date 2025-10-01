const wineContainer = document.getElementById("wine-container");

async function fetchData() {
  const response = await fetch("http://localhost:8080/wines");
  const data = await response.json();
  displayWines(data);
}

function displayWines(data) {
  wineContainer.textContent = ""; // Clear existing wines
  data.forEach((wine) => {
    const newWine = document.createElement("div");
    newWine.textContent = wine.grape_variety;
    newWine.addEventListener("click", () =>
      handleSearchWine(wine.grape_variety)
    );
    wineContainer.appendChild(newWine);
  });
}

fetchData();

async function handleSearchWine(grape_variety) {
  try {
    const response = await fetch(
      `http://localhost:8080/details/${grape_variety}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    wineContainer.textContent = ""; // Clear existing wines // Loop through each wine in the array
    data.forEach((wine) => {
      const wineDiv = document.createElement("div");
      wineDiv.className = "wine-item";

      // Loop through each property of the wine object
      Object.entries(wine).forEach(([key, value]) => {
        const div = document.createElement("div");
        div.setAttribute("class", `${key}`);
        div.textContent = `${value}`;
        wineDiv.appendChild(div);
      });

      wineContainer.appendChild(wineDiv);
    });
  } catch (error) {
    console.error(error);
  }
}
