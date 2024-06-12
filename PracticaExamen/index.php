<?php
include_once './modules/session.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modelo Academico</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="container">
        <div class="head">
            <h1 class="titulo">Modelo Academico</h1>
        </div>
        <section class="body">
            <ul class="menu_container">
                <li class="menu_item">Carreras<a href="./modules/carreras.php" class="item_descripcion __carreras"></a></li>
                <li class="menu_item">Estudiantes<a href="./modules/estudiantes.php" class="item_descripcion __estudiantes"></a></li>
                <li class="menu_item">Docentes<a href="./modules/docentes.php" class="item_descripcion __docentes"></a></li>
            </ul>
        </section>
        <footer>
            <h2>Desarrollado por Yo mismo</h2>
        </footer>
    </div>

</body>

</html>