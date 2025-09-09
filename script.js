// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get the height of the fixed header
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Calculate the position to scroll to (accounting for the header)
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active navigation link based on scroll position
  function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const headerHeight = document.querySelector('header').offsetHeight;
      
      if (window.scrollY >= sectionTop - headerHeight - 50) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  // Call setActiveNavLink on scroll
  window.addEventListener('scroll', setActiveNavLink);
  
  // Call setActiveNavLink on page load
  setActiveNavLink();
  
  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simple form validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Simulate form submission (in a real application, you would send this data to a server)
      alert(`Thank you for your message, ${name}! I will get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Add animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .skill-item, .education-item, .timeline-item, .certification-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('animate');
      }
    });
  };
  
  // Call animateOnScroll on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Call animateOnScroll on page load
  animateOnScroll();
  
  // Add CSS class for animation
  const style = document.createElement('style');
  style.textContent = `
    .project-card, .skill-item, .education-item, .timeline-item, .certification-item {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .animate {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
});