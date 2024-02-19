class NameCard extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
            <h3>${this.getAttribute('name')}</h3>
            <hr>
        `;
    }
}

customElements.define("name-card", NameCard);