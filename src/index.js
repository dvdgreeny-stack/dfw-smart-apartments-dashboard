const splash = document.getElementById('splash');
const dashboard = document.getElementById('dashboard');

setTimeout(() => { splash.classList.add('slide-away'); }, 2400);
setTimeout(() => {
  dashboard.classList.remove('hidden');
  document.querySelectorAll('.card').forEach((card, i) => {
    setTimeout(() => card.classList.add('appear'), 120 * i);
  });
}, 3200);
