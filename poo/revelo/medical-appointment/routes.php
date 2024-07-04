<?php
require_once 'controllers/appointmentController.php';

$controller = new AppointmentController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['create'])) {
        $controller->create();
    } elseif (isset($_POST['update'])) {
        $controller->update($_POST['id']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['delete'])) {
        $controller->delete($_GET['id']);
    } elseif (isset($_GET['read'])) {
        $controller->read();
    }
}
?>
