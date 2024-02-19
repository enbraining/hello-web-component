class NameCard extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `${this.getAttribute('name')}`;
    }
}

customElements.define("name-card", NameCard);