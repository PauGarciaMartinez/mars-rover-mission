<template>
  <header>
    <h1 class="title">Mars Rover Mission</h1>
    <p class="subtitle">An epic journey on the red planet</p>
    <div class="planet"></div>
  </header>
  <section id="command-center">
    <CommandCenter 
      v-model:position="position" 
      v-model:orientation="orientation" 
      v-model:instruction="instruction" 
      v-model:instructions-count="instructionsCount" />
  </section>
  <section id="mars-rover">
    <MarsRover 
      v-model:position="position" 
      :instruction="instruction"
      :instructions-count="instructionsCount"/>
  </section>
  <section id="mission-map">
    <MissionMap 
      :position="position" 
      :orientation="orientation" />
  </section>
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
header {
  margin-bottom: 4rem;
}
.planet {
  position: absolute;
  top: 0.8rem;
  left: 27.2rem;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border: none;
  border-radius: 50%;
  background-color: rgb(226, 140, 90);
  z-index: -1;
}
</style>
