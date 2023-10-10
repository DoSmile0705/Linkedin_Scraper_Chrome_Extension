$(document).ready(function () {
  $("#toggleButton").on("click", function () {
    $("#toggleButtonInner").toggleClass("active");
    $("#popUpMain").toggleClass("dark");
  });

  $('form').on('submit', function (event) {
    console.log('sending data');
    $.ajax({
      url: 'https://www.linkedin.com/login',
      type: 'POST',
      data: {
        getLinkedinUserName: $('#getLinkedinUserName').val(),
        getLinkedinPassword: $('#getLinkedinPassword').val(),
      },
      success: function (response) {
        // Redirect to LinkedIn homepage or any other page
        window.location.href = 'https://www.linkedin.com';
      },
      error: function (xhr, status, error) {
        // Handle login error
        console.log(error);
      }
    });


    event.preventDefault();
    $("#dotSpin").toggleClass("show");
  });
});