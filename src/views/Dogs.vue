<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
      <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/dogs/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    // state: {
    //    user: 'Tom',
    //    age: 25
    //  }

    // mapState(['user', 'age'])

    // returns:
    // {
    //   user () {
    //     return this.$store.state.user
    //   },
    //   age () {
    //     return this.$store.state.age
    //   }
    // }
    // [1] CALL AN ACTION FROM A COMPONENT, ACTIONS ARE ASYNCHRONOUS [2] AFTER THAT CALL A MUTATION, MUTATION UPDATES STATE [3] WHATEVER COMPONENTS ARE LISTENING TO STATE BY MAPPING THE STATES TO A COMPUTED FUNCTION, THOSE COMPONENTS WILL UPDATE IN THE DOM WHERE ITS NEEDED.
    // ...mapState(['user', 'age'])

    // returns:
    // {
    // computed:{
    //   user () {
    //     return this.$store.state.user
    //   },
    //   age () {
    //     return this.$store.state.age
    //   }
    // }
    ...mapState([
      'dogs'
    ])
  }
}
</script>
