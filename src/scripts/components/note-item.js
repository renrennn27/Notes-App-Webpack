import api from "../data/api.js";
import LoadingIndicator from "./loading-indicator.js";

class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.note = JSON.parse(this.getAttribute("note"));
    this.render();
    this.initEvents();
  }

  initEvents() {
    const archiveButton = this.shadowRoot.querySelector(".archive-button");
    const deleteButton = this.shadowRoot.querySelector(".delete-button");

    archiveButton.addEventListener("click", async () => {
      const loading = LoadingIndicator.show();

      if (this.note.archived) {
        await api.unarchiveNote(this.note.id);
      } else {
        await api.archiveNote(this.note.id);
      }

      LoadingIndicator.hide(loading);
      document.dispatchEvent(new Event("notes-changed"));
    });

    deleteButton.addEventListener("click", async () => {
      const confirmed = confirm(
        "Apakah Anda yakin ingin menghapus catatan ini?",
      );

      if (confirmed) {
        const loading = LoadingIndicator.show();
        await api.deleteNote(this.note.id);
        LoadingIndicator.hide(loading);
        document.dispatchEvent(new Event("notes-changed"));
      }
    });
  }

  formatDate(dateString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  render() {
    const { title, body, createdAt, archived } = this.note;
    const formattedDate = this.formatDate(createdAt);

    this.shadowRoot.innerHTML = `
      <style>
        .note-item {
          background-color: white;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
          height: 100%;
        }
        
        .note-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .note-header {
          margin-bottom: 10px;
        }
        
        .note-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        
        .note-date {
          font-size: 0.8rem;
          color: #7f8c8d;
        }
        
        .note-body {
          flex-grow: a;
          margin-bottom: 15px;
          line-height: 1.5;
          word-break: break-word;
          white-space: pre-line;
        }
        
        .note-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        
        .note-actions button {
          padding: 6px 12px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s;
        }
        
        .delete-button {
          background-color: #e74c3c;
          color: white;
        }
        
        .delete-button:hover {
          background-color: #c0392b;
        }
        
        .archive-button {
          background-color: ${archived ? "#3498db" : "#2ecc71"};
          color: white;
        }
        
        .archive-button:hover {
          background-color: ${archived ? "#2980b9" : "#27ae60"};
        }
      </style>
      
      <div class="note-item">
        <div class="note-header">
          <div class="note-title">${title}</div>
          <div class="note-date">${formattedDate}</div>
        </div>
        <div class="note-body">${body}</div>
        <div class="note-actions">
          <button class="archive-button">
            ${archived ? "Pulihkan" : "Arsipkan"}
          </button>
          <button class="delete-button">Hapus</button>
        </div>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);

export default NoteItem;
