<?php
class Appointment {
    private $conn;
    private $table = 'appointments';

    public $id;
    public $patient_name;
    public $doctor_name;
    public $appointment_date;
    public $appointment_time;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create() {
        $query = "INSERT INTO " . $this->table . " 
                  SET patient_name=:patient_name, doctor_name=:doctor_name, appointment_date=:appointment_date, appointment_time=:appointment_time";
        
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":patient_name", $this->patient_name);
        $stmt->bindParam(":doctor_name", $this->doctor_name);
        $stmt->bindParam(":appointment_date", $this->appointment_date);
        $stmt->bindParam(":appointment_time", $this->appointment_time);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function read() {
        $query = "SELECT * FROM " . $this->table . " ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function update() {
        $query = "UPDATE " . $this->table . "
                  SET patient_name=:patient_name, doctor_name=:doctor_name, appointment_date=:appointment_date, appointment_time=:appointment_time
                  WHERE id=:id";
        
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":patient_name", $this->patient_name);
        $stmt->bindParam(":doctor_name", $this->doctor_name);
        $stmt->bindParam(":appointment_date", $this->appointment_date);
        $stmt->bindParam(":appointment_time", $this->appointment_time);
        $stmt->bindParam(":id", $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);
        if($stmt->execute()) {
            return true;
        }
        return false;
    }
}
?>
