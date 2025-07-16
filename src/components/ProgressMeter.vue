<template>
    <div class="progress-container">
      <div class="progress-bar" :style="{ width: progress + '%' }">
        <span class="progress-text">{{ progress }}%</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        default: 0
      }
    },
    methods: {
      // Método para actualizar el progreso
      updateProgress(value) {
        if (value >= 0 && value <= 100) {
          this.$emit('update:progress', value);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-container {
    margin-bottom: 20px;
    background-color: #e0e0e0;
    border-radius: 15px;
    position: relative;
    height: 30px;
    width: 100%;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #76c7c0;
    border-radius: 15px 0 0 15px;
    transition: width 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
  }
  
  .progress-text {
    font-size: 16px;
  }
  </style>
  