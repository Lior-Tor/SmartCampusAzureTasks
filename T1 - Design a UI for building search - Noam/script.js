// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const resultsList = document.getElementById("results-list");
    const dataList = document.getElementById("building-options");
    const buildingInput = document.getElementById("building-name");

    // List of buildings (can be fetched from an API)
    const buildings = [
        "Library",
        "Science Building",
        "Student Center",
        "Gymnasium",
        "Administration Building",
        "Arts Center",
        "Engineering Hall",
        "Medical School",
        "Dormitories",
        "Cafeteria",
    ];

    // Populate datalist with building options
    buildings.forEach((building) => {
        const option = document.createElement("option");
        option.value = building;
        dataList.appendChild(option);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const buildingName = buildingInput.value.trim();
        if (!buildingName) {
            alert("Please enter or select a building name.");
            return;
        }

        // Clear previous results
        resultsList.innerHTML = "";

        // Search for matching buildings
        const filteredResults = buildings.filter((building) =>
            building.toLowerCase().includes(buildingName.toLowerCase())
        );

        // Display results
        if (filteredResults.length > 0) {
            filteredResults.forEach((building) => {
                const listItem = document.createElement("li");
                listItem.textContent = building;
                resultsList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = "No matching buildings found.";
            resultsList.appendChild(listItem);
        }
    });
});
