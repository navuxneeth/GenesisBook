<?php
// Database connection
$link = mysqli_connect("localhost", "root", "", "websiteabxn");

// Check connection
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}


$email = $_POST['email'];


$query = "INSERT INTO contact (email) VALUES ('$email')";


if (mysqli_query($link, $query)) {
    header('Location: websiteabxn.html'); 
} else {
    echo "Error: " . mysqli_error($link);
}


mysqli_close($link);
?>
