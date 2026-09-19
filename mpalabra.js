// Función para obtener la fecha del próximo 14 de Febrero
function getNextValentineDate() {
    const now = new Date();
    let currentYear = now.getFullYear();
    
    // Crear fecha del 14 de Febrero a las 00:00:00
    let valentineDate = new Date(currentYear, 1, 14, 0, 0, 0);

    // Si este año San Valentín ya pasó, calcula para el siguiente año
    if (now > valentineDate) {
        valentineDate = new Date(currentYear + 1, 1, 14, 0, 0, 0);
    }

    return valentineDate;
}

const targetDate = getNextValentineDate();

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('minutes').innerText = "00";
        document.getElementById('seconds').innerText = "00";
        return;
    }

    // Cálculos matemáticos de tiempo
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Actualizar elementos en el HTML agregando un "0" inicial si es menor a 10
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

// Actualizar el contador cada 1 segundo (1000 milisegundos)
setInterval(updateCountdown, 1000);

// Ejecutar inmediatamente al cargar la página
updateCountdown();