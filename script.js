const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const cursorGlow = document.getElementById('cursorGlow');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('mousemove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const profileCard = document.querySelector('.profile-card');
if (profileCard) {
  profileCard.addEventListener('mousemove', (event) => {
    const rect = profileCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  profileCard.addEventListener('mouseleave', () => {
    profileCard.style.transform = '';
  });
}
