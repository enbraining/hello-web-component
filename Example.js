class Example extends HTMLElement {
    constructor(){
        this.innerHTML = 'this is header';
        super();
    }
}

customElements.define("example", Example);