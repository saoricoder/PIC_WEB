<?php
include_once './action/conexion.php';

$modulo = trim($_SESSION['modulo']);

if ($modulo == "carreras") {
    $sql = "SELECT COUNT(id_carreras) AS total FROM carreras";
    if ($result = $conn->query($sql)) {
        if ($row = mysqli_fetch_array($result)) {
            if ($row['total'] == 0) {
                echo '<ul class="listado_fila">
                    <li style="justify-content: center;" class="fila_descripcion __id"> No hay carreras agregadas</li>
                </ul>';
            } else {
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
            }
        }
    }
} else {
    $sql = "SELECT COUNT(id_carreras) AS total FROM carreras";
    if ($result = $conn->query($sql)) {
        if ($row = mysqli_fetch_array($result)) {
            if ($row['total'] == 0) {
                echo '<ul class="listado_fila">
                            <li style="justify-content: center;" class="fila_descripcion __id"> Por favor, crea como mínimo una carrera antes de agregar ' . $modulo . '.</li>
                        </ul>';
            } else {
                $sql = "SELECT COUNT(id_$modulo) AS total FROM $modulo";
                if ($result = $conn->query($sql)) {
                    if ($row = mysqli_fetch_array($result)) {
                        if ($row['total'] == 0) {
                            echo '<ul class="listado_fila">
                                <li style="justify-content: center;" class="fila_descripcion __id"> No hay ' . $modulo . ' guardados</li>
                            </ul>';
                        } else {
                            $sql = "SELECT * FROM $modulo";
                            if ($result = $conn->query($sql)) {
                                $id_user = array();
                                $cedula = array();
                                $id_carrera = array();
                                $indice = 0;
                                $modul = substr($modulo, 0, -1);
                                while ($row = mysqli_fetch_array($result)) {
                                    $id_user[$indice] = $row['id_' . $modulo . ''];
                                    $cedula[$indice] = $row['cedula_' . $modul . ''];
                                    $id_carrera[$indice] = $row['id_carreras'];
                                    $indice += 1;
                                }
                                for ($i = 0; $i < count($id_user); $i++) {

                                    $sql = "SELECT * FROM carreras WHERE id_carreras='$id_carrera[$i]'";
                                    $result = $conn->query($sql);
                                    if ($result->num_rows > 0) {
                                        if ($row = $result->fetch_assoc()) {
                                            echo '<ul class="listado_fila">
                                                    <li class="fila_descripcion __id"> ' . $id_user[$i] . '</li>
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
}

switch ($modulo) {
    case 'carreras':

        break;
    case 'nada':
        $sql = "SELECT COUNT(id_carreras) AS total FROM carreras";

        if ($result = $conn->query($sql)) {
            if ($row = mysqli_fetch_array($result)) {
                if ($row['total'] == 0) {
                } else {


                    if ($result = $conn->query($sql)) {
                        if ($row = mysqli_fetch_array($result)) {
                            if ($row['total'] == 0) {
                            } else {
                                $sql = "SELECT * FROM $modulo";

                                if ($result = $conn->query($sql)) {
                                    while ($row = mysqli_fetch_array($result)) {
                                    }
                                    for ($i = 0; $i < count($id_estudiante); $i++) {
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
    case 'nada':
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
                                        $id_carrera[$i] = $row["id_carreras"];
                                        $i += 1;
                                        echo $id_carrera[$i];
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

        break;
}
