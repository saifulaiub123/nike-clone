const carousel = document.querySelector('.carousel'); // Replace with your carousel element's ID/class selector
const slides = carousel.querySelectorAll('.slide'); // Select all slide elements within the carousel

let currentSlide = 0; // Track the current slide index

// Function to move to the next slide
function nextSlide() {
  slides[currentSlide].classList.remove('active'); // Deactivate current slide
  currentSlide = (currentSlide + 1) % slides.length; // Wrap around to first slide if at the end
  slides[currentSlide].classList.add('active'); // Activate the next slide
}

// Function to move to the previous slide
function prevSlide() {
  slides[currentSlide].classList.remove('active'); // Deactivate current slide
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Wrap around to last slide if at the beginning
  slides[currentSlide].classList.add('active'); // Activate the previous slide
}

// Add event listeners for navigation (optional)
const nextButton = document.querySelector('.carousel-button-next'); // Replace with your next button selector (if applicable)
const prevButton = document.querySelector('.carousel-button-prev'); // Replace with your previous button selector (if applicable)

if (nextButton) {
  nextButton.addEventListener('click', nextSlide);
}

if (prevButton) {
  prevButton.addEventListener('click', prevSlide);
}

// (Optional) Add functionality for automatic slide transition (if desired)
// ... (code for autoplay logic)


document.addEventListener('DOMContentLoaded', function() {
  // Get all menu items
  var menuItems = document.querySelectorAll('.menuitem');

  // Add mouseenter event listener to each menu item
  menuItems.forEach(function(menuItem) {
      menuItem.addEventListener('mouseenter', function() {
          var target = this.getAttribute('data-target');
          var submenu = document.getElementById(target);

          // Hide all other submenus
          var allSubmenus = document.querySelectorAll('.submenu');
          allSubmenus.forEach(function(item) {
              item.classList.remove('visible');
          });

          // Toggle the visibility of the submenu
          submenu.classList.add('visible');
      });

      // Add mouseleave event listener to each menu item
      menuItem.addEventListener('mouseleave', function() {
          var target = this.getAttribute('data-target');
          var submenu = document.getElementById(target);

          // Hide the submenu when mouse leaves the menu item
          submenu.classList.remove('visible');
      });
  });
});
