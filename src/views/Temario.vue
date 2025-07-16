<template>
  <div class="container">
    <div class="header">
      <div class="title">INICIO</div>
      <div class="time">{{ currentTime }}</div>
    </div>

    <progress-meter :progress="progress"></progress-meter>

    <div class="lessons">
      <div class="lesson" v-for="(lesson, index) in lessons" :key="index">
        <div class="lesson-title">{{ lesson.title }}</div>
        <div class="lesson-content">
          <img :src="lesson.image" alt="Lesson Image" />
          <div class="lesson-description">{{ lesson.description }}</div>
        </div>
        <div class="lesson-button">
          <button
            :class="lesson.locked ? 'locked' : 'unlocked'"
            @click="openLesson(lesson)"
            :disabled="lesson.locked"
          >
            {{ lesson.locked ? 'Bloqueado' : 'Acceso' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="isLessonModalVisible" class="lesson-modal">
      <div class="lesson-modal-content elegant-modal-content">
        <button @click="closeLesson" class="close-button">&times;</button>
        <h3>{{ selectedLesson.title }}</h3>
        <component :is="getLessonComponent(selectedLesson.component)" />
        <button @click="completeLesson" class="complete-button">Finalizar Revisión</button>
      </div>
    </div>

    <button
      v-if="progress === 100 && lessons.length > 0"
      @click="saveProgress"
      class="save-progress-button"
    >
      Guardar Progreso
    </button>
  </div>
</template>

<script>
import ProgressMeter from "@/components/ProgressMeter.vue";
import Tema1 from "@/components/Tema1.vue";
import Tema2 from "@/components/Tema2.vue";
import Tema3 from "@/components/Tema3.vue";
import Tema4 from "@/components/Tema4.vue";
import Tema5 from "@/components/Tema5.vue";

export default {
  components: {
    ProgressMeter,
    Tema1,
    Tema2,
    Tema3,
    Tema4,
    Tema5
  },
  data() {
    return {
      lessons: [
        { title: 'Lección 1',image: new URL('@/assets/Saludos.jpeg', import.meta.url).href, description: 'Saludos', locked: false, component: 'Tema1' },
        { title: 'Lección 2', image: new URL('@/assets/Conversasion.jpeg', import.meta.url).href, description: 'Respuestas a datos personales', locked: true, component: 'Tema2' },
        { title: 'Lección 3', image: new URL('@/assets/Numeros.jpeg', import.meta.url).href, description: 'Numeros', locked: true, component: 'Tema3' },
        { title: 'Lección 4', image: new URL('@/assets/Pronombres.jpeg', import.meta.url).href, description: 'Pronombres personales', locked: true, component: 'Tema4' },
        { title: 'Lección 5', image: new URL('@/assets/Calendario.jpeg', import.meta.url).href, description: 'Días y Meses del año', locked: true, component: 'Tema5' },
      ],
      isLessonModalVisible: false,
      selectedLesson: null,
      progress: 0,
      lessonsReviewed: 0,
      currentTime: this.getCurrentTime()
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    openLesson(lesson) {
      this.selectedLesson = lesson;
      this.isLessonModalVisible = true;
    },
    closeLesson() {
      this.isLessonModalVisible = false;
      this.selectedLesson = null;
    },
    completeLesson() {
      this.lessonsReviewed += 1;
      this.updateProgress();

      const currentIndex = this.lessons.indexOf(this.selectedLesson);
      if (currentIndex + 1 < this.lessons.length) {
        this.lessons[currentIndex + 1].locked = false;
      }

      this.closeLesson();
    },
    updateProgress() {
      const totalLessons = this.lessons.length;
      this.progress = Math.min(100, (this.lessonsReviewed / totalLessons) * 100);
    },
    getLessonComponent(componentName) {
      return componentName;
    },
    saveProgress() {
      // Aquí puedes agregar la lógica para guardar el progreso del usuario,
      // por ejemplo, enviando los datos a un servidor o almacenándolos localmente.
      alert('Progreso guardado!');
      console.log('Progreso guardado:', this.progress, 'Lecciones revisadas:', this.lessonsReviewed);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4; /* Light background */
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px; /* Increased margin */
  padding-bottom: 15px;
  border-bottom: 1px solid #eee; /* Subtle border */
}

.title {
  font-size: 28px; /* Larger title */
  font-weight: bold;
  color: #333; /* Darker text */
}

.time {
  font-size: 18px;
  color: #777;
}

/* Medidor de progreso */
.progress-container {
  margin-bottom: 30px; /* Increased margin */
  background-color: #e0e0e0;
  border-radius: 20px; /* More rounded */
  position: relative;
  height: 35px; /* Slightly taller */
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* Subtle shadow */
}

.progress-bar {
  height: 100%;
  background-color: #5cb85c; /* Green progress color */
  border-radius: 20px 0 0 20px;
  transition: width 0.4s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}

/* Estilo de las lecciones */
.lessons {
  display: grid; /* Use grid for a more structured layout */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
  gap: 25px; /* Increased gap */
}

.lesson {
  background-color: #fff;
  border-radius: 12px; /* More rounded */
  padding: 25px; /* Increased padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08); /* More prominent shadow */
  transition: transform 0.2s ease-in-out; /* Hover effect */
}

.lesson:hover {
  transform: translateY(-3px);
}

.lesson-title {
  font-size: 22px; /* Slightly larger */
  font-weight: 600; /* Semi-bold */
  color: #444;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.lesson-content {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
}

.lesson-content img {
  width: 120px; /* Slightly larger image */
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

.lesson-description {
  font-size: 16px;
  color: #555;
  line-height: 1.6; /* Improved readability */
}

.lesson-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.locked,
.unlocked {
  padding: 12px 25px; /* Increased padding */
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.locked {
  background-color: #f44336; /* Red color */
  color: #fff;
}

.locked:hover {
  background-color: #d32f2f;
}

.unlocked {
  background-color: #4caf50; /* Green color */
  color: #fff;
}

.unlocked:hover {
  background-color: #388e3c;
}

/* Modal flotante */
.lesson-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8); /* Slightly darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Ensure it's on top */
}

.lesson-modal-content {
  background-color: #fff;
  padding: 40px; /* Increased padding */
  border-radius: 15px; /* More rounded */
  text-align: center;
  width: 90%; /* Wider modal */
  max-width: 700px; /* Increased max width */
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* More prominent shadow */
}

.elegant-modal-content h3 {
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
}

.elegant-modal-content > * { /* Apply to all direct children for better spacing */
  margin-bottom: 20px;
}

.elegant-modal-content > *:last-child { /* Remove bottom margin from the last child */
  margin-bottom: 0;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #777;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.close-button:hover {
  opacity: 1;
}

.complete-button {
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #007bff; /* Blue color */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.complete-button:hover {
  background-color: #0056b3;
}

/* Botón de Guardar Progreso */
.save-progress-button {
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #28a745; /* Green save color */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.save-progress-button:hover {
  background-color: #1e7e34;
}
</style>