import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

Vue.use(Vuex);
let store = new Vuex.Store({
    actions, mutations, getters, state
});

export default store;