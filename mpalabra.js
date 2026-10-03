// Fecha objetivo: 18 de diciembre a las 23:00:00
function getTargetDate() {
    const now = new Date();
    let currentYear = now.getFullYear();
    let target = new Date(currentYear, 11, 18, 23, 0, 0); // Mes 11 = Diciembre

    if (now > target) {
        target = new Date(currentYear + 1, 11, 18, 23, 0, 0);
    }
    return target;
}

// Fecha de inicio: 3 de septiembre a las 00:00:00
function getStartDate(targetDate) {
    const year = targetDate.getFullYear();
    return new Date(year, 8, 3, 0, 0, 0); // Mes 8 = Septiembre
}

const targetDate = getTargetDate();
const startDate = getStartDate(targetDate);

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    // Cálculo del porcentaje de progreso
    const totalDuration = targetDate - startDate;
    const elapsed = now - startDate;

    let percentage = 0;
    if (elapsed > 0) {
        percentage = (elapsed / totalDuration) * 100;
    }
    if (percentage > 100) percentage = 100;

    // Actualizar barra y texto de porcentaje
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    if (progressFill && progressText) {
        progressFill.style.width = percentage.toFixed(2) + '%';
        progressText.innerText = percentage.toFixed(2) + '%';
    }

    // Contador a cero si ya pasó el tiempo
    if (difference <= 0) {
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('minutes').innerText = "00";
        document.getElementById('seconds').innerText = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();