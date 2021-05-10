    var menu_new_vendor = document.getElementById("table-vendors-menu-container");
    var btnNewVendor = document.getElementById("btn-new-vendor");
    var vendorTittle = document.getElementById("vendors-menu-tittle");   
    var consoleVendor = document.getElementById("console-add-vendor");
    
    document.getElementById("btn-close-vendors").addEventListener("click",()=>{
        document.getElementById("vendor-list-container").style.display = "none";
    });

    document.getElementById("label-back-vendor-add").addEventListener("click",()=>{
        menu_new_vendor.style.marginLeft = "0px";
        btnNewVendor.style.opacity = 1;
        document.getElementById("select-vendors-filter").style.opacity = 1;
        vendorTittle.innerHTML = "Vendors List";

        $.post("./controllers/vendors.php",{action:"getVendors"},(data)=>{
            let res = data;
            document.getElementById("vendors-table").innerHTML = res;
        });

    });

    btnNewVendor.addEventListener("click",()=>{
        menu_new_vendor.style.marginLeft = "-725px";
        btnNewVendor.style.opacity = 0;
        document.getElementById("select-vendors-filter").style.opacity = 0;
        vendorTittle.innerHTML = "New provider";
    });


    document.getElementById("form-vendors-add").addEventListener("submit",(e)=>{
        let new_vendor_name = document.getElementById("txt-vendors-name").value;
        let new_vendor_phone = document.getElementById("txt-vendors-phone").value;
        let new_vendor_service = document.getElementById("select-vendors-type").value;

        e.preventDefault();
        consoleVendor.innerHTML = "Wait...";

        $.post("./controllers/vendors.php",{action:"add-new-vendor",new_vendor_name, new_vendor_phone, new_vendor_service},(data)=>{
            let res = data;
            console.log(data);
            if(res > 0){
                consoleVendor.innerHTML = "vendor added successfully";
                document.getElementById("txt-vendors-name").value = "";
                document.getElementById("txt-vendors-phone").value = "";
                document.getElementById("select-vendors-type").value = "";
            }else{
                consoleVendor.innerHTML = "An error occurred";
            }
            
        });
    });