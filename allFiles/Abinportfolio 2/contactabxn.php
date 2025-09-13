<?php
// Database connection
$link = mysqli_connect("localhost", "root", "", "websiteabxn");

// Check connection
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$inquiry = $_POST['inquiry'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert query
$query = "INSERT INTO contact (firstName, lastName, inquiry, email, message) VALUES ('$firstName', '$lastName', '$inquiry', '$email', '$message')";

// Execute query
if (mysqli_query($link, $query)) {
    header('Location: websiteabxn.html'); // Redirect after success
} else {
    echo "Error: " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>
