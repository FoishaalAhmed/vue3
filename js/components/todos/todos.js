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
            todos: [
                { title: 'To Do 1', completed: false, id: 1 },
                { title: 'To Do 2', completed: false, id: 2 },
                { title: 'To Do 3', completed: false, id: 3 },
                { title: 'To Do 4', completed: false, id: 4 },
            ],

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
    methods: {
        add(name) {
            this.todos.push({
                title: name,
                completed: true,
                id: this.todos.length + 1
            });

            this.newTodo = '';
        }
    }
}