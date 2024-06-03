<?php
// ------------ CADENA DE CONEXION --------------
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supermarket";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);


//------ VERIFICAR SI SE CONECTO CON LA BASE DE DATOS-----
echo "<br> validando la conexion a la bdd <br>";
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
else{
    echo "<br> CONEXION CORRECTA Y SATISFACTORIA <br>";
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //--------------------------------------
    // $variable PHP   = $_POST['controlHTML'] $edad=22
    //--------------------------------------
    $codigoSucursal = $_POST['codigoSucursal'];
    $nombreSucursal = $_POST['nombreSucursal'];
    $direccionSucursal = $_POST['direccionSucursal'];

    echo "el codigo es : " . $codigoSucursal  . "<br>"   ;
    echo "el nombre es : " . $nombreSucursal . "<br>" ;
    echo "la direccion es : " . $direccionSucursal . "<br>" ;

}  //--------- fin de la validacion de envio desde HTML hacia PHP

//-------INSERTAR EL NUEVO REGISTRO DESDE PHP HACIA MYSQL

$sql = "INSERT INTO sucursal (nombreSucursal, direccionSucursal) VALUES ('$codigoSucursal', '$nombreSucursal', '$direccionSucursal')";
$sentenciaSql="insert into sucursal (nombreSucursal, direccionSucursal) 
       values ('$nombreSucursal', '$direccionSucursal') ";

       if ($conn->query($sentenciaSql) === TRUE) {
        echo "GRABACION EXITOSA";
    } else {
        echo "Error AL GUARNAR NO SE GRABO: " . $sql . "<br>" . $conn->error;
    }



?>