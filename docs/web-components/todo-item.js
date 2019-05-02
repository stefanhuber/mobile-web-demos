class TodoItem extends HTMLElement {
    constructor() {
        super();            
        this.attachShadow({mode: 'open'});
        this.name = this.getAttribute('name');
    }

    connectedCallback() {
        this.render();        
        this.shadowRoot
            .querySelector('button')
            .addEventListener('click', () => this.removeTodo());
    }

    removeTodo() {
        this.dispatchEvent(new CustomEvent('todo-removed', {
            bubbles: true,
            composed: true,
            detail: this.name
        }));
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display:block;
                    padding:5px 0;
                }
            </style>
            <button>&#10004;</button> ${this.name}
        `;
    }
}

window.customElements.define('todo-item', TodoItem);