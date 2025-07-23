window.addEventListener('DOMContentLoaded', function () {
$('#element_19').on('input', function () {
  let val = $(this).val();

  // Elimina caracteres no numéricos
  val = val.replace(/\D/g, '');

  if (val.startsWith('0')) {
    val = val.substring(1);
  }

  $(this).val(val);
});
});