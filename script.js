// Example of JS for smooth scrolling (requires more work for full functionality)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Function to add class based on scroll position for the profile section
function revealOnScroll() {
var reveals = document.querySelectorAll('.profile-section');

for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}
}

window.addEventListener("scroll", revealOnScroll);

// Placeholder for GSAP code
// gsap.registerPlugin(ScrollTrigger);

// Uncomment and use the following code when GSAP is available
// gsap.from(".profile-info", {
//   scrollTrigger: {
//     trigger: ".profile-info",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//   },
//   opacity: 0,
//   y: 50,
//   ease: "none"
// });

// gsap.to(".animated-banner", {
//   scrollTrigger: {
//     trigger: ".animated-banner",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   },
//   backgroundPositionY: "-50%",
//   ease: "none"
// });

document.getElementById('gallery').addEventListener('wheel', function(event) {
  if (event.deltaY != 0) {
    // Prevent default scrolling
    event.preventDefault();
    // Scroll the gallery horizontally instead
    this.scrollLeft += event.deltaY + event.deltaX;
  }
}, false);
