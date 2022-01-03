<template>
  <div>
    <div class="orientation-container">
      <div class="orientation">{{ orientation }}</div>
      <span class="arrow-up"></span>
    </div>
    <canvas ref="map" width="500" height="500"></canvas>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, watch, ref } from '@vue/runtime-core';
import createMatrix from '@/composables/createMatrix.js'

export default {
  props: {
    position: Object,
    orientation: String
  },
  setup(props) {
    const { matrix } = createMatrix(20, 20)

    const map = ref(null)

    const drawMap = () => {
      const boardSide = window.innerHeight * 0.55;
      const squareSide = boardSide / 20;
  
      map.value.width = boardSide;
      map.value.height = boardSide;

      const ctx = map.value.getContext('2d')

      const cols = 20;
      const rows = 20;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * squareSide;
          let y = j * squareSide;
          const cellColor = 'rgb(226, 140, 90)';

          if (matrix[i][j] === 1) cellColor = 'rgb(128, 51, 16)'
          if (matrix[i][j] === 2) cellColor = 'rgb(230, 210, 165)'
          
          ctx.beginPath();
          ctx.lineWidth = "1";
          ctx.strokeStyle = "white";
          ctx.fillStyle = cellColor;
          ctx.fillRect(x, y, squareSide, squareSide);
          ctx.rect(x, y, squareSide, squareSide);
          ctx.stroke();
        }
      }
    }

    const createObstacles = (min, max) => {
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * (max - min)) + min
        const y = Math.floor(Math.random() * (max - min)) + min
        if (matrix[x][y] !== 1) matrix[x][y] = 2
      }
    }

    // Lifecycle hooks
    onBeforeMount(() => {
      matrix[props.position.x][props.position.y] = 1
      createObstacles(1, 19)
    })
    onMounted(() => {
      drawMap()
    })

    // Trigger when Rover position changes
    watch(() => props.position, (curr, prev) => {
      matrix[prev.x][prev.y] = 0
      matrix[curr.x][curr.y] = 1
      drawMap()
    })

    return { matrix, map }
  }
}
</script>

<style>
.orientation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem;
}
.orientation {
  font-size: 1.2rem;
  font-weight: 600;
}
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid rgb(128, 51, 16);
}
.map-container {
  width: 50%;
  margin: 0 auto;
}
.map-grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>