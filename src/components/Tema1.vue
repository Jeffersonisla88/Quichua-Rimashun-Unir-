<template>
  <div class="greetings-container">
    <h2>Saludos en Quichua</h2>

    <div class="scrollable-section">
      <ul>
        <li><strong>¡Ali tutamanda!</strong> – ¡Muy Buenas noches! (justo en la noche !)</li>
        <li><strong>¡Ali pundza!</strong> – ¡Buenos días!</li>
        <li><strong>¡Ali chishi!</strong> – ¡Buenas tardes!</li>
        <li><strong>¡Ali tuta!</strong> – ¡Buenas noches!</li>
        <li><strong>¿Kawsangichu?</strong> – Hola, ¿cómo estás? (¿Estás vivo/a?)</li>
        <li><strong>Kawsanimi</strong> – Hola, estoy bien (Estoy vivo/a)</li>
        <li><strong>¿Kawsangichichu?</strong> – Hola, ¿cómo están ustedes? (¿Están vivos/as ustedes?)</li>
        <li><strong>Kawsanchimi</strong> – Hola, estamos bien (Estamos vivos/as)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greetings',
};
</script>

<style scoped>
.greetings-container {
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  background-color: #dddddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.greetings-container h2 {
  color: rgb(40, 127, 184);
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
  .greetings-container {
    padding: 15px;
  }

  .scrollable-section li {
    font-size: 14px;
  }
}
</style>
