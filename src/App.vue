<template>
  <CommandCenter @start-mission="startMission" />
  <MarsRover :position="position" :orientation="orientation" />
  <MissionMap :position="position" :orientation="orientation" />
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

    const startMission = (info) => {
      position.x = info.coordinates.x
      position.y = info.coordinates.y
      orientation.value = info.orientation
    }

    return {
      position,
      orientation,
      startMission,
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
