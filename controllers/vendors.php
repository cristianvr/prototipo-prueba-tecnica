<?php

$action = $_POST['action']; 

$bd_con = new mysqli(gethostbyname("www.cvrelectronica.com"),"cvrelect_prototype_usr","prototype2021","cvrelect_prototype");

$bd_con->set_charset("utf8");

if($action == "add-new-vendor"){
    $vendor_name = $_POST['new_vendor_name'];
    $vendor_phone = $_POST['new_vendor_phone'];
    $vendor_service = $_POST['new_vendor_service'];
    

    $res = $bd_con->query("INSERT INTO maintenances_vendors (vendor,vendor_phone,vendor_service) VALUES('".$vendor_name."','".$vendor_phone."','".$vendor_service."')");

    echo($bd_con->affected_rows);
}else if($action == "getVendors"){
    $res = $bd_con->query("SELECT * FROM maintenances_vendors");

    $table_lines = "";
    while($fetch = $res->fetch_assoc()){
        $table_lines = $table_lines. "<tr><td>".$fetch['vendor']."</td><td>".$fetch['vendor_phone']."</td><td>".$fetch['vendor_service']."</td></tr>";
    }
    echo($table_lines);
}

?>