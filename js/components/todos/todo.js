export default {
    template:  `
        <li> 
            <label>
                {{ todo.title }} 
                
                <input type="checkbox" v-model="todo.completed"> 
            </label>
            
        </li>
    `,

    props: {
        todo: Object
    }
}