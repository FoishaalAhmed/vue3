import todo from './todo.js';

export default {
    components: {todo},
    template: `
        <section v-show="todos.length">
            <h3  class="font-bold mb-2">
                {{ title }}
                <span>({{ todos.length }})</span>
            </h3>

            <div class="flex gap-2">
                <button v-for="tag in tags" class="border rounded px-1 py-px text-xs text-center" @click="currentTag = tag">{{ tag }}</button>
            </div>

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
        },

        tags() {
            return ['All', ...new Set(this.todos.map(t => t.tag))];
        }
    }
}