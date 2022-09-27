<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl mt-10 inline-flex gap-2>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
    <a icon-btn i-carbon-logo-github />
  </nav>
</template>
