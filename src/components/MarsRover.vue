<template>
  <div>Rover: [ x: {{ position.x }} ][ y: {{ position.y }} ] - {{ instruction }}</div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import executeCommand from '@/composables/executeCommand.js'

export default {
  props: {
    position: Object,
    instruction: String,
    instructionsCount: Number
  },
  emits: [ 'update:position' ],
  setup(props, { emit }) {

    watch(() => props.instructionsCount, (value, old) => {
      // Conditional logic for obstacles goes here
      const { newPosition } = executeCommand(props.position, props.instruction)
      emit('update:position', newPosition)
    })

    return {}
  }
}
</script>

<style>

</style>