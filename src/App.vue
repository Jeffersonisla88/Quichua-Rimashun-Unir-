<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importa useRouter para acceder a las rutas

const isMenuOpen = ref(false);
const router = useRouter(); // Inicializa el router

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Nueva función para cerrar el menú
const closeMenu = () => {
  isMenuOpen.value = false;
};

</script>

<template>
  <div id="app">
    <header>
      <div class="header-content">
        <center><h1>Quichua Rimashun</h1></center>
        <button @click="toggleMenu" class="menu-button">☰ Menú</button>
      </div>
      <nav :class="{ 'open': isMenuOpen }">
        <!-- Añade @click="closeMenu" a cada router-link -->
        <router-link to="/" class="nav-item" @click="closeMenu">
          <img src="@/assets/home.jpeg" alt="Inicio">
          <span>Inicio</span>
        </router-link>
        <router-link to="/about" class="nav-item" @click="closeMenu">
          <img src="@/assets/temario.jpeg" alt="Temario">
          <span>Temario</span>
        </router-link>
        <router-link to="/Cuentos" class="nav-item" @click="closeMenu">
          <img src="@/assets/cuentos.jpeg" alt="Cuentos">
          <span>Cuentos</span>
        </router-link>
        <router-link to="/Test" class="nav-item" @click="closeMenu">
          <img src="@/assets/test.jpeg" alt="Test">
          <span>Test</span>
        </router-link>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  text-align: center;
  color: #2c3e50;
}

/* Header con degradado */
header {
  background: #7c8d55;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10; /* Asegura que esté al frente */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 2em; /* Ajuste de tamaño para que no sea ni muy grande ni muy pequeño */
  font-weight: bold;
}

/* Botón del menú */
.menu-button {
  background-color: #42b983;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 12px;
  cursor: pointer;
}

.menu-button:hover {
  background-color: #65522d;
  transform: scale(1.1);
}

/* Estilo del menú */
nav {
  background-color: #beb49e;
  padding: 20px;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 100%; /* Ahora el menú aparece justo debajo del header */
  right: 0;
  width: 200px;
  z-index: 100; /* Para asegurarse de que se muestre encima de otros elementos */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

nav.open {
  display: flex;
}

nav .nav-item {
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: #42b983;
  padding: 10px;
  margin: 10px 0;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
}

nav .nav-item img {
  width: 24px; /* Ajusta el tamaño del ícono */
  height: 24px;
  margin-right: 10px; /* Espaciado entre el ícono y el texto */
}

nav .nav-item span {
  font-weight: bold;
}

nav a:hover {
  background-color: #e6c27b;
  transform: scale(1.1);
}

nav a.router-link-exact-active {
  background-color: #f67280;
}

/* Responsive: Menú en pantallas más grandes */
@media (min-width: 601px) {
  nav {
    display: flex;
    flex-direction: row;
    position: static;
    margin-left: auto;
    width: auto;
    box-shadow: none;
  }

  .menu-button {
    display: none;
  }

  nav .nav-item {
    margin: 0 10px; /* Espaciado horizontal entre los ítems del menú */
  }
}
</style>
