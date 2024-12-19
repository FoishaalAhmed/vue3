import todoList from "./todoList.js";
import todoCreate from "./todoCreate.js";

export default {
    components: {todoList, todoCreate},
    template: `
        <section class="flex gap-8">
            <todo-list :todos="filter.inProgress" title="In progress">
                <todo-create @add="add"></todo-create>
            </todo-list>
            <todo-list v-show="hideComplete" :todos="filter.completed" title="Completed" can-hide @hide="hideComplete = ! hideComplete"></todo-list>
        </section>
    `,

    data() {
        return {
            todos: [],
            newTodo: '',
            hideComplete: true
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