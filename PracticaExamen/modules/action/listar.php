<?php
$servername = "localhost";
$username = "root";
$password = "angel2857";
$dbname = "academica";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
$modulo = trim($_SESSION['modulo']);


switch ($modulo) {
    case 'carreras':
        $sql = "SELECT * FROM $modulo";
        if ($result = $conn->query($sql)) {
            while ($row = mysqli_fetch_array($result)) {
                echo '<ul class="listado_fila">
                            <li class="fila_descripcion __id"> ' . $row["id_carreras"] . '</li>
                            <li class="fila_descripcion">' . $row["nombre_carrera"] . '</li>
                            <li class="fila_descripcion">' . $row["director_carrera"] . '</li>
                        </ul>';
            }
        }
        break;
    case 'estudiantes':
        $sql = "SELECT COUNT(id_carreras) AS total FROM carreras";

        if ($result = $conn->query($sql)) {
            if ($row = mysqli_fetch_array($result)) {
                if ($row['total'] == 0) {
                    echo '<ul class="listado_fila">
                            <li style="justify-content: center;" class="fila_descripcion __id"> Por favor, crea como mínimo una carrera antes de agregar alumnos.</li>
                        </ul>';
                } else {
                    $sql = "SELECT COUNT(id_estudiantes) AS total FROM $modulo";

                    if ($result = $conn->query($sql)) {
                        if ($row = mysqli_fetch_array($result)) {
                            if ($row['total'] == 0) {
                                echo '<ul class="listado_fila">
                                <li style="justify-content: center;" class="fila_descripcion __id"> No hay alumnos guardados</li>
                            </ul>';
                            } else {
                                $sql_estudiantes = "SELECT * FROM $modulo";
                                if ($result = $conn->query($sql_estudiantes)) {
                                    while ($row = mysqli_fetch_array($result)) {
                                        $id_estudiante = $row["id_estudiantes"];
                                        $cedula = $row["cedula_estudiante"];
                                        $id_carrera = $row["id_carrera"];
                                        $sql_carrera = "SELECT * FROM carrera WHERE id_carrera=$id_carrera";
                                        if ($result_carrera = $conn->query($sql_carrera)) {
                                            echo '<ul class="listado_fila">
                                                <li class="fila_descripcion __id"> ' . $id_estudiante . '</li>
                                                <li class="fila_descripcion">' . $cedula . '</li>
                                                <li class="fila_descripcion">' . $row["nombre_carrera"] . '</li>
                                            </ul>';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        break;
    case 'docentes':
        $sql = "SELECT COUNT(id_$modulo) AS total FROM $modulo";
        break;
    default:
        echo '<ul class="listado_fila">
                <li style="justify-content: center;" class="fila_descripcion __id"> Ocurrio un error lo estamos resolviendo</li>
            </ul>';
        break;
}

//lectura del total de datos  en la base de datos


$sql = "SELECT * FROM $modulo";

if ($result = $conn->query($sql)) {
    if ($row = mysqli_fetch_array($result)) {
    } else {
    }
}
