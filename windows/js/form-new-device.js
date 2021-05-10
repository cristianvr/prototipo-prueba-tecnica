let containerForm = document.querySelector("#form-new-device-container");
let formNewDevice = document.querySelector("#form-new-device");
let consoleLabel = document.querySelector("#new-device-console");
let closeButton = document.querySelector("#close-new-device-window");

formNewDevice.addEventListener("submit", (e)=>{
    
    e.preventDefault();

    var new_device_name = document.querySelector("#select-new-device-type").value;
    var new_device_location = document.querySelector("#txt-new-device-location").value;
    var new_device_new_maintenace_date = document.querySelector("#txt-new-device-date").value;

    // console.log(new_device_name + new_device_location + new_device_lat_maintenace_date);
    consoleLabel.innerHTML = "Adding, please wait";
    
    $.post("./controllers/new-device-controller.php",{new_device_name,new_device_location,new_device_new_maintenace_date},(data)=>{
        let res = data;
        console.log(data);
        if(res > 0){
            consoleLabel.innerHTML = "Device added successfully";
        }else{
            consoleLabel.innerHTML = "An error occurred";
        }

        document.querySelector("#select-new-device-type").value = "Seleccione";
        document.querySelector("#txt-new-device-location").value = "";
        document.querySelector("#txt-new-device-date").value = "";
    });


});

closeButton.addEventListener("click", ()=>{
    containerForm.style.display = "none";
});