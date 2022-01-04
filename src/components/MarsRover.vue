<template>
  <transition name="fade">
    <div v-show="showAlert">
      <AlertMessage>
        <p><span>Rover: </span>{{ alertMessage }}</p>
      </AlertMessage>
    </div>
  </transition>
</template>

<script>
import { reactive, ref, watch } from '@vue/runtime-core'
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
    const showAlert = ref(false)
    const alertMessage = ref('')
    const messageTypes = reactive({
      mapLimit: "'Well, it seems Mars is flat after all...'",
      obstacleFound: "'Can you stop pushing me to obstacles??? Geez...'"
    })

    watch(() => props.instructionsCount, () => {
      showAlert.value = false;

      const { lastCommand } = executeCommand(props.position, props.instruction)
      const { isValid } = validateCommand(props.position)
      const { isClear } = checkObstacles(props.position, props.obstacles, props.instruction)

      if (!isValid || !isClear) {
        rectifyCommand(props.position, lastCommand)
        showAlert.value = true;
        isValid 
          ? alertMessage.value = messageTypes.obstacleFound 
          : alertMessage.value = messageTypes.mapLimit
      }

      if (isValid) emit('update:position', props.position)
    })

    return { showAlert, alertMessage }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>