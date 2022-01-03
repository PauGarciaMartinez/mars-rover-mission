<template>
  <div>
    <div class="orientation-container">
      <div class="orientation">{{ orientation }}</div>
      <span class="arrow-up"></span>
    </div>

    <div v-for="square in squares" :key="square">
      <div>{{ square }}</div>
    </div>
    <div>Map: [ x: {{ position.x }} ][ y: {{ position.y }} ]</div>
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
.orientation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem;
}
.orientation {
  font-size: 1.2rem;
  font-weight: 600;
}
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid rgb(226, 140, 90);
}
</style>