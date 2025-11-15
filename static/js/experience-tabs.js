// Progressive enhancement: add deep linking to CSS-only tabs
document.addEventListener('DOMContentLoaded', () => {
  const tabRadios = document.querySelectorAll('.tab-radio');

  if (tabRadios.length === 0) return;

  // On page load, check URL hash and activate that tab
  const activateTabFromHash = () => {
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash) {
      const radio = document.getElementById(`tab-${hash}`);
      if (radio) {
        radio.checked = true;
      }
    }
  };

  // Update URL hash when tabs are clicked (optional)
  tabRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        const tabName = radio.id.replace('tab-', '');
        history.replaceState(null, null, `#${tabName}`);
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('hashchange', activateTabFromHash);

  // Activate on initial load
  activateTabFromHash();
});
