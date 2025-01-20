// Get DOM elements
const routeForm = document.getElementById('routeForm');
const startLocationInput = document.getElementById('startLocation');
const endLocationInput = document.getElementById('endLocation');
const accessibilityOptions = document.getElementById('accessibilityOptions');
const loadingIndicator = document.getElementById('loading');
const routeResult = document.getElementById('routeResult');
const routeDetails = document.getElementById('routeDetails');

// Form submission event listener
routeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form
  if (!startLocationInput.value.trim() || !endLocationInput.value.trim()) {
    alert('Please fill out all fields.');
    return;
  }

  // Show loading indicator
  loadingIndicator.classList.remove('hidden');
  routeResult.style.display = 'none';

  // Simulate API call delay
  setTimeout(() => {
    // Simulated route data
    const routeData = {
      start: startLocationInput.value,
      end: endLocationInput.value,
      option: accessibilityOptions.options[accessibilityOptions.selectedIndex].text,
      estimatedTime: `${Math.floor(Math.random() * 30) + 10} mins`,
    };

    // Display route details
    displayRoute(routeData);

    // Hide loading indicator
    loadingIndicator.classList.add('hidden');
    routeResult.style.display = 'block';
  }, 1500);
});

// Display route details in the UI
function displayRoute(route) {
  routeDetails.innerHTML = `
    <p><strong>From:</strong> ${route.start}</p>
    <p><strong>To:</strong> ${route.end}</p>
    <p><strong>Accessibility Option:</strong> ${route.option}</p>
    <p><strong>Estimated Time:</strong> ${route.estimatedTime}</p>
  `;
}
