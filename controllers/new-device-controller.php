<?php

$device_name = $_POST['new_device_name'];
$device_location = $_POST['new_device_location'];
$device_last_maintenance = $_POST['new_device_new_maintenace_date'];


$bd_con = new mysqli(gethostbyname("www.cvrelectronica.com"),"cvrelect_prototype_usr","prototype2021","cvrelect_prototype");

$bd_con->set_charset("utf8");
$res = $bd_con->query("INSERT INTO maintenances (device,device_location,device_new_maintenance) VALUES('".$device_name."','".$device_location."','".$device_last_maintenance."')");

echo($bd_con->affected_rows);

?>