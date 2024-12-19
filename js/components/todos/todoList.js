import todo from './todo.js';
import todoTags from './todoTags.js';

export default {
    components: {todo, todoTags},
    template: `
        <section v-show="todos.length" class="w-70">
            <div class="flex justify-between items-start">
                <h3  class="font-bold mb-2">
                    {{ title }}
                    <span>({{ todos.length }})</span>
                </h3>
                <button v-show="canHide" @click="$emit('hide')">&times;</button>
            </div>

            <todo-tags
                v-model:currentTag="currentTag"
                :initial-tags="todos.map(t => t.tag)"
            ></todo-tags>
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <todo
                v-for="todo in filteredTodos" 
                :key="todo.id"
                :todo="todo"
                ></todo>
            </ul>

            <slot></slot>
        </section>
    `,

    props: {
        todos: Object,
        title: String,
        canHide: {type: Boolean, default:false}
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