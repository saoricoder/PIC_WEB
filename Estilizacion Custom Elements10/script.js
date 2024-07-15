class CustomButton extends HTMLElement{
    conectedCallback(){
        this.innerHTML=`
        <button>
        ${this.textContent}
        </button>
        ;`
    }
}

customElements.define('custom-button',CustomButton);