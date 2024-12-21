import todoList from "./todoList.js";
import todoCreate from "./todoCreate.js";
import panel from "./panel.js";

export default {
    components: {todoList, todoCreate, panel},
    template: `
        <div class="grid gap-6">
            <section class="flex gap-8">
                <todo-list :todos="filter.inProgress" title="In progress" id="in-progress">
                    <todo-create @add="add"></todo-create>
                </todo-list>
                <todo-list
                    v-show="hideComplete" 
                    :todos="filter.completed" 
                    title="Completed" 
                    can-hide 
                    @hide="hideComplete = ! hideComplete"
                    theme="light"
                    id="complete"
                ></todo-list>
            </section>
            <panel>
                <template #default>
                    this is the default content
                </template>
            </panel>

            <panel>
                <template #heading>
                    this is heading
                </template>

                <template #default>
                    this is the default content
                </template>
            </panel>
            <panel theme="light">
                <template #heading>
                    this is heading content
                </template>

                <template #default>
                    this is the default content
                </template>

                <template #footer>
                    this is the footer content
                </template>
            </panel>
        </div>
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