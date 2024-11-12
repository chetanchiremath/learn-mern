document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId);
  
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  