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
$modulo = $_POST['modulo'];


$sql_check_id = "SELECT * FROM $modulo WHERE id_$modulo = '" . $_POST['id_' . $modulo . ''] . "' ";
$result_check_id = $conn->query($sql_check_id);
if (mysqli_num_rows($result_check_id) > 0) {
    $_SESSION['mensaje'] = "ID registrado, verifique el ID";
    header('Location: ' . $page);
    exit();
} else if ($modulo == "carreras") {
    $id_carrera = trim($_POST['id_carreras']);
    $nombre_carrera =  trim($_POST['nombre_carrera']);
    $director_carrera = trim($_POST['director_carrera']);

    $sql_insert = mysqli_prepare($conn, "INSERT INTO carreras(id_carreras, nombre_carrera, director_carrera) VALUES(?,?,?)");
    mysqli_stmt_bind_param($sql_insert, 'sss', $id_carrera, $nombre_carrera, $director_carrera);
    if (mysqli_stmt_execute($sql_insert)) {
        $_SESSION['mensaje'] = "Guardado con exito";
        header('Location: ' . $page);
        exit();
    } else {
        $_SESSION['mensaje'] = "Error al guardar";
        header('Location: ' . $page);
        exit();
    }
} else {
    $modul = substr($modulo, 0, -1);

    $sql_check_user = "SELECT * FROM $modulo WHERE cedula_$modul = '" . $_POST['cedula_' . $modul . ''] . "'";
    $result_check_user = $conn->query($sql_check_user);
    if (mysqli_num_rows($result_check_user) > 0) {

        $_SESSION['mensaje'] = "Cedula registrada, verifique la cedula";
        header('Location: ' . $page);
        exit();
    } else {

        $id = trim($_POST['id_' . $modulo . '']);
        $cedula = trim($_POST['cedula_' . $modul . '']);
        $carrera = trim($_POST['carrera']);

        $sql_insert_user = mysqli_prepare($conn, "INSERT INTO $modulo(id_$modulo, cedula_$modul, id_carrera) VALUES(?,?,?)");
        mysqli_stmt_bind_param($sql_insert_user, 'sss', $id, $cedula, $carrera);
        if (mysqli_stmt_execute($sql_insert_user)) {
            $_SESSION['mensaje'] = "Guardado con exito";
            header('Location: ' . $page);
            exit();
        } else {
            $_SESSION['mensaje'] = "Error al guardar";
            header('Location: ' . $page);
            exit();
        }
    }
}
