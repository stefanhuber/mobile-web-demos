class TodoList extends HTMLElement {
    constructor() {
        super();    
        this.todos = ['Doing Homework', 'Going shopping', 'Cleanup garage'];
        this.attachShadow({mode: 'open'});    
        this.shadowRoot.innerHTML = '<todo-form></todo-form><div></div>';
    }

    connectedCallback() {
        this.render();
        this.addEventListener('todo-added',   (event) => this.todoAdded(event.detail));
        this.addEventListener('todo-removed', (event) => this.todoRemoved(event.detail));
    }

    todoAdded(todo) {
        this.todos.push(todo);
        this.render();
    }

    todoRemoved(todo) {
        this.todos = this.todos.filter(text => text != todo);
        this.render();
    }

    render() {
        const todoItems = this.todos
            .map((item) => `<todo-item name="${item}"></todo-item>`)
            .reduce((prev, curr) => prev += curr);
        this.shadowRoot.querySelector('div').innerHTML = todoItems;
    }
}

window.customElements.define('todo-list', TodoList);
