<template>
  <CommandCenter />
  <MarsRover />
</template>

<script>
import CommandCenter from '@/components/CommandCenter';
import MarsRover from '@/components/MarsRover';

export default {
  name: 'App',
  components: {
    CommandCenter,
    MarsRover
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
