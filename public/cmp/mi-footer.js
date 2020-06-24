class MiFotter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /* html */
        'Copyrigth &copy; 2020 Alvarez Hernández Juan Pablo, Barrera Estrada Abril Georgina, Castillo Castillo Estefania, Loaiza Sebastian Jose Luis, Quintana Hernández Edith';
    }
}
customElements.define("mi-footer", MiFotter);