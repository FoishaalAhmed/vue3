import todo from './todo.js';

export default {
    components: {todo},
    template: `
        <h3 v-show="todos.length">{{ title }}</h3>

        <ul>
            <todo
            v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            ></todo>
        </ul>
    `,

    props: {
        todos: Object,
        title: String
    }
}