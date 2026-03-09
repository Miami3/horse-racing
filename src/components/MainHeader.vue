<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { useHorseStore } from '@/stores/horsesStore.ts'
import { ref } from 'vue'

const horseStore = useHorseStore()
const running = ref(false)

const startRound = async () => {
  running.value = true
  await horseStore.startRound()
  running.value = false
}
</script>

<template>
  <header
    class="header flex justify-between items-center p-3 bg-linear-to-r from-blue-500 to-purple-500"
  >
    <h1 class="text-2xl font-bold text-white m-0">Horse Racing</h1>
    <div class="header__controls flex">
      <Button class="mr-2" @click="horseStore.selectHorses()" v-if="!horseStore.selected">
        Generate Program
      </Button>
      <Button v-else @click="horseStore.$reset()" class="mr-2">Reset</Button>
      <Button v-if="horseStore.selected" class="mr-2" @click="startRound" :disabled="running">
        <Spinner v-if="running" />
        Start Round {{ horseStore.getCurrentRound }}
      </Button>
    </div>
  </header>
</template>

<style scoped></style>
