document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('openModalBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      if (window.AhrefsAnalytics != null) {
        window.AhrefsAnalytics.sendEvent('modalOpened');
      }
    });
  }
});
