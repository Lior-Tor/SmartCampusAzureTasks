// Get form elements
const profileForm = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const successMessage = document.getElementById("successMessage");
const cancelBtn = document.getElementById("cancelBtn");

// Validate Phone Number Format
function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone); // Allows only 10-digit numbers
}

// Handle Form Submission
profileForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validation Checks
    if (nameInput.value.trim() === "" || addressInput.value.trim() === "" || !isValidPhone(phoneInput.value.trim())) {
        alert("⚠️ Please enter valid details. Phone number must be 10 digits.");
        return;
    }

    // Simulate Profile Update
    successMessage.classList.remove("hidden");

    // Simulate Saving Data (LocalStorage or Backend API can be used here)
    setTimeout(() => {
        successMessage.classList.add("hidden");
        profileForm.reset(); // Reset form fields
    }, 2000);
});

// Handle Cancel Button
cancelBtn.addEventListener("click", function() {
    profileForm.reset(); // Clear input fields
});
