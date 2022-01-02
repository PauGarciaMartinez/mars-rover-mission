<template>
  <CommandCenter 
    @start-mission="startMission" 
    @send-instructions="sendInstructions" />
  <MarsRover 
    :position="position" 
    :orientation="orientation" 
    :instruction="instruction" />
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
    const position = reactive({ x: 0, y: 0})
    const orientation = ref('')
    const instruction = ref('')

    const startMission = (info) => {
      position.x = info.coordinates.x
      position.y = info.coordinates.y
      orientation.value = info.orientation
    }
    const sendInstructions = (move) => instruction.value = move

    return {
      position,
      orientation,
      instruction,
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
