import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADD_SECOND,
  OPEN_CARD,
  CLOSE_CARD,
  HIDE_CARDS,
  CLEAR_STATE,
} from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: 0,
    openedCards: 0,
    numbersOpenedCards: [],
    hiddenCards: [],
  },
  getters: {
    timer(state) {
      return state.timer
    },
    normalTime(state) {
      const { timer } = state
      if (timer > 60) {
        const minutes = Math.floor(timer / 60)
        const seconds = timer - minutes * 60
        return `
          ${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}
        `
      }
      return `00:${timer < 10 ? `0${timer}` : timer}`
    },
    openedCards(state) {
      return state.openedCards
    },
    numbersOpenedCards(state) {
      return state.numbersOpenedCards
    },
    hiddenCards(state) {
      return state.hiddenCards
    },
  },
  mutations: {
    addSecond(state) {
      state.timer += 1
    },
    openCard(state, cardNumber) {
      state.numbersOpenedCards.push(cardNumber)
      state.openedCards += 1
    },
    closeCard(state, cardNumber) {
      state.numbersOpenedCards = state.numbersOpenedCards.filter((el) => el !== cardNumber)
      state.openedCards = state.numbersOpenedCards.length
    },
    hideCards(state) {
      state.hiddenCards.push(state.numbersOpenedCards[0])
    },
    clearState(state) {
      state.timer = 0
      state.openedCards = 0
      state.numbersOpenedCards = []
      state.hiddenCards = []
    },
  },
  actions: {
    [ADD_SECOND]({ commit }) {
      commit('addSecond')
    },
    [OPEN_CARD]({ commit }, cardNumber) {
      commit('openCard', cardNumber)
    },
    [CLOSE_CARD]({ commit }, cardNumber) {
      commit('closeCard', cardNumber)
    },
    [HIDE_CARDS]({ commit, state }) {
      commit('hideCards')
      commit('closeCard', state.numbersOpenedCards[0])
    },
    [CLEAR_STATE]({ commit }) {
      commit('clearState')
    },
  },
  modules: {
  },
});
