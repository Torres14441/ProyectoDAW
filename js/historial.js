document.addEventListener('DOMContentLoaded', () => {
    const historialTable = document.getElementById('historial-table');

    // Realizar solicitud GET a la API
    fetch('https://652f649a0b8d8ddac0b26e29.mockapi.io/notas', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        // Limpiar el contenido actual de la tabla
        historialTable.innerHTML = '';

        // Crear filas de la tabla con los datos obtenidos de la API
        data.forEach(nota => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${nota.Titulo}</td>
                <td>${nota.Tipo}</td>
                <td>${nota.Contenido}</td>
                <td>${new Date(nota.Fecha * 1000).toLocaleString()}</td>
            `;
            historialTable.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        historialTable.innerHTML = 'Error al cargar el historial.';
    });
});
