const servicesContentCards = document.querySelector(".services__content");

function getScrollAmount() {
    let contentWidth = servicesContentCards.scrollWidth;
    return -(contentWidth - window.innerWidth);
}

const tween = gsap.to(servicesContentCards, {
    x: getScrollAmount,
    duration: 20, //Animación mas o menos lenta
    ease: "none",
});

ScrollTrigger.create({
    trigger: ".services__content",
    start: "top 5%",
    end: () => `+=${Math.abs(getScrollAmount()) + window.innerHeight}`, // Añade la altura de la ventana para extender el rango de scroll
    pin: true,
    animation: tween,
    scrub: 3, //Velocidad scroll lateral
    invalidateOnRefresh: true,
    markers: true // Activar para hacer modificaciones, muestra los límites de la animación.
});
