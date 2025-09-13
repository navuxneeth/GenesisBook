<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_POST['email']) || !isset($_POST['password'])) {
        die("Error: Email or Password field is missing.");
    }

    $Email = trim($_POST['email']);
    $Password = trim($_POST['password']);

    // Check if values are empty
    if (empty($email) || empty($password)) {
        die("Error: Email or Password cannot be empty.");
    }

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'websites');

    // Check connection
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    }

    // Prepare and execute query
    $stmt = $conn->prepare("INSERT INTO signuplogin (Email, Password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);

    if ($stmt->execute()) {
        echo "Signup successful!";
        header("Location: index.html"); // Redirect after successful signup
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    die("Error: Invalid request method.");
}
?>

