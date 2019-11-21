import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
// create a getters object
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // GETTERS ARE COMPUTED PROPERTIES FOR VUEX STORES, MEANS TO PULL A STATE INTO A COMPONENT BUT THE COMPONENT WANTS TO MODIFY WHATEVER ITS RECIEVING , WON'T UPDATE STATE BUT WILL GET SOMOETHINGS OUT OF STATE.
  // DOESN'T MODIFY STATE,JUST MODIFIES HOW COMPONENT WATS TO SEE IT
  getters
})
