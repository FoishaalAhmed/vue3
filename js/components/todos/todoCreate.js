export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newTodo"  placeholder="Add new todos here..." class="p-2 flex-grow"/>
                <button class="p-2 border-l bg-white">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newTodo: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newTodo);
            this.newTodo = '';
        }
    }
}