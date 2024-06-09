<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carreras</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <div class="container">
        <section class="head">
            <h1>Carreras</h1>
            <a class="home" href="../index.php">Home</a>
        </section>
        <section class="body">
            <form action="" method="post" class="formulario">
                <div class="input">
                    <div class="input_item">
                        <label for="id_carrera">ID Carrera</label>
                        <input type="text" name="id_carrera" id="id_carrera">
                    </div>
                    <div class="input_item">
                        <label for="nombre_carrera">Nombre de la Carrera</label>
                        <input type="text" name="nombre_carrera" id="nombre_carrera">
                    </div>
                    <div class="input_item">
                        <label for="director_carrera">Director de Carrera</label>
                        <input type="text" name="director_carrera" id="director_carrera">
                    </div>
                </div>
                <div class="botones">
                    <input id="agregar" type="submit" value="Agregar o Guardar">
                    <input type="submit" value="Modificar">
                    <input type="submit" value="Eliminar">
                    <input type="submit" value="Listar">
                </div>
            </form>
            <div class="listado">
                <ul class="titulo">
                    <li class="titulo_descripcion __id">ID Carrera</li>
                    <li class="titulo_descripcion">Nombre de la Carrera</li>
                    <li class="titulo_descripcion">Director de Carrera</li>
                </ul>
                <ul class="listado_fila">
                    <li class="fila_descripcion __id">1234567898</li>
                    <li class="fila_descripcion">Una carrera</li>
                    <li class="fila_descripcion">Dr. Algo como esto</li>
                </ul>
            </div>
        </section>
        <footer>
            <h2>Desarrollado por Yo mismo</h2>
        </footer>
    </div>
</body>

</html>