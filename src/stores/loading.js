
import { defineStore } from 'pinia'

export const useloadingStore = defineStore('loadingStatus', {
  state: () => ({
    loadingStatus: false
  }),
  getters: {
    // doubleCounter: (state) => state.counter * 2,
    // doubleCounter() { return this.counter * 2 }
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },

    // decrement() {
    //   this.counter--;
    // },
  },
})
