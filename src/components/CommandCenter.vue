<template>
  <div v-if="isStep1">
    <form @submit.prevent="startMission(), updateStep()">
      <!-- Input for initial Rover coordinates -->
      <div>
        <div>
          <label for="x-axis">X: </label>
          <input 
            v-model="position.x"
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
            v-model="position.y" 
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
        <button 
          @click="sendInstructions(instruction.command)">
          {{ instruction.move }}
        </button>
    </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  props: {
    position: Object,
    orientation: String,
    instruction: String,
    instructionsCount: Number
  },
  emits: [ 
    'update:position', 
    'update:orientation', 
    'update:instruction', 
    'update:instructionsCount', 
  ],
  setup(props, { emit }) {
    const isStep1 = ref(true)
    const isStep2 = ref(false)

    const directions = [
      { face: 'North', command: 'N' },
      { face: 'East', command: 'E' },
      { face: 'South', command: 'S' },
      { face: 'West', command: 'W' }
    ]
    const instructions = [
      { move: 'Forward', command: "F" },
      { move: 'Right', command: "R" },
      { move: 'Back', command: "B" },
      { move: 'Left', command: "L" }
    ]

    const startMission = () => {
      emit('update:position', props.position)
      emit('update:orientation', props.orientation)
    }
    const sendInstructions = (command) => {
      emit('update:instruction', command)
      emit('update:instructionsCount', props.instructionsCount += 1)
    }

    const updateStep = () => { 
      isStep1.value = false
      isStep2.value = true 
    }

    return { 
      isStep1,
      isStep2,
      directions,
      instructions,
      startMission,
      sendInstructions,
      updateStep
    }
  }
}
</script>

<style>

</style>