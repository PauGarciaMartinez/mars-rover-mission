<template>
  <div>
    <div v-for="square in squares" :key="square">
      <div>{{ square }}</div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, watch } from '@vue/runtime-core';

export default {
  props: {
    position: Object,
    orientation: String
  },
  setup(props) {
    const squares = new Array(20).fill(0);

    onBeforeMount(() => {
      for (let i = 0; i < squares.length; i++) {
        squares[i] = new Array(20).fill(0);
      }
    })

    watch(() => props.position, (curr, prev) => {
      console.log(curr)
      squares[prev.x][prev.y] = 0
      squares[curr.x][curr.y] = 1
    })

    return {
      squares
    }
  }
}
</script>

<style>

</style>