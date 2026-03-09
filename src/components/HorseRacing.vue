<script setup lang="ts">
import HorseIcon from '@/components/HorseIcon.vue'
import { useHorseStore } from '@/stores/horsesStore.ts'

const horseStore = useHorseStore()
const getAnimationDuration = (condition: number) => {
  return `${90 * (1 / condition) + 2}s`
}
</script>

<template>
  <div class="horse__racing px-2">
    <h2 class="text-lg font-bold mb-2 text-center">Horse Racing</h2>
    <div v-if="horseStore.getCurrentParticipants.length > 0" class="race">
      <div
        class="mb-2 border-dashed border border-black flex h-12 relative"
        v-for="(horse, index) in horseStore.getCurrentParticipants"
        :key="horse.id + Date.now()"
      >
        <div class="horse__number w-10 h-12 flex items-center justify-center bg-green-200">
          {{ index + 1 }}
        </div>
        <div class="track relative flex items-center flex-1">
          <HorseIcon
            class="horse"
            :color="horse.getColor()"
            :style="{
              animationDuration: `${getAnimationDuration(horse.getCondition())}`,
              animationPlayState: horseStore.getCurrentRoundIsStarted ? 'running' : 'paused',
            }"
          />
          <div class="finish__line"></div>
        </div>
      </div>
      <p class="text-red-500 text-right text-xl">Finish</p>
    </div>

    <div v-if="horseStore.selected && horseStore.getCurrentRound < 7" class="round__info">
      <p class="text-lg font-bold text-center">
        Lap #{{ horseStore.getCurrentRound }} - {{ horseStore.getCurrentDistance }}m
      </p>
    </div>
  </div>
</template>

<style scoped>
.horse {
  position: absolute;
  left: 0;
  animation: run linear forwards;
  animation-iteration-count: 1;
}
.finish__line {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  width: 2px;
  background-color: red;
}
@keyframes run {
  from {
    left: 0;
    transform: translateX(0);
  }
  to {
    left: 100%;
    transform: translateX(-115%);
  }
}
</style>
