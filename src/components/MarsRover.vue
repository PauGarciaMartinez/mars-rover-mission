<template>

</template>

<script>
import { watch } from '@vue/runtime-core'
import executeCommand from '@/composables/executeCommand.js'
import validateCommand from '@/composables/validateCommand.js'
import rectifyCommand from '@/composables/rectifyCommand.js'

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
      const { lastCommand } = executeCommand(props.position, props.instruction)

      const { isValid } = validateCommand(props.position, props.obstacles)

      if (!isValid) rectifyCommand(props.position, lastCommand)
      if (isValid) emit('update:position', props.position)
    })

    return {}
  }
}
</script>

<style>

</style>