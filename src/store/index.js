import { createStore } from 'vuex'

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export const store = createStore({
  state () {
    return {
      count: 1,
      apples: null,
      pricePerApple: 1.5,
      movies: [],
      genres: [],
    }
  },
  getters,
  mutations,
  actions,
})