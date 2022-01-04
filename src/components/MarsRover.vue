<template>
  <div v-show="showAlert">
    <AlertMessage />
  </div>
</template>

<script>
import { computed, watch } from '@vue/runtime-core'
import AlertMessage from '@/components/AlertMessage.vue'
import executeCommand from '@/composables/executeCommand.js'
import validateCommand from '@/composables/validateCommand.js'
import rectifyCommand from '@/composables/rectifyCommand.js'
import checkObstacles from '@/composables/checkObstacles.js'

export default {
  props: {
    position: Object,
    instruction: String,
    instructionsCount: Number,
    obstacles: Array
  },
  emits: [ 'update:position' ],
  components: { AlertMessage },
  setup(props, { emit }) {
    const showAlert = computed(() => true)

    watch(() => props.instructionsCount, () => {
      const { lastCommand } = executeCommand(props.position, props.instruction)
      const { isValid } = validateCommand(props.position)
      const { isClear } = checkObstacles(props.position, props.obstacles, props.instruction)

      if (!isValid || !isClear) rectifyCommand(props.position, lastCommand)
      if (isValid) emit('update:position', props.position)
    })

    return { showAlert }
  }
}
</script>

<style>

</style>