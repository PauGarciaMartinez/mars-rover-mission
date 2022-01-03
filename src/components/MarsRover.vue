<template>
  <div>Rover: [ x: {{ position.x }} ][ y: {{ position.y }} ] - {{ instruction }}</div>
  <div>To do: error message</div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import validateCommand from '@/composables/validateCommand.js'
import executeCommand from '@/composables/executeCommand.js'

export default {
  props: {
    position: Object,
    instruction: String,
    instructionsCount: Number
  },
  emits: [ 'update:position' ],
  setup(props, { emit }) {

    watch(() => props.instructionsCount, () => {
      const { newPosition } = executeCommand(props.position, props.instruction)
      const { isValid } = validateCommand(newPosition)
      if (isValid) emit('update:position', newPosition)
    })

    return {}
  }
}
</script>

<style>

</style>