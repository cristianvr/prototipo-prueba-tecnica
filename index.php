<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CVR Maintenance Scheduling </title>

    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./font-awesome/css/all.min.css">

    <!-- WINDOWS CSS -->
    <link rel="stylesheet" href="./windows/css/form-new-device.css">
    <link rel="stylesheet" href="./windows/css/form-sheduled.css">
    <link rel="stylesheet" href="./windows/css/form-vendors.css">

    <script src="./js/index.js"></script>
    <script src="./js/jquery.js"></script>
    

</head>
<body>

    <header> 
        <img id="logo" src="./img/logo.png" alt="logo">
        <p id="header-tittle"> CVR Maintenance Scheduling </p>
    </header>

    <div id="general-container">

        <div class="button-container" id="btn-add-device">
            <i class="fa fa-plus"></i>
            <p>New device</p>
        </div>

        <div class="button-container" id="btn-sheduled">
            <i class="fa fa-calendar-alt"></i>
            <p>Sheduled</p>
        </div>

        <div class="button-container" id="btn-vendors">
            <i class="fa fa-address-book"></i>
            <p>Vendors</p>
        </div>
    </div>

    <?php
        require("./windows/form-new-device.html");
        require("./windows/form-sheduled.html");
        require("./windows/form-vendors.html");
    ?>
    <!-- WINDOWS JS -->
    <script src="./windows/js/form-new-device.js"></script>
    <script src="./windows/js/form-sheduled.js"></script>
    <script src="./windows/js/form-vendors.js"></script>
</body>
</html>