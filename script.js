window.onload = function() {
    // Primero, desplazarse al banner de inmediato
    document.getElementById('home').scrollIntoView({ behavior: 'instant' });
    // Luego, inicia la animación de carga
    resetPageAnimation();
};

function resetPageAnimation() {
    document.getElementById('loadingAnimation').style.display = 'flex';
    let progress = 0;
    const loadingFill = document.getElementById('loadingFill');
    let interval = setInterval(function() {
        progress += 1;
        loadingFill.style.width = progress + '%';
        document.getElementById('loadingPercentage').innerText = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            // Desplazar al banner justo antes de que la animación termine
            document.getElementById('home').scrollIntoView({ behavior: 'instant' });
            document.getElementById('loadingAnimation').style.display = 'none';
        }
    }, 30);
}
