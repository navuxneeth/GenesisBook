<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Extract the correct fields
    $email = isset($_POST['email']) ? trim($_POST['email']) : null;
    $password = isset($_POST['password']) ? trim($_POST['password']) : null;

    if (empty($email) || empty($password)) {
        die("Email or Password cannot be empty.");
    }

    // Connect to database
    $conn = new mysqli('localhost', 'root', '', 'web_final_ong');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the record
    $stmt = $conn->prepare("INSERT INTO signup_login (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);

    if ($stmt->execute()) {
        // After success, redirect to about us
        header("Location: aboutus.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
