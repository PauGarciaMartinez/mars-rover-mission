<template>
  <CommandCenter 
    @start-mission="startMission" 
    @send-instructions="sendInstructions" />
  <MarsRover 
    v-model:position="position" 
    :orientation="orientation" 
    :instruction="instruction"
    :instructionsCount="instructionsCount"/>
  <MissionMap 
    :position="position" 
    :orientation="orientation" />
</template>

<script>
import { ref, reactive } from 'vue';
import CommandCenter from '@/components/CommandCenter';
import MarsRover from '@/components/MarsRover';
import MissionMap from '@/components/MissionMap';

export default {
  name: 'App',
  components: {
    CommandCenter,
    MarsRover,
    MissionMap
  },
  setup() {
    const position = reactive({})
    const orientation = ref('')
    const instruction = ref('')
    const instructionsCount = ref(0)

    const startMission = (info) => {
      position.x = info.coordinates.x
      position.y = info.coordinates.y
      orientation.value = info.orientation
    }
    const sendInstructions = (command) => {
      instruction.value = command
      instructionsCount.value++
    }

    return {
      position,
      orientation,
      instruction,
      instructionsCount,
      startMission,
      sendInstructions
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
