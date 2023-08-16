// Crear una aplicacion que le pida :
// Tres rangos de Edades
//       * menor  de 12 años, muestre en pantalla  , "Todavia eres joven "
//       * menor 19 años, muestre ,  "Eres adolescente "
//       * menor 35 años , muestre ,  "Aun sigues siendo joven "
//       * mayor de 35 años, "Piensa en cuidarte un poco mas"

function obtain() {
  var edad = document.getElementById("edad").value;
  var result;
  if (edad == "") {
    alert("debes introducir tu edad primero");
  } else if (parseInt(edad) < 12) {
    result = "Aun eres muy joven";
    document.getElementById("show_result").value = result;
  } else if (parseInt(edad) < 19) {
    result = "Eres un adolescente";
    document.getElementById("show_result").value = result;
  } else if (parseInt(edad) < 35) {
    result = "Aun sigues siendo joven";
    document.getElementById("show_result").value = result;
  } else {
    result = "Piensa en cuidarte un poco mas";
    document.getElementById("show_result").value = result;
  }
};

function borrar() {
  document.getElementById("edad").value = "";
  document.getElementById("show_result").value = "";
};
