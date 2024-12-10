export default {
    template:  `
        <li> 
            <label class="p-2 flex justify-between item-center">
                {{ todo.title }} 
                
                <input type="checkbox" v-model="todo.completed" class="ml-4"> 
            </label>
            
        </li>
    `,

    props: {
        todo: Object
    }
}