<template>
  <div class="completa-frase">
    <h2>🧠 Completa la Frase</h2>
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

    <!-- El botón de finalizar se muestra si el test está completado y no hay un resultado pendiente -->
    <button
      class="finalizar"
      v-if="testCompletado && resultado === null"
      @click="finalizarTest"
    >
      🎉 Finalizar Nivel 1
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preguntas: [
        {
          frase: "El cielo es muy [espacio] durante el día.",
          palabraCorrecta: "azul",
          opciones: ["rojo", "verde", "azul", "amarillo"]
        },
        {
          frase: "¡Ali tutamanda! / ¡Buenos [espacio]!",
          palabraCorrecta: "noches",
          opciones: ["noches", "días", "tardes", "mañanas"]
        },
        {
          frase: "Yo = [espacio]",
          palabraCorrecta: "Ñuka",
          opciones: ["Kan", "Pay", "Ñuka", "Ñukanchi"]
        },
        {
          frase: "Lunes en Quichua es [espacio]",
          palabraCorrecta: "Awaki",
          opciones: ["Awaki", "Panchi", "Wacha", "Chillay"]
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
      return ''; // Retorna vacío si no hay pregunta actual (ej. al finalizar)
    },
    opciones() {
      if (this.preguntas[this.preguntaActual]) {
        return this.preguntas[this.preguntaActual].opciones;
      }
      return []; // Retorna un array vacío
    }
  },
  methods: {
    verificarRespuesta(opcion) {
      if (this.resultado !== null) return; // Evita múltiples clics

      const pregunta = this.preguntas[this.preguntaActual];
      if (opcion === pregunta.palabraCorrecta) {
        this.resultado = "✅ ¡Correcto!";
        this.puntuacion++;
      } else {
        this.resultado = `❌ Incorrecto. La respuesta correcta era: ${pregunta.palabraCorrecta}`;
      }
      // Espera un poco antes de pasar a la siguiente pregunta
      setTimeout(() => {
        this.siguientePregunta();
      }, 1500); // Aumentado el tiempo para que el usuario pueda leer el resultado
    },
    siguientePregunta() {
      this.resultado = null; // Limpia el resultado antes de la siguiente pregunta
      if (this.preguntaActual < this.preguntas.length - 1) {
        this.preguntaActual++;
      } else {
        this.testCompletado = true;
      }
    },
    finalizarTest() {
      // Emite un evento al componente padre indicando que el test ha terminado
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
.completa-frase {
  max-width: 600px;
  margin: auto;
  background: linear-gradient(to right, #d7d7d7, #9baecc);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 20px; /* Añadido para separación */
}

h2 {
  font-size: 28px; /* Aumentado tamaño de título */
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
}

.frase p {
  font-size: 22px; /* Aumentado tamaño de frase */
  font-weight: bold;
  margin-bottom: 25px; /* Más espacio */
  color: #34495e;
  min-height: 50px; /* Asegura un espacio mínimo para la frase */
  display: flex;
  align-items: center;
  justify-content: center;
}

.opciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px; /* Más espacio entre botones */
  margin-bottom: 20px;
}

.opciones button {
  background-color: #74b9ff;
  color: white;
  border: none;
  border-radius: 12px; /* Bordes más redondeados */
  padding: 14px 22px; /* Más padding */
  font-size: 18px; /* Tamaño de fuente más grande */
  cursor: pointer;
  transition: all 0.3s ease; /* Transición para todas las propiedades */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para botones */
}

.opciones button:hover {
  background-color: #0984e3;
  transform: translateY(-3px); /* Efecto de elevación */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.opciones button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #a0a0a0; /* Color diferente cuando está deshabilitado */
  transform: none;
  box-shadow: none;
}

.resultado {
  margin-top: 20px;
  font-size: 20px; /* Tamaño de fuente más grande */
  font-weight: bold;
  color: #2d3436;
  animation: pop 0.5s ease;
  min-height: 30px; /* Asegura espacio para el mensaje de resultado */
}

.puntuacion {
  margin-top: 25px;
  font-size: 18px; /* Tamaño de fuente más grande */
  color: #2c3e50;
  font-weight: bold;
}

.finalizar {
  margin-top: 30px; /* Más espacio */
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 10px; /* Bordes más redondeados */
  padding: 15px 30px; /* Más padding */
  font-size: 20px; /* Tamaño de fuente más grande */
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
