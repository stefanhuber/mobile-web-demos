class TodoForm extends HTMLElement {
    constructor() {
        super();            
        this.attachShadow({mode: 'open'});            
    }

    connectedCallback() {
        this.render();        
        this.shadowRoot
            .querySelector('button')
            .addEventListener('click', () => this.addTodo());
    }

    addTodo() {
        const input = this.shadowRoot.querySelector('input');
        const todo = input.value;
        if (todo) {
            this.dispatchEvent(new CustomEvent('todo-added', {
                bubbles: true,
                composed: true,
                detail: todo
            }));
            input.value = "";
        }
    }

    render() {
        this.shadowRoot.innerHTML = "<input><button>Add Todo</button>";
    }
}

window.customElements.define('todo-form', TodoForm);