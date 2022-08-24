function compile() {
    var html = document.getElementById("Html");
    var css = document.getElementById("Css");
    var js = document.getElementById("Js");
    var code = document.getElementById("Code").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();