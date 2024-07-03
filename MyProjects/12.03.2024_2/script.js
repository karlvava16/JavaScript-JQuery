$(document).ready(function () {
  $("#generate-button").click(function () {
    var stringLength = parseInt($("#string-length").val());
    var includeUppercase = $("#uppercase-checkbox").is(":checked");
    var includeLowercase = $("#lowercase-checkbox").is(":checked");
    var includeDigits = $("#digits-checkbox").is(":checked");

    var allowedChars = "";
    if (includeUppercase) {
      allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
      allowedChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeDigits) {
      allowedChars += "0123456789";
    }

    var generatedString = "";
    for (var i = 0; i < stringLength; i++) {
      var randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedString += allowedChars[randomIndex];
    }

    $("#generated-string").text(generatedString);
  });

  $("#copy-button").click(function () {
    var text = $("#generated-string").text();
    navigator.clipboard.writeText(text).then(
      function () {
        alert("Сгенерированная строка скопирована в буфер обмена!");
      },
      function (err) {
        alert("Ошибка копирования: " + err);
      }
    );
  });
});
