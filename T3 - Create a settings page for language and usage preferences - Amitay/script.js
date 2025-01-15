// script.js

// DOM Elements
const languageSelect = document.getElementById("language");
const saveButton = document.getElementById("saveButton");
const settingsTitle = document.getElementById("settingsTitle");
const languageLabel = document.getElementById("languageLabel");
const darkModeLabel = document.querySelector("[data-key='darkModeLabel']");
const fontSizeLabel = document.querySelector("[data-key='fontSizeLabel']");
const notificationsLabel = document.querySelector("[data-key='notificationsLabel']");

// Translations for the page
const translations = {
  en: {
    settingsTitle: "Settings",
    languageLabel: "Language",
    darkModeLabel: "Dark Mode",
    fontSizeLabel: "Font Size",
    notificationsLabel: "Enable Notifications",
    saveButton: "Save Settings",
  },
  es: {
    settingsTitle: "Configuración",
    languageLabel: "Idioma",
    darkModeLabel: "Modo Oscuro",
    fontSizeLabel: "Tamaño de Fuente",
    notificationsLabel: "Habilitar Notificaciones",
    saveButton: "Guardar Configuración",
  },
  fr: {
    settingsTitle: "Paramètres",
    languageLabel: "Langue",
    darkModeLabel: "Mode Sombre",
    fontSizeLabel: "Taille de la police",
    notificationsLabel: "Activer les notifications",
    saveButton: "Enregistrer les paramètres",
  },
  de: {
    settingsTitle: "Einstellungen",
    languageLabel: "Sprache",
    darkModeLabel: "Dunkelmodus",
    fontSizeLabel: "Schriftgröße",
    notificationsLabel: "Benachrichtigungen aktivieren",
    saveButton: "Einstellungen speichern",
  },
  he: {
    settingsTitle: "הגדרות",
    languageLabel: "שפה",
    darkModeLabel: "מצב כהה",
    fontSizeLabel: "גודל גופן",
    notificationsLabel: "הפעל התראות",
    saveButton: "שמור הגדרות",
  },
};

// Load settings and apply language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
  languageSelect.value = savedLanguage;
  applyTranslations(savedLanguage);
});

// Save settings and update language dynamically
saveButton.addEventListener("click", () => {
  const selectedLanguage = languageSelect.value;

  // Save to Local Storage
  localStorage.setItem("preferredLanguage", selectedLanguage);

  // Update page language
  applyTranslations(selectedLanguage);

  // Provide user feedback
  saveButton.textContent = translations[selectedLanguage].saveButton + " ✔";
  setTimeout(() => {
    saveButton.textContent = translations[selectedLanguage].saveButton;
  }, 2000);
});

// Function to apply translations
function applyTranslations(language) {
  if (!translations[language]) return; // Fallback for unsupported languages
  
  // Update text content of all elements that require translation
  settingsTitle.textContent = translations[language].settingsTitle;
  languageLabel.textContent = translations[language].languageLabel;
  darkModeLabel.textContent = translations[language].darkModeLabel;
  fontSizeLabel.textContent = translations[language].fontSizeLabel;
  notificationsLabel.textContent = translations[language].notificationsLabel;
  saveButton.textContent = translations[language].saveButton;

  // Change document direction for Hebrew
  document.body.dir = language === "he" ? "rtl" : "ltr";
}
