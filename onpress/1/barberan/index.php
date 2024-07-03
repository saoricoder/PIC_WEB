!DOCTYPE html>
<html>
<body>

<h2>HTML Forms</h2>

<form method="get" action="">
  <label for="fname">Nombre:</label><br>
  <input type="text" id="fname" name="fname" value="Chris"><br>

  <label for="nota1">Notita 1:</label><br>
  <input type=number id="nota1" name="nota1" placeholder="ingrese la nota 1"> <br> <br>
  
  <label for="nota2">Nota 2:</label><br>
  <input type=number id="nota2" name="nota2" placeholder="ingrese la nota 3"> <br> <br>
  
  <label for="nota3">Nota 3:</label><br>
  <input type=number id="nota3" name="nota3" placeholder="ingrese la nota 3"> <br> <br>
  



  <input type="submit" value="Submit">
</form> 

</body>
</html>
<?php
  echo "codigo php <br><br>";
  if (isset($_REQUEST["fname"])) {
    $name=$_REQUEST['fname'];
    echo "el nombre ingresado es:" . $name . "<br>";
  }
  else{
    echo"el control no existe";
  }
  if (isset($_REQUEST["nota1"])) {
    $nota1=$_REQUEST['nota1'];
    echo "la primera nota es:" . $nota1 . "<br>";
  }
  else{
    echo"el control no existe";
  }

  if (isset($_REQUEST["nota2"])) {
    $nota2=$_REQUEST['nota2'];
    echo "la segunda nota es:" . $nota2. "<br>";
  }
  else{
    echo"el control no existe";
  }

  if (isset($_REQUEST["nota3"])) {
    $nota3=$_REQUEST['nota3'];
    echo "la terecera nota es:" . $nota3 . "<br>";
  }
  else{
    echo"el control no existe";
  }

  $promedio = ($nota1 + $nota2 + $nota3) / 3;

  echo "El promedio es: " . $promedio;
  ?>