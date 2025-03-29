// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu functionality
const menuToggle = document.querySelector('.mobile-menu-toggle');
const menuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link, .mobile-nav .cta-button');

// Open mobile menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close mobile menu
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = ''; // Enable scrolling again
});

// Close menu when a link is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Enable scrolling again
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate header height to offset scroll position
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Simple reveal animation for sections when scrolling
const revealElements = document.querySelectorAll('.section');

function checkReveal() {
  const triggerBottom = window.innerHeight * 0.8;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < triggerBottom) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Apply initial styles for reveal animation
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Check for elements to reveal on load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);