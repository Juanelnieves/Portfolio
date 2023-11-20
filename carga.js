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
document.addEventListener("DOMContentLoaded", () => {
    const profileSection = document.getElementById('profile-section');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Opcional: deja de observar después de activar la animación
        }
      });
    }, { threshold: 0.1 }); // El umbral de 0.1 indica que la animación se activará cuando el 10% de la sección esté visible
  
    observer.observe(profileSection);
  });
