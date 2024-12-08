import todoList from "./todoList.js";

export default {
    components: {todoList},
    template: `
        <todo-list :todos="filter.inProgress" title="In progress"></todo-list>
        <todo-list :todos="filter.completed" title="Completed"></todo-list>
    `,

    data() {
        return {
            todos: [
                { title: 'To Do 1', completed: false, id: 1 },
                { title: 'To Do 2', completed: false, id: 2 },
                { title: 'To Do 3', completed: false, id: 3 },
                { title: 'To Do 4', completed: false, id: 4 },
            ]
        }
    },
    computed: {
        filter() {
            return {
                inProgress: this.todos.filter(t => ! t.completed),
                completed: this.todos.filter(t => t.completed)
            }
        }
    }
}