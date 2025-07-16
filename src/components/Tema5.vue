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
              <td colspan="2" class="section-title">Hunkay Punchákuna / Días de la Semana</td>
            </tr>
            <tr v-for="(day, index) in days" :key="index">
              <td>{{ day.Quichua }}</td>
              <td>{{ day.spanish }}</td>
            </tr>
            <tr>
              <td colspan="2" class="section-title">Wata Killakuna / Meses del Año</td>
            </tr>
            <tr v-for="(month, index) in months" :key="index">
              <td>{{ month.Quichua }}</td>
              <td>{{ month.spanish }}</td>
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
        days: [
          { Quichua: 'Awaki', spanish: 'Lunes' },
          { Quichua: 'Awkarik', spanish: 'Martes' },
          { Quichua: 'Chillay', spanish: 'Miercoles' },
          { Quichua: 'Kullka', spanish: 'Jueves' },
          { Quichua: 'Chaska', spanish: 'Viernes' },
          { Quichua: 'Wacha', spanish: 'Sabado' },
          { Quichua: 'Inti', spanish: 'Domingo' },
        ],
        months: [
          { Quichua: 'Kulla', spanish: 'Enero' },
          { Quichua: 'Panchi', spanish: 'Febrero' },
          { Quichua: 'Pawkar', spanish: 'Marzo' },
          { Quichua: 'Ayriwa', spanish: 'Abril' },
          { Quichua: 'Aymuray', spanish: 'Mayo' },
          { Quichua: 'Raymi', spanish: 'Junio' },
          { Quichua: 'Sitwa', spanish: 'Julio' },
          { Quichua: 'Karway', spanish: 'Agosto' },
          { Quichua: 'Kuski', spanish: 'Septiembre' },
          { Quichua: 'Wayru', spanish: 'Octubre' },
          { Quichua: 'Sasi', spanish: 'Noviembre' },
          { Quichua: 'Kapak', spanish: 'Diciembre' },
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
    max-height: 300px; /* Altura máxima del contenedor */
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
    color: #2980b9
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
  