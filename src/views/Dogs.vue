<template>
  <div>
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'
export default {
	data() {
		return {
			dogs
		}
	}
}
</script>
