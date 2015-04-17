<?php
include("config.php");

// create a variable
$weekday=$_POST['weekday'];

//Connecting to sql db and sending form data to sql db.
$db = mysqli_connect("127.0.0.1","root","","firstSchema");
$sql = "SELECT * FROM appointments WHERE weekday=$weekday";
$result = mysqli_query($db,$sql);

header('Location: availableAppointments.html');
?>