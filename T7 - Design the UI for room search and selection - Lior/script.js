// Simulated Room Data (Backend API Simulation)
const rooms = [
    { id: 1, name: "Room Weiler 301", building: "Weiler", capacity: 4, availableTimes: ["10:00", "14:00", "16:00"] },
    { id: 2, name: "Room Weiler 310", building: "Weiler", capacity: 10, availableTimes: ["09:00", "12:00", "15:00"] },
    { id: 3, name: "Room Israel 201", building: "Israel", capacity: 6, availableTimes: ["08:00", "11:00", "17:00"] },
    { id: 4, name: "Room Beren 501", building: "Beren", capacity: 2, availableTimes: ["09:30", "13:00", "18:00"] },
    { id: 5, name: "Room Beren 520", building: "Beren", capacity: 8, availableTimes: ["10:00", "14:00", "19:00"] }
];

// Load dark mode preference
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Function to filter available rooms based on user input
function filterRooms(date, time, capacity, building) {
    return rooms.filter(room => {
        return room.availableTimes.includes(time) &&
               room.capacity >= capacity &&
               (building === "all" || room.building === building);
    });
}

// Event Listener for Form Submission
document.getElementById("roomSearchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedDate = document.getElementById("date").value;
    const selectedTime = document.getElementById("time").value;
    const selectedCapacity = parseInt(document.getElementById("capacity").value);
    const selectedBuilding = document.getElementById("building").value;

    // Validate Input
    if (!selectedDate || !selectedTime || isNaN(selectedCapacity)) {
        alert("Please fill out all fields.");
        return;
    }

    const availableRooms = filterRooms(selectedDate, selectedTime, selectedCapacity, selectedBuilding);

    // Display Filtered Rooms
    const roomsContainer = document.getElementById("rooms");
    roomsContainer.innerHTML = "";

    if (availableRooms.length > 0) {
        availableRooms.forEach(room => {
            const div = document.createElement("div");
            div.classList.add("room-card");
            div.innerHTML = `<strong>${room.name}</strong><br> 
                            📍 Building: ${room.building}<br> 
                            👥 Capacity: ${room.capacity}<br> 
                            ⏰ Available at: ${selectedTime}`;
            roomsContainer.appendChild(div);
        });
    } else {
        roomsContainer.innerHTML = "<p>No rooms available for the selected criteria.</p>";
    }
});
