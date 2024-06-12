<?php
$servername = "localhost";
$username = "root";
$password = "angel2857";
$dbname = "academica";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
$page = $_POST['page'];

if (empty($_POST['id_estudiantes'])) {
    header('Location: ' . $page);
    exit();
}
if ($_POST['id_estudiantes'] == '') {
    echo '<script language="javascript">alert("ingrese un dato valido"); return false;</script>';
    header('Location: ' . $page);
    exit();
}

$sql_check_user = "SELECT * FROM estudiantes WHERE cedula_estudiante = '" . $_POST['cedula_estudiante'] . "'";
$result_check_user = $conn->query($sql_check_user);
if (mysqli_num_rows($result_check_user) > 0) {

    $_SESSION['mensaje'] = "Cedula registrada, verifique la cedula";
    header('Location: ' . $page);
    exit();
} else {

    $sql_insert_user = "INSERT INTO estudiantes(id_estudiantes, cedula_estudiante, id_carrera) VALUES(" . trim($_POST['id_estudiantes']) . ", " . trim($_POST['cedula_estudiante']) . ", " . trim($_POST['carrera']) . ")";
    if (mysqli_query($conn, $sql_insert_user)) {
        $_SESSION['mensaje'] = "Guardado con exito";
        header('Location: ' . $page);
        exit();
    } else {
        $_SESSION['mensaje'] = "Error al guardar";
    }
}
echo $_SESSION['mensaje'];
