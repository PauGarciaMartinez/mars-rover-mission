<template>
  <div>{{ position }} - {{ orientation }} - {{ instruction }}</div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import executeCommand from '@/composables/executeCommand.js'

export default {
  props: {
    position: {
      x: Number,
      y: Number
    },
    orientation: String,
    instruction: String,
    instructionsCount: Number
  },
  emit: [ 'update:position' ],
  setup(props, { emit }) {

    watch(() => props.instructionsCount, (a, b) => {
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