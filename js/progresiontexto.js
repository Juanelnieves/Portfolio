// Función para dividir texto en caracteres
function splitText(selector) {
  const element = document.querySelector(selector);
  const text = element.innerText;
  element.innerHTML = ''; // Limpiar el contenido existente

  // Crear span para cada carácter
  text.split('').forEach(char => {
    let span = document.createElement('span');
    span.innerText = char;
    element.appendChild(span);
  });

  return Array.from(element.children); // Retorna los elementos span creados
}

// Uso de la función
const chars = splitText('.profile-info p');

// Crear la animación con GSAP
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#profile-section",
    start: "top top",
    end: "+=150%",
    pin: true,
    scrub: 0.50,
    markers: false,
  }
})
.set(chars, { color: "#ffffff", stagger: 1 }, 0.5);
