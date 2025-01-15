// script.js

// DOM Elements
const languageSelect = document.getElementById("language");
const saveButton = document.getElementById("saveButton");
const settingsTitle = document.getElementById("settingsTitle");
const languageLabel = document.getElementById("languageLabel");

// Translations for the page
const translations = {
  en: {
    settingsTitle: "Settings",
    languageLabel: "Language",
    saveButton: "Save Settings",
  },
  es: {
    settingsTitle: "Configuración",
    languageLabel: "Idioma",
    saveButton: "Guardar Configuración",
  },
  fr: {
    settingsTitle: "Paramètres",
    languageLabel: "Langue",
    saveButton: "Enregistrer les paramètres",
  },
  de: {
    settingsTitle: "Einstellungen",
    languageLabel: "Sprache",
    saveButton: "Einstellungen speichern",
  },
  he: {
    settingsTitle: "הגדרות",
    languageLabel: "שפה",
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
  settingsTitle.textContent = translations[language].settingsTitle;
  languageLabel.textContent = translations[language].languageLabel;
  saveButton.textContent = translations[language].saveButton;

  // Change document direction for Hebrew
  document.body.dir = language === "he" ? "rtl" : "ltr";
}