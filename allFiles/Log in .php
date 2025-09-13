<html>

<body>

<form action="welcome.php" method="POST">

Username: <input type="text" name="usename"><br>

Password: <input type="text" name="example"><br>

<input type="submit" value=”submit”>

</form>

</body>

</html>

<?php

$link=mysqli_connect("localhost","root","","signup");

$f=$_POST['uname'];

$l=$_POST['password'];

$query="insert into login values('$f','$l')";

$result=mysqli_query($link,$query);

header('Location: homepage.html');

mysqli_close($link);

?>