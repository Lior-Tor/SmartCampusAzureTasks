// Simulated Notification Types
const notificationTypes = [
    { type: "success", message: "🎉 Booking confirmed!", color: "green" },
    { type: "warning", message: "⚠️ Your session is about to expire.", color: "orange" },
    { type: "error", message: "❌ Unable to process request. Try again later.", color: "red" },
    { type: "info", message: "ℹ️ New study room added to the system.", color: "blue" }
];

// Retrieve saved notifications from Local Storage
let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

// Function to render notifications in the UI
function renderNotifications() {
    const notificationList = document.getElementById("notifications");
    notificationList.innerHTML = "";

    if (notifications.length === 0) {
        notificationList.innerHTML = "<li style='text-align:center;'>No new notifications.</li>";
        return;
    }

    notifications.forEach((notification, index) => {
        const li = document.createElement("li");
        li.textContent = notification.message;
        li.style.borderLeft = `5px solid ${notification.color}`;

        // Create a dismiss button
        const dismissBtn = document.createElement("button");
        dismissBtn.textContent = "X";
        dismissBtn.classList.add("dismiss-btn");
        dismissBtn.onclick = () => dismissNotification(index);

        li.appendChild(dismissBtn);
        notificationList.appendChild(li);
    });

    // Save to Local Storage
    localStorage.setItem("notifications", JSON.stringify(notifications));
}

// Function to dismiss a notification with animation
function dismissNotification(index) {
    const notificationList = document.getElementById("notifications");
    const items = notificationList.getElementsByTagName("li");

    if (items[index]) {
        items[index].style.animation = "fade-out 0.5s ease-out";
        setTimeout(() => {
            notifications.splice(index, 1);
            renderNotifications();
        }, 500);
    }
}

// Function to add a new notification
function addNotification() {
    const randomNotification = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
    
    const newNotification = {
        message: randomNotification.message,
        color: randomNotification.color
    };

    notifications.push(newNotification);
    renderNotifications();
}

// Event listener for adding notifications
document.getElementById("addNotification").addEventListener("click", addNotification);

// Initial render of notifications
renderNotifications();
