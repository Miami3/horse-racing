import { defineStore } from 'pinia'
import { shuffle } from 'lodash'
import { Horse } from '@/utils/Horse.ts'

interface HorseState {
  horseList: Horse[]
}

export const useHorseStore = defineStore('horses', {
  state: (): HorseState => ({
    horseList: [],
  }),
  getters: {
    firstLap: (state) => shuffle(state.horseList).slice(0, 10)
  },
  actions: {
    selectHorses(num: number) {
      for (let i = 0; i < num; i++) {
        this.horseList.push(new Horse())
      }
    },
  },
})
