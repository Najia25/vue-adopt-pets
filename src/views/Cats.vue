<template>
  <div>
    <b-table striped hover :items="cats"></b-table>
  </div>
</template>

<script>
// @ is a shortcut for src directory, used instead of ../../
import cats from '@/data/cats'

export default {
  data() {
    return {
      // cats:cats array that we are importing..since both have same name,shortcut would be just cats
      cats
    }
  }
}
</script>
