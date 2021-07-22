window.addEventListener("load", function(event){

    document.getElementById("user-name").innerHTML = sessionStorage.getItem("NAME") + " " + sessionStorage.getItem("LASTNAME");

    let permission = JSON.parse(sessionStorage.getItem("PERMISSIONS")).split("");

    if(permission.length  == 0){
        ModalReportEvent("Error", 12, "Su usuario no tiene ningún permiso registrado. Comuníquese con el administrador");
        Logout();
    
    }else{
        /**
         * THE PERMISSION LIST IS
         * 1 -> ADMINISTRATOR
         * 2 -> MECHANICAL
         * 3 -> ELECTRICIAN
         * 4 -> GARDENER
         */
        let permissionList  = ["Administrador","Mecánico", "Electricista", "Jardinero"];
        let role            = "";
        
        for(let i=0; i<permissionList.length; i++){
            if(permission[i] == "1"){
                document.getElementById("user-role").innerHTML = permissionList[i];
                role    = permissionList[i];

                break;
    
            }else if(permission[0] != "0"){
                ModalReportEvent("Error", 13, "Su usuario tiene registrado un permiso no válido. Comuníquese con el administrador");

                break;
            }
        }

        switch(role){
            case "Administrador":
                let spansClass  = ["pie-chart", "users", "pencil", "spreadsheet", "database"];
                let titles      = ["Estadísticas", "Usuarios", "Actividades", "Guías de Mantención", "Reportes"];
                let functions   = ["javascript:createContainer('Estadisticas Generales',false,'','stadistics.html','initStadistics()')",
                                    "javascript:createContainer('Usuarios del sistema',true,'nav-usercontrol.html','userControl.html','initAdministration()')",
                                    "javascript:createContainer('Actividades',true,'nav-activities.html','activities.html','initActivity()')",
                                    "javascript:createContainer('Guías de Mantención',true,'nav-records.html','records.html','initRecords()')",
                                    "javascript:createContainer('Reportes',true,'nav-reports.html','reports.html','initReports()')"
                                ];

                for(let i=0; i<spansClass.length; i++){
                    let div     = document.createElement("div");
                    let link    = document.createElement("a");
                    let span    = document.createElement("span");
                    let text    = document.createElement("textNode");

                    span.setAttribute("class", "icon-space icon-" + spansClass[i]);
                    text.textContent    = titles[i];
                    link.appendChild(span);
                    link.appendChild(text);
                    link.setAttribute("href", functions[i]);
                    div.appendChild(link);
                    document.getElementById("AdminContainer").appendChild(div);
                }
        
                break;

            case "Mecánico":
            case "Electricista":
            case "Jardinero":
                var div1    = document.createElement("div");
                var link1   = document.createElement("a");
                var span1   = document.createElement("span");
                var text1   = document.createElement("textNode");

                link1.setAttribute("href", "javascript:createContainer('Mantenciones',true,'nav-maintances.html','maintances.html','initMaintances()')");

                span1.setAttribute("class", "icon-calendar icon-space");
                text1.textContent    = "Mantenciones";
                link1.appendChild(span1);
                link1.appendChild(text1);
                div1.appendChild(link1);
                document.getElementById("EmployeeContainer").appendChild(div1);

                break;

            default:
                Logout();
                break;
        }

        let state       = role == "Administrador" ? true : false;

        let spansClass  = ["cog", "spreadsheet", "document"];
        let titles      = ["Configuración", "Memoranda", "Manuales"];
        let functions   = ["javascript:createContainer('Configuraciones',false,'','configuration.html','initConfiguration()')",
                            "javascript:createContainer('Memoranda',true,'nav-contacts.html','contacts.html','initContacts()')",
                            "javascript:createContainer('Manuales'," + state + ",'nav-manuals.html','manuals.html','initManuals()')"
                        ];

        for(let i=0; i<spansClass.length; i++){
            let div     = document.createElement("div");
            let link    = document.createElement("a");
            let span    = document.createElement("span");
            let text    = document.createElement("textNode");

            span.setAttribute("class", "icon-space icon-" + spansClass[i]);
            text.textContent    = titles[i];
            link.appendChild(span);
            link.appendChild(text);
            link.setAttribute("href", functions[i]);
            div.appendChild(link);
            document.getElementById("commonContainer").appendChild(div);
        }
    }
});