    var light1Color = "#FF0000";
    var light2Color = "#00FF00";
    var light3Color = "#0000FF";

    document.getElementById("light1").style.backgroundColor = light1Color;
    document.getElementById("light2").style.backgroundColor = light2Color;
    document.getElementById("light3").style.backgroundColor = light3Color;

    function changeColor(event) {
      event.preventDefault(); // Prevent the form from submitting

      var selectedLight = document.getElementById("light-select").value;
      var selectedColor = document.getElementById("color-select").value;
      document.getElementById(selectedLight).style.backgroundColor = selectedColor;

      setTimeout(function() {
        switch (selectedLight) {
          case "light1":
            document.getElementById(selectedLight).style.backgroundColor = light1Color;
            break;
          case "light2":
            document.getElementById(selectedLight).style.backgroundColor = light2Color;
            break;
          case "light3":
            document.getElementById(selectedLight).style.backgroundColor = light3Color;
            break;
        }
      }, 10000);
    }
