<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useHorseStore } from '@/stores/horses.ts'
const horseStore = useHorseStore()

const generateProgram = () => {
  horseStore.selectHorses(20);
}
</script>

<template>
  <header
    class="header flex justify-between items-center p-3 bg-linear-to-r from-blue-500 to-purple-500"
  >
    <h1 class="text-2xl font-bold text-white m-0">Horse Racing</h1>
    <div class="header__controls">
      <Button class="mr-2" @click="generateProgram" :disabled="horseStore.selected">
        Generate Program
      </Button>
      <Button>Start | Pause</Button>
    </div>
  </header>
</template>

<style scoped></style>
