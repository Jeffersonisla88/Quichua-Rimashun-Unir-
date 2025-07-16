<template>
  <div class="calendar-container">
    <div class="scrollable-table">
      <table class="calendar-table">
        <thead>
          <tr>
            <th>Quichua</th>
            <th>Español</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" class="section-title">Yupaykuna / Números</td>
          </tr>
          <tr v-for="(number, index) in numbers" :key="index">
            <td>{{ number.Quichua }}</td>
            <td>{{ number.spanish }}</td>
          </tr>
          <tr>
            <td colspan="2" class="section-title">Yupaykuna Hatun / Números Grandes</td>
          </tr>
          <tr v-for="(largeNumber, index) in largeNumbers" :key="index">
            <td>{{ largeNumber.Quichua }}</td>
            <td>{{ largeNumber.spanish }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        { Quichua: 'shuk', spanish: '1' },
        { Quichua: 'ishkay', spanish: '2' },
        { Quichua: 'kimsa', spanish: '3' },
        { Quichua: 'chusku', spanish: '4' },
        { Quichua: 'pichka', spanish: '5' },
        { Quichua: 'sukta', spanish: '6' },
        { Quichua: 'kanchis', spanish: '7' },
        { Quichua: 'pusak', spanish: '8' },
        { Quichua: 'iskun', spanish: '9' },
        { Quichua: 'chunka', spanish: '10' },
        { Quichua: 'chunka shuk', spanish: '11' },
        { Quichua: 'chunka ishkay', spanish: '12' },
        { Quichua: 'chunka kimsa', spanish: '13' },
        { Quichua: 'chunka chusku', spanish: '14' },
        { Quichua: 'chunka pichka', spanish: '15' },
        { Quichua: 'chunka sukta', spanish: '16' },
        { Quichua: 'chunka kanchis', spanish: '17' },
        { Quichua: 'chunka pusak', spanish: '18' },
        { Quichua: 'chunka iskun', spanish: '19' },
        { Quichua: 'ishkay chunka', spanish: '20' },
        { Quichua: 'kimsa chunka', spanish: '30' },
        { Quichua: 'chusku chunka', spanish: '40' },
        { Quichua: 'pichka chunka', spanish: '50' },
        { Quichua: 'sukta chunka', spanish: '60' },
        { Quichua: 'kanchis chunka', spanish: '70' },
        { Quichua: 'pusak chunka', spanish: '80' },
        { Quichua: 'iskun chunka', spanish: '90' },
        { Quichua: 'patsak', spanish: '100' },
      ],
      largeNumbers: [
        { Quichua: 'patsak', spanish: '100' },
        { Quichua: 'ishkay patsa', spanish: '200' },
        { Quichua: 'kimsa patsak', spanish: '300' },
        { Quichua: 'chusku patsak', spanish: '400' },
        { Quichua: 'pichka patsak', spanish: '500' },
        { Quichua: 'sukta patsak', spanish: '600' },
        { Quichua: 'kanchis patsak', spanish: '700' },
        { Quichua: 'pusak patsak', spanish: '800' },
        { Quichua: 'iskun patsak', spanish: '900' },
        { Quichua: 'waranka', spanish: '1000' },
        { Quichua: 'ishkay waranka', spanish: '2000' },
        { Quichua: 'kimsa waranka', spanish: '3000' },
        { Quichua: 'chusku waranka', spanish: '4000' },
        { Quichua: 'pichka waranka', spanish: '5000' },
        { Quichua: 'sukta waranka', spanish: '6000' },
        { Quichua: 'kanchis waranka', spanish: '7000' },
        { Quichua: 'pusak waranka', spanish: '8000' },
        { Quichua: 'iskun waranka', spanish: '9000' },
        { Quichua: 'chunka waranka', spanish: '10000' },
      ],
    };
  },
};
</script>

<style scoped>
.calendar-container {
  margin: 20px;
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
}

.scrollable-table {
  max-height: 400px; /* Aumentado un poco la altura máxima para acomodar más datos */
  overflow-y: auto; /* Habilitar scroll vertical */
}

.calendar-table {
  width: 100%;
  border-collapse: collapse;
}

.calendar-table th,
.calendar-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.calendar-table th {
  background-color: #f2f2f2;
}

.section-title {
  font-weight: bold;
  text-align: center;
  color: #2980b9;
  background-color: #e0e0e0; /* Un color de fondo para las secciones */
}

/* Responsividad */
@media (max-width: 768px) {
  .calendar-table {
    font-size: 14px;
  }
}

.scrollable-table::-webkit-scrollbar {
  width: 10px; /* Tamaño del scrollbar */
}

.scrollable-table::-webkit-scrollbar-thumb {
  background-color: #888; /* Color del cursor */
  border-radius: 5px; /* Bordes redondeados */
}

.scrollable-table::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color del cursor al pasar el mouse */
}
</style>
