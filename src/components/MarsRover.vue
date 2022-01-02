<template>
  <div>{{ position }} - {{ orientation }} - {{ instruction }}</div>
</template>

<script>
import executeCommand from '@/composables/executeCommand.js'

export default {
  props: [ 'position', 'orientation', 'instruction' ],
  setup(props, { emit }) {

    const { newPosition } = executeCommand(props.position, props.instruction)

    return {}
  }
}
</script>

<style>

</style>