<?php

$bd_con = new mysqli(gethostbyname("www.cvrelectronica.com"),"cvrelect_prototype_usr","prototype2021","cvrelect_prototype");

$bd_con->set_charset("utf8");

$bd_con->query("UPDATE maintenances SET  uses= uses + 1 WHERE id = 21");

echo($bd_con->affected_rows);
?>