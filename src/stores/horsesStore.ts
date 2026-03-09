import { defineStore } from 'pinia'
import { shuffle } from 'lodash'
import { Horse } from '@/utils/Horse.ts'

interface HorseState {
  horseList: Horse[]
  rounds: Round[]
  selected: boolean
}

interface Round {
  distance: number
  results: Horse[]
  participants: Horse[]
  isFinished: boolean
}

const roundsDistance = [1200, 1400, 1600, 1800, 2000, 2200]

export const useHorseStore = defineStore('horses', {
  state: (): HorseState => ({
    horseList: [],
    selected: false,
    rounds: roundsDistance.map((distance: number) => ({
      distance,
      participants: [],
      results: [],
      isFinished: false,
    })),
  }),
  getters: {
    getHorseList: (state) => shuffle(state.horseList).slice(0, state.horseList.length),
  },
  actions: {
    selectHorses(num: number = 20) {
      if (this.selected) return
      for (let i = 0; i < num; i++) {
        this.horseList.push(new Horse())
      }
      this.rounds.forEach((round) => {
        round.participants = shuffle(this.horseList).slice(0, 10)
      })
      this.selected = true
    },
    startRound(roundIndex: number) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.roundResults(roundIndex)
          resolve()
        }, 5000)
      })
    },
    roundResults(roundIndex: number) {
      if (roundIndex < 0 || roundIndex >= this.rounds.length || !this.rounds[roundIndex]) return
      this.rounds[roundIndex].results = shuffle(this.rounds[roundIndex].participants).sort((a, b) => (b.getCondition() - a.getCondition()))
      this.rounds[roundIndex].isFinished = true
    },
    resetHorses() {
      this.horseList = []
      this.selected = false
      this.rounds = roundsDistance.map((distance: number) => ({
        distance,
        participants: [],
        results: [],
        isFinished: false,
      }))
    },
  },
})
