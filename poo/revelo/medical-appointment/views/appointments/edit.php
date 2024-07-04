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
    <title>Edit Appointment</title>
</head>
<body>
    <h1>Edit Appointment</h1>
    <form action="../../controllers/appointmentController.php?id=<?php echo $appointment['id']; ?>" method="POST">
        <label for="patient_name">Patient Name:</label>
        <input type="text" name="patient_name" value="<?php echo $appointment['patient_name']; ?>" required>
        <label for="doctor_name">Doctor Name:</label>
        <input type="text" name="doctor_name" value="<?php echo $appointment['doctor_name']; ?>" required>
        <label for="appointment_date">Appointment Date:</label>
        <input type="date" name="appointment_date" value="<?php echo $appointment['appointment_date']; ?>" required>
        <label for="appointment_time">Appointment Time:</label>
        <input type="time" name="appointment_time" value="<?php echo $appointment['appointment_time']; ?>" required>
        <input type="submit" name="submit" value="Update">
    </form>
</body>
</html>
