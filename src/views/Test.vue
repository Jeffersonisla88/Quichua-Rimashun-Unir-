<!-- src/views/Test.vue -->
<template>
  <div class="tests-manager">
    <h1 class="main-title">Zona de Tests Quichua</h1>

    <!-- Modal para mensajes -->
    <ModalMessage
      :isVisible="showModal"
      :title="modalTitle"
      :message="modalMessage"
      @close="closeModal"
    />

    <!-- Test 1: Completa la Frase -->
    <div v-if="!test1Completed">
      <TestCompletaFrase @test-completed="handleTest1Completion" />
    </div>

    <!-- Mensaje de desbloqueo del Nivel 2 -->
    <div v-if="test1Completed && !test2Started" class="unlock-message">
      <p>¡Felicidades! Has completado el Nivel 1 con una puntuación de {{ test1Score }} / {{ test1TotalQuestions }}.</p>
      <p>🎉 ¡Nivel 2 (Números y Conversaciones) desbloqueado! 🎉</p>
      <button class="start-next-test-button" @click="startTest2">Comenzar Nivel 2</button>
    </div>

    <!-- Test 2: Números y Conversaciones -->
    <div v-if="test2Started">
      <TestNumerosConversacion @test-completed="handleTest2Completion" />
    </div>

    <!-- Mensaje final de ambos tests -->
    <div v-if="test1Completed && test2Completed" class="final-message">
      <p>¡Has completado ambos tests de Quichua!</p>
      <p>Tu puntuación en el Nivel 1 fue: {{ test1Score }} / {{ test1TotalQuestions }}</p>
      <p>Tu puntuación en el Nivel 2 fue: {{ test2Score }} / {{ test2TotalQuestions }}</p>
      <button class="restart-all-button" @click="resetAllTests">Reiniciar Todos los Tests</button>
    </div>
  </div>
</template>

<script>
import TestCompletaFrase from '@/components/TestCompletaFrase.vue';
import TestNumerosConversacion from '@/components/TestNumerosConversacion.vue';
import ModalMessage from '@/components/ModalMessage.vue';

export default {
  components: {
    TestCompletaFrase,
    TestNumerosConversacion,
    ModalMessage
  },
  data() {
    return {
      test1Completed: false,
      test1Score: 0,
      test1TotalQuestions: 4, // El número de preguntas en TestCompletaFrase.vue

      test2Started: false,
      test2Completed: false,
      test2Score: 0,
      test2TotalQuestions: 10, // El número de preguntas en TestNumerosConversacion.vue

      showModal: false,
      modalTitle: '',
      modalMessage: ''
    };
  },
  methods: {
    handleTest1Completion(score) {
      this.test1Score = score;
      this.test1Completed = true;
      this.showModalMessage(
        '¡Nivel 1 Finalizado!',
        `Has completado el Nivel 1 con ${score} de ${this.test1TotalQuestions} puntos. ¡Nivel 2 desbloqueado!`
      );
    },
    startTest2() {
      this.test2Started = true;
    },
    handleTest2Completion(score) {
      this.test2Score = score;
      this.test2Completed = true;
      this.showModalMessage(
        '¡Tests Completados!',
        `Has finalizado el Nivel 2 con ${score} de ${this.test2TotalQuestions} puntos. ¡Felicidades por tu progreso en Quichua!`
      );
    },
    resetAllTests() {
      this.test1Completed = false;
      this.test1Score = 0;
      this.test2Started = false;
      this.test2Completed = false;
      this.test2Score = 0;
      // Reiniciar los componentes hijos si fuera necesario, aunque al ocultarse se "destruyen"
      // y se reinician al volver a mostrarse.
    },
    showModalMessage(title, message) {
      this.modalTitle = title;
      this.modalMessage = message;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.tests-manager {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

.main-title {
  font-size: 36px;
  color: #42b983; /* Color vibrante */
  margin-bottom: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.unlock-message, .final-message {
  background-color: #e6ffe6; /* Fondo suave para mensajes */
  border: 2px solid #4CAF50;
  border-radius: 10px;
  padding: 25px;
  margin-top: 30px;
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.unlock-message p, .final-message p {
  margin-bottom: 15px;
}

.start-next-test-button, .restart-all-button {
  background-color: #007bff; /* Color azul para botones de acción */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.start-next-test-button:hover, .restart-all-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Estilos responsive */
@media (max-width: 768px) {
  .tests-manager {
    padding: 15px;
    margin: 10px auto;
  }
  .main-title {
    font-size: 28px;
    margin-bottom: 20px;
  }
  .unlock-message, .final-message {
    font-size: 16px;
    padding: 15px;
  }
  .start-next-test-button, .restart-all-button {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
