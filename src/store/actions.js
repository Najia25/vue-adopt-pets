export default {
  // addPet:(context,pet) => {
  //   context.commit('appendPet', pet)
  // }
  // pet is the custom parameter that we are going to be passing into the function.
  // addPet:({ commit }, { pet, species}) => {
  //   commit('appendPet',pet)
  // }

  addPet: ({ commit }, payload) => {
    console.log(payload)
    commit('appendPet', payload)
  }
}
