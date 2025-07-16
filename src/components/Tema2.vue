<template>
  <div class="questions-container">
    <h2>Preguntas en Quichua</h2>

    <div class="scrollable-section">
      <ul>
        <li><strong>¿Ima shuti angi?</strong> – ¿Cuál es tu nombre?</li>
        <li><strong>Ñuka shuti ...</strong> – Mi nombre es …</li>
        <li><strong>¿Maymanda angi?</strong> – ¿De dónde eres?</li>
        <li><strong>Ñuka …manda animi</strong> – Soy de …</li>
        <li><strong>Ñuka Ecuadormanda animi</strong> – Soy de Ecuador</li>
        <li><strong>¿Kanga?</strong> – ¿Y tú/Ud.?</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questions',
};
</script>

<style scoped>
.questions-container {
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  background-color: #dddddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.questions-container h2 {
  color: #287fb8;
  margin-bottom: 15px;
}

.scrollable-section {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
  text-align: left;
}

.scrollable-section ul {
  list-style: none;
  padding-left: 0;
}

.scrollable-section li {
  padding: 6px 0;
  font-size: 16px;
  line-height: 1.6;
}

/* Scrollbar personalizado */
.scrollable-section::-webkit-scrollbar {
  width: 8px;
}

.scrollable-section::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 4px;
}

.scrollable-section::-webkit-scrollbar-thumb:hover {
  background-color: #888;
}

/* Responsive */
@media (max-width: 768px) {
  .questions-container {
    padding: 15px;
  }

  .scrollable-section li {
    font-size: 14px;
  }
}
</style>
