export default {

    template: `
        <button
            type="button" 
            style="background:blue; color:white; padding:10px; " 
            :disabled="processing">
            <slot/>
        </button>
    `,
    data() {
        return {
            processing:false
        };
    }
}