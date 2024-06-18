$(document).ready(function() {
    $('#submitButton').on('click', function(event) {
      event.preventDefault(); // Prevent the default button click behavior

      // Get form data
      var formData = {
        username: $('#username').val(),
        email: $('#email').val(),
        cellphone: $('#cellphone').val(),
        password: $('#password').val()
      };

      // Send data via AJAX
      $.ajax({
        url: 'https://webapi20240607221911.azurewebsites.net/api/user/register', // Replace with your server URL
        type: 'POST', // Ensure method is POST
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        headers: {
          'TenantId': '9CB10B66-216A-4ECE-9A2A-6D73C2F242CF'
        },
        data: JSON.stringify(formData),
        success: function(response) {
          alert('Cadastro realizado com sucesso!');
          // You can add more actions here, like redirecting the user
        },
        error: function(xhr, status, error) {
          alert('Ocorreu um erro: ' + error);
        }
      });
    });
  });