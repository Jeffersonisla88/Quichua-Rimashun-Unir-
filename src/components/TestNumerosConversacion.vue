<!-- src/components/TestNumerosConversacion.vue -->
<template>
  <div class="completa-frase">
    <h2>🔢 Conversaciones y Números en Quichua</h2>
    <div class="frase">
      <p>{{ fraseConEspacio }}</p>
    </div>

    <div class="opciones">
      <button
        v-for="(opcion, index) in opciones"
        :key="index"
        @click="verificarRespuesta(opcion)"
        :disabled="resultado !== null"
      >
        {{ opcion }}
      </button>
    </div>

    <transition name="fade">
      <p v-if="resultado !== null" class="resultado">{{ resultado }}</p>
    </transition>

    <div class="puntuacion">
      <strong>Puntuación:</strong> {{ puntuacion }} / {{ preguntas.length }}
    </div>

    <button
      class="finalizar"
      v-if="testCompletado && resultado === null"
      @click="finalizarTest"
    >
      🎉 Finalizar Nivel 2
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preguntas: [
        {
          frase: "shuk = [espacio]",
          palabraCorrecta: "1",
          opciones: ["2", "1", "3", "4"]
        },
        {
          frase: "¿Ima shuti [espacio]?",
          palabraCorrecta: "angi",
          opciones: ["kan", "angi", "pay", "ñuka"]
        },
        {
          frase: "ishkay = [espacio]",
          palabraCorrecta: "2",
          opciones: ["1", "3", "2", "4"]
        },
        {
          frase: "Ñuka shuti [espacio]...",
          palabraCorrecta: "...",
          opciones: ["angi", "kan", "...", "pay"]
        },
        {
          frase: "chunka = [espacio]",
          palabraCorrecta: "10",
          opciones: ["5", "10", "15", "20"]
        },
        {
          frase: "¿Maymanda [espacio]?",
          palabraCorrecta: "angi",
          opciones: ["angi", "kan", "pay", "kay"]
        },
        {
          frase: "patsak = [espacio]",
          palabraCorrecta: "100",
          opciones: ["10", "50", "100", "1000"]
        },
        {
          frase: "Ñuka Ecuadormanda [espacio]",
          palabraCorrecta: "animi",
          opciones: ["kan", "angi", "animi", "pay"]
        },
        {
          frase: "waranka = [espacio]",
          palabraCorrecta: "1000",
          opciones: ["100", "500", "1000", "10000"]
        },
        {
          frase: "¿[espacio]?",
          palabraCorrecta: "Kanga",
          opciones: ["Kan", "Pay", "Kanga", "Ñuka"]
        }
      ],
      preguntaActual: 0,
      resultado: null,
      puntuacion: 0,
      testCompletado: false
    };
  },
  computed: {
    fraseConEspacio() {
      if (this.preguntas[this.preguntaActual]) {
        return this.preguntas[this.preguntaActual].frase.replace("[espacio]", "_____");
      }
      return '';
    },
    opciones() {
      if (this.preguntas[this.preguntaActual]) {
        return this.preguntas[this.preguntaActual].opciones;
      }
      return [];
    }
  },
  methods: {
    verificarRespuesta(opcion) {
      if (this.resultado !== null) return;

      const pregunta = this.preguntas[this.preguntaActual];
      if (opcion === pregunta.palabraCorrecta) {
        this.resultado = "✅ ¡Correcto!";
        this.puntuacion++;
      } else {
        this.resultado = `❌ Incorrecto. La respuesta correcta era: ${pregunta.palabraCorrecta}`;
      }
      setTimeout(() => {
        this.siguientePregunta();
      }, 1500);
    },
    siguientePregunta() {
      this.resultado = null;
      if (this.preguntaActual < this.preguntas.length - 1) {
        this.preguntaActual++;
      } else {
        this.testCompletado = true;
      }
    },
    finalizarTest() {
      this.$emit('test-completed', this.puntuacion);
    },
    reiniciarTest() {
      this.preguntaActual = 0;
      this.puntuacion = 0;
      this.testCompletado = false;
      this.resultado = null;
    }
  }
};
</script>

<style scoped>
/* Los estilos son idénticos a TestCompletaFrase.vue para mantener consistencia */
.completa-frase {
  max-width: 600px;
  margin: auto;
  background: linear-gradient(to right, #d7d7d7, #9baecc);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 20px;
}

h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
}

.frase p {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #34495e;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.opciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.opciones button {
  background-color: #74b9ff;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 22px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.opciones button:hover {
  background-color: #0984e3;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.opciones button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #a0a0a0;
  transform: none;
  box-shadow: none;
}

.resultado {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #2d3436;
  animation: pop 0.5s ease;
  min-height: 30px;
}

.puntuacion {
  margin-top: 25px;
  font-size: 18px;
  color: #2c3e50;
  font-weight: bold;
}

.finalizar {
  margin-top: 30px;
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.finalizar:hover {
  background-color: #019875;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Animaciones */
@keyframes pop {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .completa-frase {
    padding: 20px;
    margin: 10px;
  }
  h2 {
    font-size: 22px;
  }
  .frase p {
    font-size: 18px;
  }
  .opciones button {
    font-size: 14px;
    padding: 10px 14px;
  }
  .finalizar {
    font-size: 16px;
    padding: 10px 20px;
  }
  .resultado {
    font-size: 16px;
  }
  .puntuacion {
    font-size: 16px;
  }
}
</style>
