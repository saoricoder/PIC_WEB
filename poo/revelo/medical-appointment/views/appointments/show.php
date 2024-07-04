<?php
require_once '../../controllers/appointmentController.php';
$controller = new AppointmentController();
if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $appointment = $controller->getAppointmentById($id);
}
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../../assets/css/style.css">
    <title>Appointment Details</title>
</head>
<body>
    <h1>Appointment Details</h1>
    <p><strong>Patient Name:</strong> <?php echo $appointment['patient_name']; ?></p>
    <p><strong>Doctor Name:</strong> <?php echo $appointment['doctor_name']; ?></p>
    <p><strong>Appointment Date:</strong> <?php echo $appointment['appointment_date']; ?></p>
    <p><strong>Appointment Time:</strong> <?php echo $appointment['appointment_time']; ?></p>
    <a href="edit.php?id=<?php echo $appointment['id']; ?>">Edit</a>
    <a href="delete.php?id=<?php echo $appointment['id']; ?>">Delete</a>
    <a href="index.php">Back to Appointments</a>
</body>
</html>
