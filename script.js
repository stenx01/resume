// Smooth hero text rotation
const phrases = [
  "learns",
  "creates",
  "changes",
  "moves forward",
  "adapts",
  "does not quit",
  "does not surrender"
];

const dynamicText = document.querySelector('.dynamic-text');
let i = 0;

function rotateText() {
  dynamicText.style.transition = 'none';
  dynamicText.style.opacity = 0;
  dynamicText.style.transform = 'translateX(-50px)';

  setTimeout(() => {
    dynamicText.textContent = phrases[i];
    dynamicText.style.transition = 'all 0.7s ease';
    dynamicText.style.opacity = 1;
    dynamicText.style.transform = 'translateX(0)';
    i = (i + 1) % phrases.length;
  }, 200);
}

setInterval(rotateText, 2500);
rotateText();

// Light/Dark Mode toggle
const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});
