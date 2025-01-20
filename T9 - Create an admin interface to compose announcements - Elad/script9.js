// Get DOM elements
const form = document.getElementById('announcementForm');
const titleInput = document.getElementById('announcementTitle');
const bodyInput = document.getElementById('announcementBody');
const loadingIndicator = document.getElementById('loading');
const announcementList = document.getElementById('announcementList');

// Load announcements from Local Storage
document.addEventListener('DOMContentLoaded', () => {
  const savedAnnouncements = JSON.parse(localStorage.getItem('announcements')) || [];
  savedAnnouncements.forEach((announcement) => addAnnouncementToList(announcement));
});

// Form submission event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form
  if (!titleInput.value.trim() || !bodyInput.value.trim()) {
    alert('Please fill out all fields.');
    return;
  }

  // Show loading indicator
  loadingIndicator.classList.remove('hidden');

  // Simulate API call delay
  setTimeout(() => {
    const announcement = {
      title: titleInput.value,
      body: bodyInput.value,
      date: new Date().toLocaleString(),
    };

    // Add announcement to UI
    addAnnouncementToList(announcement);

    // Save to Local Storage
    saveAnnouncement(announcement);

    // Reset form
    form.reset();
    loadingIndicator.classList.add('hidden');
  }, 1000);
});

// Add announcement to the list in the UI
function addAnnouncementToList(announcement) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${announcement.title}</strong>
    <p>${announcement.body}</p>
    <small>Posted on: ${announcement.date}</small>
  `;
  announcementList.appendChild(li);
}

// Save announcement to Local Storage
function saveAnnouncement(announcement) {
  const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
  announcements.push(announcement);
  localStorage.setItem('announcements', JSON.stringify(announcements));
}
