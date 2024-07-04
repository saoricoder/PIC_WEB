<?php
require_once '../PHP/Student.php';

class GradeEntry extends Student {
    private $course;
    private $grade;

    public function __construct($name, $id, $course, $grade) {
        parent::__construct($name, $id);
        $this->course = $course;
        $this->grade = $grade;
    }

    public function getCourse() {
        return $this->course;
    }

    public function getGrade() {
        return $this->grade;
    }

    public function displayEntry() {
        echo "<div class='result'>";
        echo "<h2>Resultado del Ingreso</h2>";
        echo "<p>Estudiante: <strong>" . $this->getName() . "</strong> (ID: " . $this->getId() . ")</p>";
        echo "<p>Curso: <strong>" . $this->getCourse() . "</strong></p>";
        echo "<p>Nota: <strong>" . $this->getGrade() . "</strong></p>";
        echo "</div>";
    }
}

?>
