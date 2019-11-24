<template>
  <!-- since we are using v-bind: Vue is going to look for a variable
  so pets="cats" here cats refer to the cats array in computed-->
  <!-- species="cats" cats is just static string -->
  <div>
    <PetTable
      species="cats"
      v-bind:pets = "cats"
     />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
