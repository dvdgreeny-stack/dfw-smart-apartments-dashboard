// Desktop-focused splash timing (total ~3s)
const splash = document.getElementById('splash');
const dashboard = document.getElementById('dashboard');

// Sequence:
// 0.0s: splash fade in (CSS)
// 1.2s: tagline shown (CSS)
// 2.4s: slide splash up
// 3.2s: reveal dashboard + animate in cards
setTimeout(() => {
  splash.classList.add('slide-away');
}, 2400);

setTimeout(() => {
  dashboard.classList.remove('hidden');
  // Stagger card entrances for dopamine "reward" phase
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('appear'), 120 * i);
  });
}, 3200);
