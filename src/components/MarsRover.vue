<template>
  <div>{{ position }} - {{ orientation }} - {{ instruction }}</div>
</template>

<script>
import {ref, reactive} from 'vue';

export default {
  props: [ 'position', 'orientation', 'instruction' ],
  setup() {

    const moveForward = () => position.x++
    const moveBack = () => position.x--
    const moveRigth = () => position.y++
    const moveLeft = () => position.y--

    return {
      moveForward,
      moveBack,
      moveRigth,
      moveLeft
    }
  }
}
</script>

<style>

</style>