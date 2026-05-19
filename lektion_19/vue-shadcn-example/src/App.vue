<script setup>
import 'vue-sonner/style.css'
import { toast, Toaster } from 'vue-sonner'
import Button from './components/ui/button/Button.vue';

function showToast() {
  console.log("foooooo")
  toast("This is a toast", {
    description: "Bla bla bla bla bla"
  })
}

</script>

<template>
  <h1 class="text-red-500 font-bold text-4xl">You did it!</h1>
  <p class="nice-p">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <Button variant="outline" @click="showToast">Click Me</Button>

  <Toaster />
</template>

<style scoped></style>
