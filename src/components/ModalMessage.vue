<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-if="isVisible">
      <div class="modal-content">
        <h3 class="modal-title">{{ title }}</h3>
        <p class="modal-body">{{ message }}</p>
        <button class="modal-button" @click="close">Aceptar</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Mensaje'
    },
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 90%;
  transform: scale(1);
  transition: transform 0.3s ease-out;
}

.modal-title {
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: bold;
}

.modal-body {
  font-size: 18px;
  color: #34495e;
  margin-bottom: 25px;
  line-height: 1.5;
}

.modal-button {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.modal-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

/* Animaciones del modal */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active .modal-content, .modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease-out;
}
.modal-fade-enter .modal-content, .modal-fade-leave-to .modal-content {
  transform: scale(0.9);
}
</style>
