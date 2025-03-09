import "../styles/style.css";
import "./components/app-bar.js";
import "./components/note-input.js";
import "./components/note-list.js";
import "./components/loading-indicator.js";

document.addEventListener("DOMContentLoaded", () => {
  document.dispatchEvent(new Event("notes-changed"));
});
