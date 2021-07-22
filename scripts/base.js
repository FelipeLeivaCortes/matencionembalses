/**
 * Only modify these parameters, to avoid any error
 * */

 var dayUpdate       = 15;
 var monthUpdate     = "21";
 var yearUpdate      = "2021";
 var version         = "1.7";


/* By default, the base.js will load the home´s content */
window.addEventListener("load", function(){
    var idCompany	= sessionStorage.getItem("ID_COMPANY");
    var path        = "img/logoCompany" + idCompany + ".png"; 
    document.getElementById("logoCompany").setAttribute("src", path);

    let isAdmin     = document.getElementById("user-role").innerHTML == "Administrador" ? true : false;

    switch(isAdmin){
        case true:
            getNotifications();
            createContainer("Estadisticas Generales",
                            false,
                            "",
                            "stadistics.html",
                            "initStadistics()"
                            );
            break;

        case false:
            createContainer("Mantenciones",
                            true,
                            "nav-maintances.html",
                            "maintances.html",
                            "initMaintances()"
                            );
            break;
    }

    setTimeout(()=>{
        updateSystem();
    }, 3000);
   
});

function getNotifications(){
    $.ajax({
        url:            "backend/getNotifications.php",
        type:           "POST",
        contentType:    false,
        processData:    false,
        error:          (error)=>{console.log(error)},
        success:        (DATA)=>{
            if(!DATA.ERROR){
                let numNotifications    = DATA.events.length + DATA.records.length + DATA.outstanding.length + DATA.suggests.length;
                numNotifications        = DATA.reports.length > 0 ? numNotifications + 1 : numNotifications;

                if(numNotifications > 0){
                    document.getElementById("notificationsIcon").setAttribute("data-target", "#notificationsForm");
                    document.getElementById("notificationsIcon").setAttribute("data-toggle", "modal");
                    document.getElementById("notificationsIcon").setAttribute("href", "");
                    
                    var spanCount       = document.createElement("span");
                    spanCount.className = "badge badge-pill badge-warning notification";
                    spanCount.innerHTML = numNotifications + " !";
                    document.getElementById("notificationsIcon").appendChild(spanCount);
                    
                    $('#formNotifications').empty();

                    if(DATA.reports != undefined){
                        console.log(DATA.reports);
                    }

                    /**
                     * Alert to show the events
                     */
                    for(var i=0; i<DATA.events.length; i++){
                        var container       = document.createElement("div");
                        var commonMessage   = document.createElement("p");
                        var link2Document   = document.createElement("a");
                        
                        container.className       = "form-group";
                        commonMessage.innerHTML   = "Se ha emitido una alerta asociada al documento: " + DATA.events[i].nombre;
                        commonMessage.setAttribute("style", "float: left; margin-right: 1%;");

                        link2Document.textContent    = DATA.events[i].name;
                        link2Document.href           = DATA.events[i].link;
                        
                        container.appendChild(commonMessage);
                        container.appendChild(link2Document);

                        document.getElementById("formNotifications").appendChild(container);
                    } 


                    /**
                     * Alert to show the pending records
                     */
                    for(var i=0; i<DATA.records.length; i++){
                        var div             = document.createElement("div");
                        div.setAttribute("id", "alertRecord:" + DATA.records[i].id);
                        var content         = document.createElement("p");

                        div.className       = "form-group";
                        content.innerHTML   = "La guía N° " + DATA.records[i].id + " aún está pendiente";
                        
                        div.appendChild(content);
                        document.getElementById("formNotifications").appendChild(div);
                    }

                    /**
                     * Alert to show the important records
                     */
                    for(var i=0; i<DATA.outstanding.length; i++){
                        var div             = document.createElement("div");
                        div.setAttribute("id", "alertRecord:" + DATA.outstanding[i].id);
                        var content         = document.createElement("p");
                        var link            = document.createElement("a");

                        link.href           = "javascript:loadRecords(" + DATA.outstanding[i].id + ")";
                        link.textContent    = "Ver Detalles";

                        div.className       = "form-group";
                        content.innerHTML   = "La guía N° " + DATA.outstanding[i].id + " ha sido marcada como importante: ";
                        content.appendChild(link);
                        
                        div.appendChild(content);
                        document.getElementById("formNotifications").appendChild(div);
                    }

                    /**
                     * Alert to show the suggest
                     */
                    for(var i=0; i<DATA.suggests.length; i++){
                        var div             = document.createElement("div");
                        div.setAttribute("id", "alertSuggest:" + DATA.suggests[i].id);
                        var content         = document.createElement("p");
                        var link            = document.createElement("a");

                    //    link.href           = "javascript:loadRecords(" + DATA.outstanding[i].id + ")";
                    //    link.textContent    = "Ver Detalles";

                        div.className       = "form-group";
                        content.innerHTML   = "La guía de mantención N° " + DATA.suggests[i].idRecord + " tiene asociada una sugerencia";
                    //    content.appendChild(link);
                        
                        div.appendChild(content);
                        document.getElementById("formNotifications").appendChild(div);
                    }
                }
            }
        }
    });
}

function updateSystem(){
    var dateUpdate      = dayUpdate + "/" + monthUpdate + "/" + yearUpdate;
    
    var versionSystem   = " Actualización del sistema: Versión " + version;

    var headerFeature   = "Informamos a nuestros usuarios que en la fecha <b>" + dateUpdate + "</b> se ha " + 
        "implementado la nueva versión <b>" + version + "</b>, en la cúal destacan las siguientes " +
        "características:"
    
    var bodyFeature =   "<b>* Optimización:</b> Se ha aplicado optimizaciones al sistema.<br><br>" +
                        "<b>* Soporte:</b> Desde ahora, cada mes se enviará un reporte con las actividades y guías que hayan sido eliminadas.";

    $('#versionSystem').html(versionSystem);
    $('#newFeatureHeader').html(headerFeature);
    $('#newFeatureBody').html(bodyFeature);

    let lastUpdate  = new Date(yearUpdate + "/" + monthUpdate + "/" + dayUpdate);
    let today       = new Date();

    let dayDiff     = Math.round((today.getTime() - lastUpdate.getTime()) / (1000*60*60*24));

    if( dayDiff > 0 && dayDiff <= 2 ){
        $("#ModalNewFeatures").modal("show");
    }
}

/**
 * @param {string} title : Title of the page 
 * @param {boolean} includeNavbar : Do you want to include the navbar?
 * @param {string} navbar : Name of the navbar
 * @param {string} body : Name of the body page
 */
function createContainer(title, includeNavbar, navbarName, bodyName, targetFunction){
    document.getElementById("title-page").innerHTML = title;

    if(includeNavbar){
        var navbar = new XMLHttpRequest();
        navbar.open('get', navbarName);
        navbar.send();
        navbar.onload = function(){
            document.getElementById('navbar-container').innerHTML = navbar.responseText
        }

    }else{
        document.getElementById('navbar-container').innerHTML   = "<div></div>";
    }

    var body = new XMLHttpRequest();
    body.open('get', bodyName);
    body.send();
    body.onload = function(){
        document.getElementById('body-container').innerHTML     = body.responseText;
    }

    ShowSpinner();

    setTimeout(()=>{
        eval(targetFunction);
    }, (delay * 2));
}