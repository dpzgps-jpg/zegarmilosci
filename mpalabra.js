// Fecha objetivo: 18 de diciembre a las 23:00:00
// Nota: En JavaScript los meses van de 0 a 11 (11 = Diciembre)
function getTargetDate() {
    const now = new Date();
    let currentYear = now.getFullYear();
    
    // Crear fecha para el 18 de Diciembre a las 23:00:00
    let target = new Date(currentYear, 11, 18, 23, 0, 0);

    // Si la fecha ya pasó este año, calcula para el siguiente año
    if (now > target) {
        target = new Date(currentYear + 1, 11, 18, 23, 0, 0);
    }

    return target;
}

const targetDate = getTargetDate();

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
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

// Actualizar el contador cada 1 segundo (1000 milisegundos)
setInterval(updateCountdown, 1000);

// Ejecutar inmediatamente al cargar la página
updateCountdown();