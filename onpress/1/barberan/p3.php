<!DOCTYPE html>
<html>
<body>

<h2>Formulario HTML</h2>

<form method="get" action="">
  <label for="n1">Nota 1:</label><br>
  <input type="number" id="n1" name="n1" placeholder="Ingrese la nota 1"><br><br>
  
  <label for="n2">Nota 2:</label><br>
  <input type="number" id="n2" name="n2" placeholder="Ingrese la nota 2"><br><br>
  
  <input type="submit" value="Submit">
</form> 

<?php
  if (isset($_REQUEST["n1"]) && isset($_REQUEST["n2"])) {
    $n1 = $_REQUEST['n1'];
    $n2 = $_REQUEST['n2'];
    
    echo "Código PHP <br><br>";
    echo "El primer número es: " . $n1 . "<br>";
    echo "El segundo número es: " . $n2 . "<br>";
    
    $suma = $n1 + $n2;
    echo "La suma es: " . $suma;
  }
?>

</body>
</html>