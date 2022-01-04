<template>

</template>

<script>
import { watch } from '@vue/runtime-core'
import validateCommand from '@/composables/validateCommand.js'
import executeCommand from '@/composables/executeCommand.js'

export default {
  props: {
    position: Object,
    instruction: String,
    instructionsCount: Number,
    obstacles: Array
  },
  emits: [ 'update:position' ],
  setup(props, { emit }) {

    watch(() => props.instructionsCount, () => {
      const { newPosition } = executeCommand(props.position, props.instruction)
      const { isValid } = validateCommand(newPosition, props.obstacles)
      if (isValid) emit('update:position', newPosition)
    })

    return {}
  }
}
</script>

<style>

</style>