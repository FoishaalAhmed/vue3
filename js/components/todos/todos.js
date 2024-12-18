import todoList from "./todoList.js";
import todoCreate from "./todoCreate.js";

export default {
    components: {todoList, todoCreate},
    template: `
        <section class="space-y-6">
            <todo-list :todos="filter.inProgress" title="In progress"></todo-list>
            <todo-list :todos="filter.completed" title="Completed"></todo-list>

            <todo-create @add="add"></todo-create>

        </section>
    `,

    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    computed: {
        filter() {
            return {
                inProgress: this.todos.filter(t => ! t.completed),
                completed: this.todos.filter(t => t.completed)
            }
        }
    },

    created() {
        fetch('http://localhost:3000/todos')
            .then(response => response.json())
            .then(todos => {
                this.todos = todos
                
            });
    },

    methods: {
        add(name) {
            this.todos.push({
                title: name,
                completed: true,
                id: this.todos.length + 1,
                tag: 'Extra'
            });

            this.newTodo = '';
        }
    }
}