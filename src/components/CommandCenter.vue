<template>
  
  <!-- Input for initial Rover coordinates -->
  <div>
    <label for="x-axis"></label>
    <input 
      v-model="coordinates.x"
      type="number" 
      id="x-axis" 
      name="x-axis" 
      placeholder="Enter initial coordinates">
    <label for="y-axis"></label>
    <input
      v-model="coordinates.y" 
      type="number" 
      id="y-axis" 
      name="y-axis" 
      placeholder="Enter initital coordinates">
  </div>

  <div>{{ coordinates.x }} - {{ coordinates.y }}</div>

  <!-- Input for Rover orientation -->
  <div v-for="direction in directions" :key="direction.command">
    <button @click="updateOrientation(direction.command)">{{ direction.face }}</button>
  </div>

  <div>{{ orientation }}</div>

  <button>Let's explore!</button>

</template>

<script>
import { reactive, ref } from '@vue/reactivity'

export default {
  setup() {
    const coordinates = reactive({x: 0, y: 0})
    const orientation = ref('')

    const directions = [
      { face: 'North', command: 'N' },
      { face: 'East', command: 'E' },
      { face: 'West', command: 'W' }
    ]

    const updateOrientation = (direction) => orientation.value = direction

    return { 
      coordinates, 
      orientation, 
      directions, 
      updateOrientation 
    }
  }
}
</script>

<style>

</style>