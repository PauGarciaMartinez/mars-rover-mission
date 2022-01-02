<template>
  
</template>

<script>
import {ref, reactive} from 'vue';

export default {
  setup() {

    const position = reactive({x: 0, y: 0})

    const moveForward = () => position.x++
    const moveBack = () => position.x--
    const moveRigth = () => position.y++
    const moveLeft = () => position.y--

    return {
      position,
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