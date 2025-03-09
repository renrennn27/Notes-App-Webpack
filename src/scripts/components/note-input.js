import api from "../data/api.js";
import LoadingIndicator from "./loading-indicator.js";

class NoteInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.initEvents();
  }

  initEvents() {
    const form = this.shadowRoot.querySelector("#noteForm");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const title = this.shadowRoot.querySelector("#title").value;
      const body = this.shadowRoot.querySelector("#body").value;

      if (title.trim() && body.trim()) {
        const loading = LoadingIndicator.show();

        const result = await api.addNote({ title, body });

        LoadingIndicator.hide(loading);

        if (!result.error) {
          document.dispatchEvent(new Event("notes-changed"));
          form.reset();
        } else {
          alert(`Gagal menambahkan catatan: ${result.message}`);
        }
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .note-input {
          width: 100%;
        }
        
        .note-input form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .note-input h2 {
          margin-bottom: 12px;
          color: #2c3e50;
        }
        
        .note-input input, 
        .note-input textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: 'Arial', sans-serif;
        }
        
        .note-input textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        button {
          padding: 10px 15px;
          background-color: #2c3e50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        
        button:hover {
          background-color: #3c5c7d;
        }
      </style>
      
      <div class="note-input">
        <h2>Tambah Catatan Baru</h2>
        <form id="noteForm">
          <input 
            type="text" 
            id="title" 
            placeholder="Judul catatan" 
            required
          />
          <textarea 
            id="body" 
            placeholder="Isi catatan..."
            required
          ></textarea>
          <button type="submit">Simpan</button>
        </form>
      </div>
    `;
  }
}

customElements.define("note-input", NoteInput);

export default NoteInput;
