<template>
  <div v-if="isStep1">
    <form @submit.prevent="startMission(), updateStep()">
      <!-- Input for initial Rover coordinates -->
      <div>
        <div>
          <label for="x-axis">X: </label>
          <input 
            v-model="coordinates.x"
            type="number"
            min="1" 
            max="20"
            id="x-axis" 
            name="x-axis" 
            placeholder="Enter initial coordinates">
        </div>
        <div>
          <label for="y-axis">Y: </label>
          <input
            v-model="coordinates.y" 
            type="number" 
            min="1" 
            max="20"
            id="y-axis" 
            name="y-axis" 
            placeholder="Enter initital coordinates">
        </div>
      </div>

      <!-- Input for Rover orientation -->
      <div v-for="direction in directions" :key="direction.command">
        <label :for="direction.command">{{ direction.face }}</label>
        <input 
          v-model="orientation" 
          type="radio"
          name="orientation"
          :id="direction.face"
          :value="direction.command">
      </div>

      <button>Start mission</button>
    </form>
  </div>

  <div v-if="isStep2">
    <div v-for="instruction in instructions" :key="instruction.command">
        <button>{{ instruction.move }}</button>
    </div>
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
      { face: 'South', command: 'S' },
      { face: 'West', command: 'W' }
    ]
    const instructions = [
      { move: 'Forward', command: "F" },
      { move: 'Left', command: "L" },
      { move: 'Right', command: "R" }
    ]

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
      instructions, 
      updateStep,
      startMission 
    }
  }
}
</script>

<style>

</style>