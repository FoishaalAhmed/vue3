export default {
    template: `
        <button
            :type="type"
            style="background:blue; color:white; padding:10px; " 
            :disabled="processing">
            <slot/>
        </button>
    `,
    props: {
        type: {
            'type': String,
            'default': 'button'
        },
        processing: {
            'type': Boolean,
            'default': false
        }
    }
}