<template>
  <div class="home">
    <div class="overlay"></div>

    <div class="content">
      <div v-if="welcomeMessage" class="welcome-message">
        <h2>{{ welcomeMessage }}</h2>
        <p>¡Gracias por unirte! Disfruta de la experiencia.</p>
      </div>

      <div v-else>
        <h2 class="title">Bienvenido al mundo del Quichua</h2>
        <p class="subtitle">Aprende jugando con canciones, actividades y más.</p>
        <button @click="showLogin" class="cta-button">Comenzar</button>
      </div>
    </div>

    <div v-if="isLoginVisible" class="login-modal">
      <div class="login-content">
        <button @click="hideLogin" class="close-button">&times;</button>
        <h3>¡Hola!</h3>
        <p>Ingresa tu nombre para personalizar tu experiencia.</p>
        <input
          type="text"
          v-model="name"
          placeholder="Tu nombre"
          class="input-field"
        />
        <button @click="login" class="login-button">Iniciar sesión</button>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import backgroundImage from "@/assets/logo.png";

export default defineComponent({
  name: "Home",
  data() {
    return {
      backgroundImage,
      isLoginVisible: false,
      name: "",
      welcomeMessage: "",
    };
  },
  methods: {
    showLogin() {
      this.isLoginVisible = true;
    },
    hideLogin() {
      this.isLoginVisible = false;
    },
    login() {
      if (this.name.trim()) {
        localStorage.setItem("userName", this.name);
        this.isLoginVisible = false;
        this.welcomeMessage = `¡Bienvenido, ${this.name}! Nos alegra tenerte aquí.`;
      } else {
        alert("Por favor, ingresa tu nombre.");
      }
    },
  },
});
</script>

<style scoped>
.home {
  position: relative;
  background-image: url('@/assets/logo.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.6);
  z-index: 1;
}

.content {
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  color: white;
  max-width: 600px;
  width: 100%;
}

.title {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 25px;
  color: #f0f0f0;
}

.cta-button {
  background-color: #42b983;
  color: white;
  padding: 12px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #369c6d;
}

.welcome-message h2 {
  color: #ffffff;
}

.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-content {
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.input-field:focus {
  border-color: #42b983;
  outline: none;
}

.login-button {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #369c6d;
}
</style>
