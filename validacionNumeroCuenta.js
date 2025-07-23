window.addEventListener('DOMContentLoaded', () => {
      const input = document.querySelector('input[name="element_19"]');
      console.log(input);
      if (input) {
        input.addEventListener('input', function () {
          this.value = this.value
            .replace(/\D/g, '')
            .replace(/^0+/, '');
        });
    }
});