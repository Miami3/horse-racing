import { defineStore } from 'pinia'
import { shuffle } from 'lodash'
import { Horse } from '@/utils/Horse'

interface HorseState {
  horseList: Horse[]
  rounds: Round[]
  currentRound: number
  selected: boolean
}

interface Round {
  distance: number
  results: Horse[]
  participants: Horse[]
  isFinished: boolean
  isStarted: boolean
}

const roundsDistance = [1200, 1400, 1600, 1800, 2000, 2200]

export const useHorseStore = defineStore('horses', {
  state: (): HorseState => ({
    horseList: [],
    selected: false,
    currentRound: 0,
    rounds: roundsDistance.map((distance: number) => ({
      distance,
      participants: [],
      results: [],
      isStarted: false,
      isFinished: false,
    })),
  }),
  getters: {
    getHorseList: (state) => state.horseList,
    getCurrentRound: (state) => state.currentRound + 1,
    getCurrentRoundInfo: (state) => {
      const round = state.rounds[state.currentRound]
      if (!round) return {}
      return round
    },
    getCurrentRoundIsStarted: (state) => {
      const round = state.rounds[state.currentRound]
      if (!round) return false
      return round.isStarted
    },
    getCurrentParticipants: (state) => {
      const round = state.rounds[state.currentRound]
      if (!round) return []
      return round.participants
    },
    getCurrentDistance: (state) => {
      const round = state.rounds[state.currentRound]
      if (!round) return 0
      return round.distance
    },
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
    startRound() {
      const round = this.rounds[this.currentRound]
      if (this.currentRound > this.rounds.length - 1 || !round) return
      round.isStarted = true
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.roundResults()
          resolve()
        }, 5000)
      })
    },
    roundResults() {
      const round = this.rounds[this.currentRound]
      if (this.currentRound > this.rounds.length - 1 || !round) return
      round.results = [...round.participants].sort(
        (a, b) => b.getCondition() - a.getCondition(),
      )
      round.isFinished = true
      this.currentRound++
    }
  },
})
