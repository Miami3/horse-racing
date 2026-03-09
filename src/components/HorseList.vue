<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useHorseStore } from '@/stores/horsesStore.ts'

const horseStore = useHorseStore()
const { horseList } = horseStore
</script>

<template>
  <aside class="aside bg-cyan-200">
    <h2 class="text-lg font-bold text-center">Horse List</h2>
    <Table class="bg-amber-50">
      <TableHeader>
        <TableRow>
          <TableHead class="font-bold">Name</TableHead>
          <TableHead class="text-center">Condition</TableHead>
          <TableHead class="text-right">Color</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="horse in horseList" :key="horse.getId()">
          <TableCell>
            {{ horse.getName() }}
          </TableCell>
          <TableCell class="text-center">{{ horse.getCondition() }}</TableCell>
          <TableCell
            class="text-right text-white text-shadow-lg dark:text-shadow-none"
            :style="{ backgroundColor: horse.getColor() }"
          >
            {{ horse.getColor() }}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colspan="2"> Total </TableCell>
          <TableCell class="text-right"> {{ horseList.length }} </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </aside>
</template>

<style scoped></style>
