<template>
  <div class="pronouns-container">
    <h2>Pronombres en Quichua</h2>

    <div class="scrollable-section">
      <div class="section">
        <h3>Pronombres Personales</h3>
        <ul>
          <li><strong>Yo</strong> = Ñuka</li>
          <li><strong>Tú/Usted</strong> = Kan</li>
          <li><strong>Él/Ella</strong> = Pay</li>
          <li><strong>Nosotros</strong> = Ñukanchi</li>
          <li><strong>Ustedes/Vosotros</strong> = Kanguna</li>
          <li><strong>Ellos</strong> = Payguna</li>
        </ul>
      </div>

      <div class="section">
        <h3>Pronombres Posesivos</h3>
        <ul>
          <li><strong>Mama</strong> – Madre</li>
          <li><strong>Ñuka mama</strong> – Mi madre</li>
          <li><strong>Kanba mama</strong> – Tu madre</li>
          <li><strong>Payba mama</strong> – Su madre</li>
          <li><strong>Ñukanchi mama</strong> – Nuestra madre</li>
          <li><strong>Kanguna(wa) mama</strong> – Su madre (de ustedes)</li>
          <li><strong>Payguna(wa) mama</strong> – Su madre (de ellos)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pronouns',
};
</script>

<style scoped>
.pronouns-container {
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  background-color: #dddddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.scrollable-section {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.section {
  margin-bottom: 20px;
  text-align: left;
}

.section h3 {
  color: #2980b9;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  padding: 6px 0;
  font-size: 16px;
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
  .pronouns-container {
    padding: 15px;
  }

  ul li {
    font-size: 14px;
  }
}
</style>
