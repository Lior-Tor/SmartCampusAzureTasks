// Simulated Room Data (Backend API Simulation)
const rooms = [
    { id: 1, name: "Room Weiler 301", capacity: 4 },
    { id: 2, name: "Room Weiler 310", capacity: 8 },
    { id: 3, name: "Room Israel 201", capacity: 6 },
    { id: 4, name: "Room Beren 501", capacity: 2 },
    { id: 5, name: "Room Beren 520", capacity: 10 }
];

// Populate Room Dropdown
const roomSelect = document.getElementById("room");
rooms.forEach(room => {
    let option = document.createElement("option");
    option.value = room.name;
    option.textContent = `${room.name} (Capacity: ${room.capacity})`;
    roomSelect.appendChild(option);
});

// Handle Form Submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;
    const loadingIndicator = document.getElementById("loading");
    const confirmation = document.getElementById("confirmation");

    // Validate Input
    if (!name || !email || !date || !time || !room) {
        alert("⚠️ Please fill in all fields.");
        return;
    }

    // Show Loading Indicator
    loadingIndicator.style.display = "block";
    confirmation.classList.add("hidden");

    // Simulate Backend Processing (1.5 seconds)
    setTimeout(() => {
        loadingIndicator.style.display = "none";

        // Show Confirmation
        document.getElementById("confirmRoom").textContent = room;
        document.getElementById("confirmDate").textContent = date;
        document.getElementById("confirmTime").textContent = time;

        confirmation.classList.remove("hidden");
    }, 1500);
});
