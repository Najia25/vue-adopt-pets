export default {
  appendPet: (state, { species, pet }) => {
    console.log(state[species])
    state[species].push(pet)
  }
}
