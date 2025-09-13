<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form inputs
    $full_name = trim($_POST['full_name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $your_message = trim($_POST['your_message']);
    $expertise = trim($_POST['expertise']);
    $newsletter = isset($_POST['newsletter']) ? 'yes' : 'no';

    // Validate inputs
    if (empty($full_name) || empty($email) || empty($subject) || empty($your_message) || empty($expertise)) {
        die("All fields except newsletter are required.");
    }

    // Connect to MySQL
    $conn = new mysqli('localhost', 'root', '', 'web_final_ong');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO get_in_touch (full_name, email, subject, your_message, expertise, newsletter) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $full_name, $email, $subject, $your_message, $expertise, $newsletter);

    // Execute and confirm
    if ($stmt->execute()) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Clean up
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
