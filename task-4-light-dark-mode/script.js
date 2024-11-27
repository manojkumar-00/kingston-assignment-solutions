// Constants for theme modes
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// DOM Elements
const themeSwitchButton = document.querySelector('#toggle-icon');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const images = ['image1', 'image2', 'image3'].map(id => document.getElementById(id));

// Function to set theme attributes
function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  updateUI(mode);
}

// Function to update UI elements based on the theme
function updateUI(mode) {
  const isDark = mode === DARK_THEME;

  // Update backgrounds
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  // Update icon and text
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  toggleIcon.children[1].classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon' : 'fa-sun');

  // Update images
  const color = isDark ? 'dark' : 'light';
  images.forEach((img, index) => {
    img.src = `img/undraw_${['proud_coder', 'feeling_proud', 'conceptual_idea'][index]}_${color}.svg`;
  });
}

// Theme toggle button click handler
themeSwitchButton.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') ?? LIGHT_THEME;
  setTheme(currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
});

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme') ?? LIGHT_THEME;
setTheme(savedTheme);
