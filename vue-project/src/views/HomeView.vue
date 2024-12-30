<script setup>
// import flash from '../mixins/flash';

// export default {
//   mixins: [flash]
// }

import { ref } from 'vue';
import { useFlash } from '../composables/useFlash';
import TabbableTextarea from '@/components/TabbableTextarea.vue';
let { flash } = useFlash();
let message = ref('default value');



</script>

<template>
  <main>
    <button @click="flash('alert from home')">Click me</button>

    <br>
    <br>
    <br>

    <TabbableTextarea v-model="message" style="width: 600px; height: 300px;"></TabbableTextarea>
    
  </main>
</template>
