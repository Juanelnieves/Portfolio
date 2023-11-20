window.onload = function() {
  document.getElementById('home').scrollIntoView({ behavior: 'instant' });
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
          document.getElementById('home').scrollIntoView({ behavior: 'instant' });
          document.getElementById('loadingAnimation').style.display = 'none';
          // Start the reveal animation after the loading is complete
          startRevealAnimation();
      }
  }, 30);
}

let animationStarted = false;

function startRevealAnimation() {
  if (!animationStarted) {
      animationStarted = true;
      revealLetters();
  }
}

window.addEventListener('scroll', function() {
  var profileSection = document.getElementById('profile-section');
  var windowHeight = window.innerHeight;
  var profileSectionRect = profileSection.getBoundingClientRect();

  // Check if the profile section is in view and the animation hasn't started yet
  if (!animationStarted && profileSectionRect.top <= windowHeight) {
      startRevealAnimation();
  }
});

function revealLetters() {
  var spans = document.getElementsByClassName('main__description-span');
  var delay = 0;
  var revealRate = 100; // Time in milliseconds between each letter reveal

  for (var i = 0; i < spans.length; i++) {
      spans[i].style.transition = 'opacity 1s';
      spans[i].style.opacity = 0;
      setTimeout(function(span) {
          span.style.opacity = 1;
      }, delay, spans[i]);

      delay += revealRate;
  }
}
