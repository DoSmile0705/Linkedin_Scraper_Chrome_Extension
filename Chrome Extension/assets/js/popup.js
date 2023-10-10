$(document).ready(function () {
  $("#toggleButton").on("click", function () {
    $("#toggleButtonInner").toggleClass("active");
    $("#popUpMain").toggleClass("dark");
  });

  $('form').on('submit', function (event) {
    console.log('sending data');
    href = 'a[href=https://www.linkedin.com/login]'
    window.open(this.href);

    $.ajax({
      data: {
        getLinkedinUserName: $('#getLinkedinUserName').val(),
        getLinkedinPassword: $('#getLinkedinPassword').val(),
      },
      type: 'POST',
      url: 'http://127.0.0.1:5000/index'
    })
      .done(function (data) {
        chrome.storage.sync.set({ keywords: data.keywords }, function () {
          console.log('Data is set');
          console.log('Data is: ' + data.keywords);
        })
        $('output').text('<p>You are Safe now!</p>').show();
        console.log('output put')
      });
    event.preventDefault();
    $("#dotSpin").toggleClass("show");
  });
});