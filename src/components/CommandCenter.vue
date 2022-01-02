<template>
  <div v-if="isStep1">
    <!-- Input for initial Rover coordinates -->
    <div>
      <label for="x-axis">X: </label>
      <input 
        v-model="coordinates.x"
        type="number" 
        min="0"
        max="20"
        id="x-axis" 
        name="x-axis" 
        placeholder="Enter initial coordinates">
      <label for="y-axis">Y: </label>
      <input
        v-model="coordinates.y" 
        type="number" 
        min="0"
        max="20"
        id="y-axis" 
        name="y-axis" 
        placeholder="Enter initital coordinates">
    </div>

    <!-- Input for Rover orientation -->
    <div v-for="direction in directions" :key="direction.command">
      <button @click="updateOrientation(direction.command)">
        {{ direction.face }}
      </button>
    </div>

    <button @click="startMission(), updateStep()">Start mission</button>
  </div>
  

</template>

<script>
import { reactive, ref } from '@vue/reactivity'

export default {
  emits: [ 'startMission' ],
  setup(props, { emit }) {
    const isStep1 = ref(true)
    const isStep2 = ref(false)
    const coordinates = reactive({x: 0, y: 0})
    const orientation = ref('')

    const directions = [
      { face: 'North', command: 'N' },
      { face: 'East', command: 'E' },
      { face: 'West', command: 'W' }
    ]

    const updateOrientation = (direction) => orientation.value = direction
    const updateStep = () => { 
      isStep1.value = false
      isStep2.value = true 
    }

    const startMission = () => {
      emit('startMission', { 
        coordinates: coordinates, 
        orientation: orientation.value 
      })
    }
    return { 
      isStep1,
      isStep2,
      coordinates, 
      orientation, 
      directions, 
      updateOrientation,
      updateStep,
      startMission 
    }
  }
}
</script>

<style>

</style>