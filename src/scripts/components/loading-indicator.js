class LoadingIndicator extends HTMLElement {
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
            .loading-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backgrond-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999;
            }

            .spinner {
                width: 50px
                height: 50px;
                border: 5px solid #f3f3f3;
                border-top: 5px solid #2c3e50;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>

        <div class="loading-container">
            <div class="spinner"></div>        
        </div>
        `;
  }

  static show() {
    const loadingElement = document.createElement("loading-indicator");
    document.body.appendChild(loadingElement);
    return loadingElement;
  }

  static hide(element) {
    if (element) {
      element.remove();
    }
  }
}

customElements.define("loading-indicator", LoadingIndicator);

export default LoadingIndicator;
