// === Setup constants and any DOM elements
const wineContainer = document.getElementById("wine-container");

// === Fetch and display the list of wines
async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/wines");
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
    const response = await fetch(
      `http://localhost:8080/details/${grape_variety}`
    );
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
        // == strip off id field
        if (key === "id") return;

        const div = document.createElement("div");
        div.className = `wine-${key}`;
        if (Array.isArray(value)) {
          div.innerHTML = `<strong>${key}:</strong> ${value.join(", ")}`;
        } else {
          div.innerHTML = `<strong>${key}:</strong> ${value}`;
        }
        wineDiv.appendChild(div);
      });

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
