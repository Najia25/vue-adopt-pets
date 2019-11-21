export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  // FILTERING
  getAllCats: (state) => {
    // pets has both cats dogs
    console.log(state.pets)
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
