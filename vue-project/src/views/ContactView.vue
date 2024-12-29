<script setup>
// import flash from '../mixins/flash';

// export default {
//   mixins: [flash]
// }

import { useFlash } from '../composables/useFlash';
let { flash } = useFlash();
</script>

<template>
  <div>
    <button @click="flash('alert from contact')">Click me</button>
  </div>
</template>

<style>
</style>
