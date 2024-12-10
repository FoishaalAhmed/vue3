import todo from './todo.js';

export default {
    components: {todo},
    template: `
        <h3 v-show="todos.length" class="font-bold mb-2">{{ title }}</h3>

        <ul class="border border-gray-600 divide-y divide-gray-600">
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