import api from "../data/api.js";
import LoadingIndicator from "./loading-indicator.js";
import "./note-item.js";

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.notes = [];
    this.innerHTML = "";
  }

  async connectedCallback() {
    this.id = this.getAttribute("id");
    await this.fetchNotes();

    document.addEventListener("notes-changed", async () => {
      await this.fetchNotes();
    });
  }

  async fetchNotes() {
    const loading = LoadingIndicator.show();

    if (this.id === "archivedNotes") {
      this.notes = await api.getArchivedNotes();
    } else {
      this.notes = await api.getNotes();
    }

    LoadingIndicator.hide(loading);
    this.render();
  }

  render() {
    this.innerHTML = "";

    const isArchived = this.id === "archivedNotes";

    if (!this.notes || this.notes.length === 0 || this.notes.error) {
      this.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 20px; color: #7f8c8d;">
          Tidak ada catatan ${isArchived ? "di arsip" : "aktif"}.
        </div>
      `;
      return;
    }

    this.notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.setAttribute("note", JSON.stringify(note));
      this.appendChild(noteItem);
    });
  }
}

customElements.define("note-list", NoteList);

export default NoteList;
