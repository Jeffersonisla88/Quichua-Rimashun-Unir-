<template>
  <div class="container">
    <div class="header">
      <div class="title">Historias de los Pueblos Indígenas del Ecuador</div>
      <div class="time">{{ currentTime }}</div>
    </div>
    <div class="cultures-grid">
      <div class="culture-card" v-for="(culture, index) in cultures" :key="index">
        <div class="culture-header">
          <h2 class="culture-title">{{ culture.title }}</h2>
        </div>
        <div class="culture-image-container">
          <img :src="culture.image" alt="Culture Image" class="culture-image" />
        </div>
        <div class="culture-footer">
          <button class="read-more-button" @click="openDetailsModal(culture)">Leer más</button>
        </div>
      </div>
    </div>
    <div v-if="isDetailsModalVisible" class="details-modal">
      <div class="details-modal-content">
        <button @click="closeDetailsModal" class="close-button">&times;</button>
        <div class="modal-header">
          <h3 class="modal-title">{{ selectedCulture.title }}</h3>
        </div>
        <div class="modal-body">
          <div class="modal-image-wrapper">
            <img :src="selectedCulture.image" alt="Culture Image" class="modal-image" />
          </div>
          <div class="modal-details">
            <div class="detail-item">
              <strong class="detail-label">Ubicación:</strong>
              <span class="detail-value">{{ selectedCulture.location }}</span>
            </div>
            <div class="detail-item">
              <strong class="detail-label">Historia:</strong>
              <p class="detail-value">{{ selectedCulture.history }}</p>
            </div>
            <div class="detail-item">
              <strong class="detail-label">Cultura:</strong>
              <p class="detail-value">{{ selectedCulture.culture }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      cultures: [
        {
          title: "Los Quichua",
          location: "Región andina y amazónica",
          history: "Descendientes de los antiguos Incas, conservan muchas tradiciones y prácticas culturales que se han transmitido de generación en generación. Su organización social se basa en comunidades con sus propios líderes y formas de gobierno ancestrales.",
          culture: "Cultivan principalmente papa, maíz y quinua, adaptándose a las diversas altitudes de su territorio. Celebran festividades importantes como el Inti Raymi, la fiesta del sol, que marca el inicio de un nuevo ciclo agrícola.",
          image: require('@/assets/Quichua.jpg'),
        },
        {
          title: "Los Shuar",
          location: "Región amazónica, Morona Santiago",
          history: "Históricamente conocidos por su resistencia a la colonización y sus feroces guerreros. Han mantenido muchas de sus tradiciones ancestrales a pesar del contacto con el mundo exterior.",
          culture: "Su cultura se centra en la selva, con prácticas como la caza con cerbatanas y la preparación de la chicha de yuca. Los rituales chamánicos juegan un papel importante en su vida espiritual y social.",
          image: require('@/assets/Shuar.jpg'),
        },
        {
          title: "Los Sápara",
          location: "Región amazónica, Sucumbíos",
          history: "Este pueblo enfrenta serios desafíos debido a la explotación de recursos naturales en su territorio, lo que amenaza su forma de vida y su cultura ancestral. Son reconocidos por su profundo conocimiento de la selva.",
          culture: "Preservan activamente su lengua única y sus ricas tradiciones culturales, incluyendo un complejo sistema de medicina tradicional basada en plantas medicinales de la Amazonía.",
          image: require('@/assets/Shuar.jpg'),
        },
        {
          title: "Los Huaorani",
          location: "Región amazónica, Orellana",
          history: "Han mantenido un alto grado de independencia y han estado en conflicto con empresas petroleras que buscan explotar los recursos en su territorio ancestral. Su conocimiento de la selva es vasto y detallado.",
          culture: "Son expertos cazadores utilizando lanzas y cerbatanas, y su vida está intrínsecamente ligada al ecosistema amazónico. Su estructura social se basa en clanes familiares extendidos.",
          image: require('@/assets/Huaorani.jpg'),
        },
        {
          title: "Los Cañari",
          location: "Región andina, Cañar",
          history: "Resistieron la expansión del Imperio Inca y han logrado mantener muchas de sus tradiciones preincaicas. Su historia está marcada por la lucha por la autonomía y la preservación cultural.",
          culture: "Su economía se basa en la agricultura, y son conocidos por la Fiesta del Yamor, una celebración de la cosecha del maíz. También son hábiles artesanos, especialmente en la elaboración de cerámica y tejidos.",
          image: require('@/assets/Cañari.jpeg'),
        },
        {
          title: "Los Achuar",
          location: "Región amazónica, Morona Santiago y Perú",
          history: "Han tenido un contacto limitado con el mundo exterior hasta tiempos recientes, lo que les ha permitido preservar muchas de sus costumbres y tradiciones ancestrales. Su territorio se extiende a ambos lados de la frontera con Perú.",
          culture: "Su vida se centra en la autosuficiencia a través de la agricultura de subsistencia y la caza. Los rituales relacionados con la naturaleza y los espíritus de la selva son fundamentales en su cosmovisión.",
          image: require('@/assets/Achuar.jpg'),
        },
        {
          title: "Los Tsáchila (Colorados)",
          location: "Región costera, Santo Domingo de los Tsáchilas",
          history: "A pesar de la creciente influencia externa, han logrado mantener su identidad cultural única, caracterizada por sus tradiciones ancestrales y su distintiva apariencia física.",
          culture: "Son conocidos por su medicina tradicional, el uso de la pintura corporal con achiote y su vestimenta tradicional. Su estructura social se basa en linajes y autoridades tradicionales.",
          image: require('@/assets/Tsachila.jpg'),
        },
      ],
      isDetailsModalVisible: false,
      selectedCulture: null,
    };
  },
  methods: {
    openDetailsModal(culture) {
      this.selectedCulture = culture;
      this.isDetailsModalVisible = true;
    },
    closeDetailsModal() {
      this.isDetailsModalVisible = false;
      this.selectedCulture = null;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #343a40;
}

.time {
  font-size: 18px;
  color: #6c757d;
}

.cultures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.culture-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
}

.culture-card:hover {
  transform: translateY(-5px);
}

.culture-header {
  background-color: #e9ecef;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.culture-title {
  font-size: 18px;
  font-weight: 600;
  color: #495057;
  margin: 0;
}

.culture-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 150px;
  flex-grow: 1;
}

.culture-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.culture-footer {
  padding: 15px;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
}

.read-more-button {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #007bff; /* Blue */
  color: #fff;
}

.read-more-button:hover {
  background-color: #0056b3;
}

/* Styles for the improved modal */
.details-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* Slightly darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's on top */
}

.details-modal-content {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* More prominent shadow */
  width: 90%;
  max-width: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.details-modal .close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #555;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.details-modal .close-button:hover {
  opacity: 1;
}

.modal-header {
  padding: 25px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.modal-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0;
}

.modal-body {
  padding: 25px;
  display: flex;
  gap: 20px;
}

.modal-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.modal-image {
  max-width: 100%;
  height: auto;
  object-fit: contain; /* Or 'cover' if you prefer */
  border-radius: 10px;
}

.modal-details {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.detail-item {
  line-height: 1.6;
}

.detail-label {
  font-weight: bold;
  color: #333;
  margin-right: 5px;
}

.detail-value {
  color: #555;
}

.detail-value p {
  margin-top: 5px;
}
</style>