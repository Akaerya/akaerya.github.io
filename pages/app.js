let showingE0S1 = false;
function toggleStats() {
  const toggle = document.getElementById('statToggle');
  const label = document.getElementById('statToggleLabel');
  const current = showingE0S1 ? document.getElementById('statsE0S1') : document.getElementById('statsE0S0');
  const next = showingE0S1 ? document.getElementById('statsE0S0') : document.getElementById('statsE0S1');
  showingE0S1 = !showingE0S1;
  toggle.classList.toggle('active', showingE0S1);
  label.textContent = showingE0S1 ? '5* E0S1 / 4* E6S5' : 'E0S0';
  current.classList.add('fading-out');
  setTimeout(() => {
    current.classList.add('hidden');
    current.classList.remove('fading-out');
    next.classList.remove('hidden');
    next.classList.add('fading-in');
    void next.offsetWidth;
    next.classList.remove('fading-in');
  }, 300);
}
