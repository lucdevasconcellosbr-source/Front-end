const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'color 0.3s ease';
    link.style.color = '#FFD700';
  });

  link.addEventListener('mouseout', () => {
    link.style.transition = 'color 0.3s ease';
    link.style.color = 'white';
  });
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  observer.observe(section);
});

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});