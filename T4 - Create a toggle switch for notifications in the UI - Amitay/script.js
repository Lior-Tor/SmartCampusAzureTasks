// Get elements from the DOM
const notificationToggle = document.getElementById('notification-toggle');
const statusMessage = document.getElementById('status-message');

// Check Local Storage for saved notification state on page load
document.addEventListener('DOMContentLoaded', () => {
    const isNotificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
    updateButtonState(isNotificationsEnabled);
    updateStatusMessage(isNotificationsEnabled);
});

// Event listener for the button click
notificationToggle.addEventListener('click', () => {
    const isEnabled = notificationToggle.classList.contains('enabled');
    const newState = !isEnabled;

    // Save the new state in Local Storage
    localStorage.setItem('notificationsEnabled', newState);

    // Update button and status message
    updateButtonState(newState);
    updateStatusMessage(newState);
});

// Update the button's state and text
function updateButtonState(isEnabled) {
    if (isEnabled) {
        notificationToggle.textContent = 'Disable Notifications';
        notificationToggle.classList.remove('disabled');
        notificationToggle.classList.add('enabled');
    } else {
        notificationToggle.textContent = 'Enable Notifications';
        notificationToggle.classList.remove('enabled');
        notificationToggle.classList.add('disabled');
    }
}

// Update the status message based on the button's state
function updateStatusMessage(isEnabled) {
    if (isEnabled) {
        statusMessage.textContent = 'Notifications are enabled';
        statusMessage.style.color = '#4CAF50'; // Green color for enabled
    } else {
        statusMessage.textContent = 'Notifications are disabled';
        statusMessage.style.color = '#f44336'; // Red color for disabled
    }
}
