<template>
  <div>
    <div i-icomoon-free-rocket icon-preview />
    <p>
      <a
        rel="noreference"
        href="https://github.com/initialqing/vue-template"
        target="_blank"
        hover:text-teal-700
      >
        Vue-Template
      </a>
    </p>
    <p h-3 mt-5>
      <em hover:text-violet-700 dark:text-violet-400 op75
        >Opinionated Vite Starter Template</em
      >
    </p>
    <div py-4 />
    <input
      id="input"
      v-model="name"
      placeholder="Please type your name"
      type="text"
      text="center"
      bg="transparent"
      w="250px"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    />

    <div>
      <button mt-6 text-sm icon-bottom-btn @click="go">Go</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const router = useRouter()
const go = () => {
  if (name.value) {
    router.push(`/hello/${name.value}`)
    // router.push({ name: 'Name', params: { name: name.value } })
  }
}
</script>
