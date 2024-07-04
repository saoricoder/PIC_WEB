<?php
require_once '../config/database.php';
require_once '../models/appointment.php';

class AppointmentController {
    private $conn;
    private $appointment;

    public function __construct() {
        global $conn;
        $this->conn = $conn;
        $this->appointment = new Appointment($this->conn);
    }

    public function create() {
        if(isset($_POST['submit'])) {
            $this->appointment->patient_name = $_POST['patient_name'];
            $this->appointment->doctor_name = $_POST['doctor_name'];
            $this->appointment->appointment_date = $_POST['appointment_date'];
            $this->appointment->appointment_time = $_POST['appointment_time'];

            if($this->appointment->create()) {
                header("Location: ../views/appointments/index.php");
            } else {
                echo "Error creating appointment";
            }
        }
    }

    public function read() {
        return $this->appointment->read();
    }

    public function update($id) {
        if(isset($_POST['submit'])) {
            $this->appointment->id = $id;
            $this->appointment->patient_name = $_POST['patient_name'];
            $this->appointment->doctor_name = $_POST['doctor_name'];
            $this->appointment->appointment_date = $_POST['appointment_date'];
            $this->appointment->appointment_time = $_POST['appointment_time'];

            if($this->appointment->update()) {
                header("Location: ../views/appointments/index.php");
            } else {
                echo "Error updating appointment";
            }
        }
    }

    public function delete($id) {
        $this->appointment->id = $id;
        if($this->appointment->delete()) {
            header("Location: ../views/appointments/index.php");
        } else {
            echo "Error deleting appointment";
        }
    }
}
?>
