<?php
// send.php

// Enable CORS if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = htmlspecialchars($data['name']);
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($data['message']);

    if (!$name || !$email || !$message) {
        echo json_encode(['success' => false, 'error' => 'Invalid input']);
        exit;
    }

    $to = "omar.saab.96@gmail.com"; // Change to your email
    $subject = "ZER01NE - NEW Project";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Email failed to send']);
    }
}
?>
