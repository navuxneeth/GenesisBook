<?php
session_start();

// Database connection
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "contact_form"; 

$conn = new mysqli($host, $user, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert form data into the database
$conn->query("INSERT INTO messages (full_name, email, subject, your_message, expertise, newsletter) 
              VALUES (
                '" . mysqli_real_escape_string($conn, $_POST['full_name']) . "',
                '" . mysqli_real_escape_string($conn, $_POST['email']) . "',
                '" . mysqli_real_escape_string($conn, $_POST['subject']) . "',
                '" . mysqli_real_escape_string($conn, $_POST['your_message']) . "',
                '" . mysqli_real_escape_string($conn, $_POST['expertise']) . "',
                " . (isset($_POST['newsletter']) ? 1 : 0) . "
              )") or die($conn->error);

$conn->close();

// Redirect back to the same page
header("Location: index-3.html");
exit();
?>
