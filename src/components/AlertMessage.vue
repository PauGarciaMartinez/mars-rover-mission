<template>
  <div class="alert-container">
    <p class="alert-message">
      <span>Rover:</span>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.alert-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.alert-message {
  color: white;
  background-color: #2c3e50;
  padding: 0.6rem 2rem;
  border-radius: 0.2rem;
}
.alert-message span {
  font-weight: 600;
}
</style>