
<?php


$bd_con = new mysqli(gethostbyname("www.cvrelectronica.com"),"cvrelect_prototype_usr","prototype2021","cvrelect_prototype");
$bd_con->set_charset("utf8");

$action = $_POST['action'];

if($action == 'getDevicesList'){
    $res = $bd_con->query("SELECT * FROM maintenances");

    $table_lines = "";
    while($fetch = $res->fetch_assoc()){
        $table_lines = $table_lines. "<tr onclick='showSheduledDetails($fetch[id])'><td>".$fetch['device']."</td><td>".$fetch['device_location']."</td><td>".$fetch['device_new_maintenance']."</td><td>".$fetch['maintenance_type']."</td><td>".$fetch['uses']."</td></tr>";
    }


    echo($table_lines);
}else if($action == 'getDeviceDetails'){
    $id = $_POST['id'];
    $res = $bd_con->query("SELECT * FROM maintenances WHERE id = $id");

    
    $fetch = $res->fetch_assoc();
    // var_dump($fetch);
    echo(json_encode($fetch));
    
}else if($action == 'updateDeviceDetails'){
    $id = $_POST['id'];
    $device_name = $_POST['device_name'];
    $device_location = $_POST['device_location'];
    $device_maintenance_date = $_POST['device_maintenance_date'];
    $maintenance_type = $_POST['maintenance_type'];

    $res = $bd_con->query("UPDATE maintenances SET  device='$device_name', device_location='$device_location', device_new_maintenance = '$device_maintenance_date', maintenance_type='$maintenance_type' WHERE id = $id");

    echo($bd_con->affected_rows);
}

?>