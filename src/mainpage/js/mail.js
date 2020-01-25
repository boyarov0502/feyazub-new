$(function(){
  $('#feedback').validate({
    rules: {
      name: "required",
      contact: "required"
    },
    messages: {
      name: "",
      contact: ""
    },
    errorPlacement: function errorPlacement(error, element) {
      element.siblings('span').append(error);
    },
    submitHandler: function(form) {
      $(form).append('<div class="loader is-active loader-default"></div>')

      var fd = new FormData( form );
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: fd,
        success: function(){
          $('.loader').fadeOut(function () {
            $(form)[0].reset();
            alert('Письмо успешно отправлено!');
          });
        }
      });
    }
  });
});
