<script setup>
import GitHub1 from './components/GitHub1.vue';
import GitHub2 from './components/GitHub2.vue';
import GitHub3 from './components/GitHub3.vue';
import GitHub4 from './components/GitHub4.vue';
</script>

<script>
export default {
  data() {
    return {
      selected: 1
    }
  }
}
</script>

<template>

  <div class="max-w-screen-md bg-slate-100 rounded mx-auto mt-4 flex flex-col gap-4">
    <input type="range" min="1" max="4" v-model="selected">
  </div>

  <div class="max-w-screen-md bg-slate-100 rounded mx-auto mt-4 flex flex-col gap-4">
    <GitHub1 v-if="selected == 1"/>
    <GitHub2 v-if="selected == 2"/>
    <GitHub3 v-if="selected == 3"/>
    <GitHub4 v-if="selected == 4"/>
  </div>

</template>
