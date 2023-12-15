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
          
          
      }
  }, 30);
}

