<template>
  <main font-sans text="center dark:gray-200">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>

<style scoped></style>
