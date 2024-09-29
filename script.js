// Selectors
const navLinks = document.querySelectorAll('nav a');
const socialIcons = document.querySelectorAll('.social-icons a');
const heroButton = document.querySelector('.home .btn'); // Adjusted selector for hero button
const workSlider = document.querySelector('.work-slider');
const slides = document.querySelectorAll('.slide');
const locationMap = document.querySelector('.map');

// Function to add active class to clicked nav link
function setActiveLink(link) {
  navLinks.forEach((l) => l.classList.remove('active'));
  link.classList.add('active');
}

// Function to add active class to clicked social icon
function setActiveIcon(icon) {
  socialIcons.forEach((i) => i.classList.remove('active'));
  icon.classList.add('active');
}

// Event listeners for navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveLink(link);
    // Scroll smoothly to the corresponding section
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Event listeners for social icons
socialIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveIcon(icon);
  });
});

// Event listener for hero button
heroButton.addEventListener('click', (e) => {
  e.preventDefault();
  heroButton.classList.toggle('active');
});

// Work slider functionality
let currentSlide = 0;

// Function to update the active slide
function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

// Event listener for work slider clicks
workSlider.addEventListener('click', (e) => {
  if (e.target.classList.contains('slide')) {
    // Get the index of the clicked slide
    currentSlide = Array.prototype.indexOf.call(slides, e.target);
    updateSlide();
  }
});

// Initialize the work slider
updateSlide();

// Location map functionality
locationMap.addEventListener('click', (e) => {
  console.log('Map clicked!'); // Placeholder for future functionality
});

// Initialize the location map
console.log('Map initialized!');

// Optional: Initialize a map library here
// e.g., Google Maps, Leaflet, etc.
