var menu = document.getElementById("table-sheduled-menu-container");
var updating = false;

let back_button = document.querySelector("#label-back-maintenance-details");
let close_form_sheduled = document.querySelector("#btn-close-sheduled");


close_form_sheduled.addEventListener("click", ()=>{
    document.querySelector("#sheduled-container").style.display = "none";
});

back_button.addEventListener("click", ()=>{
   menu.style.marginLeft = "0";
   document.getElementById("sheduled-tittle").innerHTML = "Maintenaces programed";
   getDevicesList();
});

document.getElementById("form-device-details").addEventListener("submit", (e)=>{
    e.preventDefault();
    let device_name = document.getElementById("txt-details-device-name").value;
    let device_location = document.getElementById("txt-details-device-location").value;
    let device_maintenance_date = document.getElementById("txt-details-device-date").value;
    let maintenance_type = document.getElementById("select-details-device-type").value;
    let id = document.getElementById("txt-details-device-id").value;
    
    if(!updating){
        $.post("./controllers/sheduled-controller.php",{action:"updateDeviceDetails",id:id,device_name,device_location,device_maintenance_date,maintenance_type},(data)=>{
            let res = data;
            updating = false;
            document.getElementById("btn-update-maintenance-details").style.opacity= "1";
            
            if(data > 0){
                console.log("Updated");
            }
        });
    }
    document.getElementById("btn-update-maintenance-details").style.opacity = "0";
    updating = true;
});


function showSheduledDetails(id){
    document.getElementById("txt-details-device-name").value = "";
    document.getElementById("txt-details-device-location").value = "";
    document.getElementById("txt-details-device-date").value = "";
    document.getElementById("txt-details-device-id").value = "";
    document.getElementById("sheduled-tittle").innerHTML = "Device details";
    menu.style.marginLeft = "-725px";
    $.post("./controllers/sheduled-controller.php",{action:"getDeviceDetails", id:id},(data)=>{
        let deviceData = JSON.parse(data);

        document.getElementById("txt-details-device-name").value = deviceData.device;
        document.getElementById("txt-details-device-location").value = deviceData.device_location;
        document.getElementById("txt-details-device-date").value = deviceData.device_new_maintenance;
        document.getElementById("txt-details-device-id").value = deviceData.id;
        document.getElementById("select-details-device-type").value = deviceData.maintenance_type;
    });
}

setInterval(()=>{
    getDevicesList();
},2000);

// 