
document.addEventListener('DOMContentLoaded', function() {
  
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    

    menuToggle.addEventListener('click', function() {
  
      navMenu.classList.toggle('show');
    
    });
    
 
    document.addEventListener('click', function(event) {

      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('show');
      
      }
    });
    
 
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('show');
    
      });
    });
  });