class myElement extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
      <section>
        <h1>TEMPLATE Web Component</h1> 
        <h2 class="title">Mensaje desde template dentro del WC</h2>
        <div id="div_section_1">
          <p>Parrafo_1 dentro del Template dentro del WC</p>
        </div>
        <div id="div_section_2">
          <p>Parrafo_2 metodo getTemplate() dentro del WC</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
        return template;
    }
    getStyles() {
        return `
      <style>
        h2 {
          color: red;
          background-color:yellow;
        }
      </style>
    `;
    }
    render() {

        alert('metodo render ');
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        alert('metodo connectedCallback ');

        this.render();
    }
}
customElements.define("elemento-template", myElement);