class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .app-bar {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h1 {
          margin: 0;
          font-size: 1.5rem;
        }
      </style>
      <div class="app-bar">
        <h1>Aplikasi Catatan</h1>
      </div>
    `;
  }
}

customElements.define("app-bar", AppBar);

export default AppBar;
