window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input[name="element_19"]');
  if (input) {
    input.addEventListener('input', function () {
      this.value = this.value
        .replace(/\D/g, '')
        .replace(/^0+/, '');
    });
  }
});
