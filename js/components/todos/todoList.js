import todo from './todo.js';
import todoTags from './todoTags.js';

export default {
    components: {todo, todoTags},
    template: `
        <section v-show="todos.length">
            <h3  class="font-bold mb-2">
                {{ title }}
                <span>({{ todos.length }})</span>
            </h3>
            <todo-tags
                @change="currentTag = $event"
                :initial-tags="todos.map(t => t.tag)"
                :current-tag="currentTag"
            ></todo-tags>
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <todo
                v-for="todo in filteredTodos" 
                :key="todo.id"
                :todo="todo"
                ></todo>
            </ul>
        </section>
    `,

    props: {
        todos: Object,
        title: String
    },

    data() {
        return {
            currentTag: 'All'
        }
    },

    computed:{
        filteredTodos() {
            if (this.currentTag == 'All') {
                return this.todos;
            }
            return this.todos.filter(t => t.tag === this.currentTag)
        }
    }
}