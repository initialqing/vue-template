<template>
  <div>
    <div
      i-carbon-pedestrian
      text-8xl
      mt-5
      inline-block
      op75
      hover:text-teal-300
    />
    <p hover:text-teal-300>Hello {{ props.name }}</p>
    <div>
      <button class="mt-6 text-sm icon-bottom-btn" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<style lang="scss" scoped></style>
