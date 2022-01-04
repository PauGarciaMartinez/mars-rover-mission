<template>
  <header>
    <h1 class="title">Mars Rover Mission</h1>
    <p class="subtitle">An epic journey to the red planet</p>
    <div class="planet"></div>
  </header>
  <section id="command-center">
    <CommandCenter 
      v-model:position="position" 
      v-model:orientation="orientation" 
      v-model:instruction="instruction" 
      v-model:instructions-count="instructionsCount"
      v-model:mission-started="missionStarted" />
  </section>
  <div>{{ position }} - {{ instruction }} - {{ instructionsCount }}</div>
  <section id="mars-rover">
    <MarsRover 
      v-model:position="position" 
      :instruction="instruction"
      :instructions-count="instructionsCount"
      :obstacles="obstacles" />
  </section>
  <section id="mission-map" v-if="missionStarted">
    <MissionMap 
      v-model:obstacles="obstacles" 
      :position="position" 
      :orientation="orientation" />
  </section>
</template>

<script>
import { ref, reactive } from 'vue'
import CommandCenter from '@/components/CommandCenter'
import MarsRover from '@/components/MarsRover'
import MissionMap from '@/components/MissionMap'

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
    const obstacles = reactive([])

    const missionStarted = false

    return {
      position,
      orientation,
      instruction,
      instructionsCount,
      obstacles,
      missionStarted
    }
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
}
.title {
  font-size: 2rem;
}
.subtitle {
  font-size: 1rem;
  margin-top: -0.3rem;
}
.planet {
  position: absolute;
  transform: translate(-10.2rem, -1rem);
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: 50%;
  background-color: rgb(226, 140, 90);
  box-shadow: 0.3rem 0.3rem 0.5rem rgb(187, 152, 135);
  z-index: -1;
}
</style>
