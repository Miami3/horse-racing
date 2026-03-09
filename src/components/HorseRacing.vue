<script setup lang="ts">
import HorseIcon from '@/components/HorseIcon.vue'
import { useHorseStore } from '@/stores/horsesStore.ts'

const horseStore = useHorseStore()
</script>

<template>
  <div class="horse__racing bg-red-100">
    <h2 class="text-lg font-bold mb-2">Horse Racing</h2>
    <HorseIcon />
  </div>
</template>

<style scoped></style>
