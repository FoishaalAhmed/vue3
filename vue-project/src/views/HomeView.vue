<script setup>
// import flash from '../mixins/flash';

// export default {
//   mixins: [flash]
// }

import { useFlash } from '../composables/useFlash';
let { flash } = useFlash();

</script>

<template>
  <main>
    <button @click="flash('alert from home')">Click me</button>
  </main>
</template>
