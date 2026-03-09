<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useHorseStore } from '@/stores/horsesStore.ts'

const horseStore = useHorseStore()
const rounds = horseStore.rounds
</script>

<template>
  <div class="horse__dashboard bg-amber-200 grid grid-cols-2 gap-1">
    <div class="program">
      <h3 class="text-lg font-bold text-center">Program</h3>
      <div class="rounds__program" v-for="(round, index) in rounds" :key="round.distance">
        <h4 class="text-md font-bold text-center bg-blue-200">
          LAP #{{ index + 1 }}: {{ round.distance }}m
        </h4>
        <Table class="bg-amber-50 mb-2">
          <TableHeader>
            <TableRow>
              <TableHead class="font-bold">Position</TableHead>
              <TableHead class="text-center">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(horse, index) in round.participants" :key="horse.getId()">
              <TableCell class="text-center">{{ index + 1 }}</TableCell>
              <TableCell class="overflow-hidden text-ellipsis">{{ horse.getName() }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    <div class="program">
      <h3 class="text-lg font-bold text-center bg-green-200">Results</h3>
      <div class="results__program" v-for="(round, index) in rounds" :key="round.distance">
        <h4 class="text-md font-bold text-center bg-blue-200">
          LAP #{{ index + 1 }}: {{ round.distance }}m
        </h4>
        <Table class="bg-amber-50 mb-2">
          <TableHeader>
            <TableRow>
              <TableHead class="font-bold">Position</TableHead>
              <TableHead class="text-center">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(horse, index) in round.results" :key="horse.getId()">
              <TableCell class="text-center">{{ index + 1 }}</TableCell>
              <TableCell class="overflow-hidden text-ellipsis">{{ horse.getName() }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
