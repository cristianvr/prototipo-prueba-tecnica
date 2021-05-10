window.onload = () =>{
    let btn_add_device = document.querySelector("#btn-add-device");
    let containerForm = document.querySelector("#form-new-device-container");

    let btn_sheduled = document.querySelector("#btn-sheduled");
    let formContainerSheduled = document.querySelector("#sheduled-container");

    let btn_vendors = document.getElementById("btn-vendors");
    let formVendorList = document.getElementById("vendor-list-container");

    btn_add_device.addEventListener("click", ()=>{
        containerForm.style.display = "flex";
    });

    btn_sheduled.addEventListener("click", ()=>{
        formContainerSheduled.style.display = "flex";
        getDevicesList();
    });

    btn_vendors.addEventListener("click", ()=>{
        formVendorList.style.display = "flex";
        
        $.post("./controllers/vendors.php",{action:"getVendors"},(data)=>{
            let res = data;
            document.getElementById("vendors-table").innerHTML = res;
        });

    });
    
}

function getDevicesList(){
    
    $.post("./controllers/sheduled-controller.php",{action:"getDevicesList"},(data)=>{
        document.getElementById("sheduled-table").innerHTML = data;
        
    });
}