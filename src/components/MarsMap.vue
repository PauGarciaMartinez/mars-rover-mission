<template>
  <div>
    <div v-for="square in squares" :key="square">
      <div>{{ square }}</div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount } from '@vue/runtime-core';

export default {
  props: {
    coordinates: {
      x: Number,
      y: Number
    }
  },
  setup(props) {
    const squares = new Array(20).fill(0);

    onBeforeMount(() => {
      for (let i = 0; i < squares.length; i++) {
        squares[i] = new Array(20).fill(0);
      }
    })

    return {
      squares
    }
  }
}
</script>

<style>

</style>