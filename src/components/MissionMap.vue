<template>
  <div>
    <div class="orientation-container">
      <div class="orientation">{{ orientation }}</div>
      <span class="arrow-up"></span>
    </div>

    <div class="map-container">
      <div class="map-grid" v-for="axis in matrix" :key="axis">
        {{ axis }}
      </div>
    </div>

    <div>
      <canvas ref="map" width="500" height="500"></canvas>
    </div>

    <div>Map: [ x: {{ position.x }} ][ y: {{ position.y }} ]</div>
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
    
    


    onBeforeMount(() => {
      // Generate obstacles function
      matrix[props.position.x][props.position.y] = 1
    })

    onMounted(() => {
      const ctx = map.getContext('2d')
      const drawMap = () => {
        const boardSide = window.innerHeight * 0.6;
        const squareSide = boardSide / 10;
    
        map.width = boardSide;
        map.heigh = boardSide;
        /* map.style.marginTop = (window.innerHeight * 0.1) + 'px' */

        

        const cols = 20;
        const rows = 20;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = i * squareSide;
            let y = j * squareSide;
            cellColor = '#8C1818';

            /* if (map[j][i] === 'X') cellColor = '#4C0D0D';
        
            if (map[j][i] === 'O') cellColor = '#7F7466';

            if (map[j][i] === 'C') cellColor = '#C2B1A4'; */

            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "black";
            ctx.fillStyle = cellColor;
            ctx.fillRect(x, y, squareSide, squareSide);
            ctx.rect(x, y, squareSide, squareSide);
            ctx.stroke();
          }
        }
      }
      drawMap()
    })

    watch(() => props.position, (curr, prev) => {
      matrix[prev.x][prev.y] = 0
      matrix[curr.x][curr.y] = 1
    })

    /* function generateObstacles() {
    for (let i = 0; i < 5; i++) {
    const randomNum1 = Math.floor(Math.random() * 8) + 1;
    const randomNum2 = Math.floor(Math.random() * 8) + 1;
    map[randomNum1][randomNum2] = 'X';
    }
    }

    generateObstacles(); */

    return {
      matrix,
      map
    }
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
  border-bottom: 15px solid rgb(226, 140, 90);
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