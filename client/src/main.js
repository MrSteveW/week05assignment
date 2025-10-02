// === Setup constants and any DOM elements
const wineContainer = document.getElementById("wine-container");
const server_url = "https://week05assignment-server.onrender.com";

// === Fetch and display the list of wines
async function fetchData() {
  try {
    const response = await fetch(`${server_url}/wines`);
    const data = await response.json();
    displayWines(data);
  } catch (err) {
    console.error(err);
    wineContainer.textContent = "Could not load wines.";
  }
}

//  === Display wine list
function displayWines(data) {
  wineContainer.textContent = ""; // Clear existing wines

  data.forEach((wine) => {
    const newWine = document.createElement("div");
    newWine.className = "wine-card";
    newWine.textContent = `${wine.grape_variety} — ${wine.country}`;
    newWine.addEventListener("click", () =>
      handleSearchWine(wine.grape_variety)
    );
    wineContainer.appendChild(newWine);
  });
}

// === Fetch details by grape variety
async function handleSearchWine(grape_variety) {
  try {
    const response = await fetch(`${server_url}/details/${grape_variety}`);
    const data = await response.json();

    wineContainer.textContent = ""; // Clear existing wines

    // === Add back button
    const backBtn = document.createElement("div");
    backBtn.textContent = "← Back to list";
    backBtn.className = "back-btn";
    backBtn.onclick = fetchData;
    wineContainer.appendChild(backBtn);

    // === Show each wine detail
    data.forEach((wine) => {
      const wineDiv = document.createElement("div");
      wineDiv.className = "wine-item";

      Object.entries(wine).forEach(([key, value]) => {
        // == strip off id & notes fields
        if (key === "id") return;
        if (key === "notes") return;
        if (key === "price") {
          const div = document.createElement("div");
          div.className = `wine-${key}`;
          div.textContent = `£${value}`;
          wineDiv.appendChild(div);
        } else if (key == "rating") {
          const div = document.createElement("div");
          div.className = `wine-${key}`;
          div.textContent = `${value} / 100`;
          wineDiv.appendChild(div);
        } else {
          const div = document.createElement("div");
          div.className = `wine-${key}`;
          div.textContent = `${value}`;
          wineDiv.appendChild(div);
        }
      });
      const div = document.createElement("div");
      div.className = "wine-more";
      div.textContent = "More";
      wineDiv.appendChild(div);
      wineContainer.appendChild(wineDiv);
    });
  } catch (error) {
    console.error(error);
    wineContainer.textContent = "Error loading wine details.";
  }
}

// === Load initial wine list
fetchData();
// === End of file ===
