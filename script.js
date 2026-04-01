const year = document.getElementById("year");
year.innerText = `© ${new Date().getFullYear()} Tahniyat Shaikh | All Rights Reserved`;

const cards = document.querySelectorAll('.skill-card, .project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', () => {
    card.style.transform = 'translateY(-10px) scale(1.03)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});
