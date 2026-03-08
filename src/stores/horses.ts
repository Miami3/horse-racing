import { defineStore } from 'pinia'
import { shuffle } from 'lodash'
import { Horse } from '@/utils/Horse.ts'

interface HorseState {
  horseList: Horse[]
  selected: boolean
}

export const useHorseStore = defineStore('horses', {
  state: (): HorseState => ({
    horseList: [],
    selected: false,
  }),
  getters: {
    getHorseList: (state) => shuffle(state.horseList).slice(0, state.horseList.length)
  },
  actions: {
    selectHorses(num: number) {
      if (this.selected) return;
      for (let i = 0; i < num; i++) {
        this.horseList.push(new Horse())
      }
      this.selected = true;
    },
  },
})
