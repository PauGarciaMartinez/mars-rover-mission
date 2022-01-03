<template>
  <CommandCenter 
    v-model:position="position" 
    v-model:orientation="orientation" 
    v-model:instruction="instruction" 
    v-model:instructions-count="instructionsCount" />
  <MarsRover 
    v-model:position="position" 
    :instruction="instruction"
    :instructions-count="instructionsCount"/>
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
    // Global state
    const position = reactive({})
    const orientation = ref('')
    const instruction = ref('')
    const instructionsCount = ref(0)

    return {
      position,
      orientation,
      instruction,
      instructionsCount,
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
