<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado del Ingreso de Notas</title>
    <link rel="stylesheet" href="../CSS/style.css">
</head>
<body>
    <div class="container">
        <?php
        require_once 'GradeEntry.php';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST['studentName'];
            $id = $_POST['studentId'];
            $course = $_POST['course'];
            $grade = $_POST['grade'];

            $entry = new GradeEntry($name, $id, $course, $grade);
            $entry->displayEntry();
        } else {
            echo "<p>Método no permitido</p>";
        }
        ?>
    </div>
</body>
</html>
