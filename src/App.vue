<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import HorseList from '@/components/HorseList.vue'
import HorseRacing from '@/components/HorseRacing.vue'
import HorseDashboard from '@/components/HorseDashboard.vue'
</script>

<template>
  <MainHeader />
  <main class="px-3 py-5 grid grid-cols-7 gap-4">
    <HorseList class="col-span-2" />
    <HorseRacing class="col-span-3" />
    <HorseDashboard class="col-span-2" />
  </main>
  <footer>footer</footer>
</template>

<style scoped></style>
