<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="../../assets/css/style.css">
    <title>Create Appointment</title>
</head>
<body>
    <h1>Create Appointment</h1>
    <form action="../../controllers/appointmentController.php" method="POST">
        <label for="patient_name">Patient Name:</label>
        <input type="text" name="patient_name" required>
        <label for="doctor_name">Doctor Name:</label>
        <input type="text" name="doctor_name" required>
        <label for="appointment_date">Appointment Date:</label>
        <input type="date" name="appointment_date" required>
        <label for="appointment_time">Appointment Time:</label>
        <input type="time" name="appointment_time" required>
        <input type="submit" name="submit" value="Create">
    </form>
</body>
</html>
