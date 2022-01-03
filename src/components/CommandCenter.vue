<template>
  <div class="step-one-wrapper" v-if="isStep1">
    <form class="form-container" @submit.prevent="startMission(), updateStep()">
      
      <!-- Input for initial Rover coordinates -->
      <div class="coordinates-container">
        <div>
          <label for="x-axis">X: </label>
          <input 
            v-model="position.x"
            type="number"
            min="1" 
            max="20"
            id="x-axis" 
            name="x-axis" 
            placeholder="0"
            required>
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
            placeholder="0"
            required>
        </div>
      </div>

      <!-- Input for Rover orientation -->
      <div class="directions-container" >
        <div v-for="direction in directions" :key="direction.command">
          <label :for="direction.command">{{ direction.face }}</label>
          <input 
            v-model="orientation" 
            type="radio"
            name="orientation"
            :id="direction.face"
            :value="direction.command"
            required>
        </div>
      </div>

      <button class="start-btn">Start mission</button>
    </form>
  </div>

  <div class="step-two-wrapper" v-if="isStep2">
    <div class="instructions-container" >
      <div 
        
        v-for="instruction in instructions" 
        :key="instruction.command">
        <button 
          class="instruction-btn"
          @click="sendInstructions(instruction.command)">
          {{ instruction.move }}
        </button>
      </div>
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
    instructionsCount: Number,
    missionStarted: Boolean
  },
  emits: [ 
    'update:position', 
    'update:orientation', 
    'update:instruction', 
    'update:instructionsCount',
    'update:missionStarted'
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
      { move: 'Left', command: "L" },
      { move: 'Forward', command: "F" },
      { move: 'Right', command: "R" }
    ]

    const startMission = () => {
      emit('update:position', props.position)
      emit('update:orientation', props.orientation)
      emit('update:missionStarted', true)
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

<style scoped>
.step-one-wrapper,
.step-two-wrapper {
  width: 100%;
  margin: 0 auto;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.coordinates-container,
.directions-container,
.instructions-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}
.coordinates-container input {
  font-size: 1rem;
  height: 1.5rem;
  width: 3rem;
  border: 0.1rem solid rgb(226, 140, 90);
  border-radius: 0.2rem;
}
.start-btn,
.instruction-btn {
  font-size: 0.9rem;
  width: 10rem;
  height: 2rem;
  margin: 1rem 0;
  background-color: rgb(226, 140, 90);
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(161, 175, 194);
  border: none;
  border-radius: 0.2rem;
  transition: 0.3s;
}
.start-btn:hover,
.instruction-btn:hover {
  color: white;
  background-color: rgb(226, 140, 90);
  cursor: pointer;
  transition: 0.3s;
}
</style>