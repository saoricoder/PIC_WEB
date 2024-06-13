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
                                $sql = "SELECT * FROM $modulo";
                                $i = 0;
                                if ($result = $conn->query($sql)) {
                                    while ($row = mysqli_fetch_array($result)) {
                                        $id_estudiante[$i] = $row["id_estudiantes"];
                                        $cedula[$i] = $row["cedula_estudiante"];
                                        $id_carrera[$i] = $row["id_carrera"];
                                        $i += 1;
                                    }
                                    for ($i = 0; $i < count($id_carrera); $i++) {
                                        $sql_carrera = "SELECT * FROM carreras WHERE id_carreras=$id_carrera[$i]";
                                        if ($result = $conn->query($sql_carrera)) {
                                            if ($row = mysqli_fetch_array($result)) {
                                                echo '<ul class="listado_fila">
                                                    <li class="fila_descripcion __id"> ' . $id_estudiante[$i] . '</li>
                                                    <li class="fila_descripcion">' . $cedula[$i] . '</li>
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
        }
        break;
    case 'docentes':
        $sql = "SELECT COUNT(id_carreras) AS total FROM carreras";

        if ($result = $conn->query($sql)) {
            if ($row = mysqli_fetch_array($result)) {
                if ($row['total'] == 0) {
                    echo '<ul class="listado_fila">
                            <li style="justify-content: center;" class="fila_descripcion __id"> Por favor, crea como mínimo una carrera antes de agregar alumnos.</li>
                        </ul>';
                } else {
                    $sql = "SELECT COUNT(id_docentes) AS total FROM $modulo";

                    if ($result = $conn->query($sql)) {
                        if ($row = mysqli_fetch_array($result)) {
                            if ($row['total'] == 0) {
                                echo '<ul class="listado_fila">
                                <li style="justify-content: center;" class="fila_descripcion __id"> No hay docentes guardados</li>
                            </ul>';
                            } else {
                                $sql = "SELECT * FROM $modulo";
                                $i = 0;
                                if ($result = $conn->query($sql)) {
                                    while ($row = mysqli_fetch_array($result)) {
                                        $id_docente[$i] = $row["id_docentes"];
                                        $cedula[$i] = $row["cedula_docente"];
                                        $id_carrera[$i] = $row["id_carrera"];
                                        $i += 1;
                                    }
                                    for ($i = 0; $i < count($id_carrera); $i++) {
                                        $sql_carrera = "SELECT * FROM carreras WHERE id_carreras=$id_carrera[$i]";
                                        if ($result = $conn->query($sql_carrera)) {
                                            if ($row = mysqli_fetch_array($result)) {
                                                echo '<ul class="listado_fila">
                                                    <li class="fila_descripcion __id"> ' . $id_docente[$i] . '</li>
                                                    <li class="fila_descripcion">' . $cedula[$i] . '</li>
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
        }
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
