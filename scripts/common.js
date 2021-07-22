const imgData   = 'data:image/png;base64,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';
const delay     = 500;

class Rut{
    /**
     * 
     * @param {number} username The username without format
     * @param {boolean} isFormated Is the rut formated?
     */
    constructor(username, isFormated){
        username    = username.toString();

        if(isFormated){
            username    = username.replace(/[\.\-]/g, "");
        }

        this._username      = username.substr(0, username.length - 1);
        this._verificator   = username.charAt(username.length - 1);

        if(isFormated){
            this.assingFormat("");
        }
    }

    set username(value){
        this._username   = value;
    }

    set rut(value){
        this._rut    = value;
    }

    set verificator(value){
        this._verificator   = value;
    }

    get username(){
        return this._username;
    }

    get rut(){
        return this._rut;
    }

    get verificator(){
        return this._verificator;
    }

    /**
     * 
     * @param {string} id : Id of the input to set the rut. In other case put "" 
     */
    assingFormat(id){
        let chars  = this.username.split("");

        switch(chars.length){
            case 7:
                this._rut = chars[0] + "." + chars[1] + chars[2] + chars[3] + "." + chars[4] + chars[5] +
                        chars[6] + "-" + this.verificator;
                break;

            case 8:
                this._rut = chars[0] + chars[1] + "." + chars[2] + chars[3] + chars[4] + "." + chars[5] +
                        chars[6] + chars[7] + "-" + this.verificator;
                break;

            default:
                ModalReportEvent("Error", "15", "El rut ingresado no es válido");

                if(id != ""){ document.getElementById(id).value   = "" };
                this._rut = 0;
                return 0;
        }
    }

    isValid(id){
        var regex   = /([1-9]{1})([0-9]{0,1})\.([0-9]{3})\.([0-9]{3})\-((K|k|[0-9])){1}$/g;
	
        if( !regex.test( this.rut )){ 
            ModalReportEvent("Error", "15", "El rut ingresado no es válido");
            document.getElementById(id).value   = "";
            this._rut = 0;
            
            return false;
        }

        if( computeDv( parseInt(this.username) ).toString().toUpperCase() === this.verificator.toUpperCase() ){
            document.getElementById(id).value   = this.rut;
            return true;
            
        }else{
            ModalReportEvent("Error", 16, "El dígito verificador no coincide");
            document.getElementById(id).value   = "";
            return false;
        }

        /**
         * 
         * @param {Calculate the verificator digit} value 
         */
        function computeDv(value){
            var suma	= 0;
            var mul		= 2;
            
            if(typeof(value) !== 'number') { return ""; }
            
            value = value.toString();
            
            for(var i=value.length -1; i >= 0; i--) {
                suma = suma + value.charAt(i) * mul;
                mul = ( mul + 1 ) % 8 || 2;
            }
            
            switch(suma % 11) {
                case 1	: return 'k';
                case 0	: return 0;
                default	: return 11 - (suma % 11);
            }
        }
    }

    generateRut(){
        this.username       = this.username + this.verificator;
        this.verificator    = this.computeDv(parseInt(this.username)).toString().toUpperCase();

        this.assingFormat("");
    }

    /**
     * @param {Calculate the verificator digit} value 
     */
    computeDv(value){
        var suma	= 0;
        var mul		= 2;
        
        if(typeof(value) !== 'number') { return ""; }
        
        value = value.toString();
        
        for(var i=value.length -1; i >= 0; i--) {
            suma = suma + value.charAt(i) * mul;
            mul = ( mul + 1 ) % 8 || 2;
        }
        
        switch(suma % 11) {
            case 1	: return 'k';
            case 0	: return 0;
            default	: return 11 - (suma % 11);
        }
    }
}

class User{
    /**
     * 
     * @param {number} idCompany: Identified of the company  
     * @param {number} username: Is the rut the user without format 
     * @param {string} permissions: The permissions assigned (Admin, Mechanical, Electrician or Gardener)
     * @param {string} name: Name of the new user 
     * @param {string} lastname: Lastname of the new user 
     * @param {string} email: Email of the new user 
     * @param {number} phone: Number of movile (OPTIONAL)
     * @param {number} idOnDatabase: Id on the database (OPTIONAL)
     */
    constructor(idCompany, username, permissions, name, lastname, email, phone, idOnDatabase){
        this._idcompany     = idCompany;
        this._username      = username;
        this._permissions   = permissions;
        this._name          = NormalizeString(name);
        this._lastname      = NormalizeString(lastname);
        this._email         = email;
        this._phone         = phone;
        this._id            = idOnDatabase;
        this._lastOperation = "";
    }

    get idCompany(){
        return this._idcompany;
    }

    get username(){
        return this._username;
    }

    get permissions(){
        return this._permissions;
    }

    get name(){
        return this._name;
    }

    get lastname(){
        return this._lastname;
    }

    get email(){
        return this._email;
    }

    get phone(){
        return this._phone;
    }

    get id(){
        return this._id;
    }

    get lastOperation(){
        return this._lastOperation;
    }

    set idCompany(value){
        this._idcompany     = value;
    }

    set username(value){
        this._username      = value;
    }

    set permissions(value){
        this._permissions   = value
    }

    set name(value){
        this._name          = value;
    }

    set lastname(value){
        this._lastname      = value;
    }

    set email(value){
        this._email         = value;
    }

    set phone(value){
        this._phone         = value;
    }

    set id(value){
        this._id            = value;
    }

    set lastOperation(value){
        this._lastOperation     = value;
    }

    isValidName(inputId){
        var regex   = /([a-zA-Z\ \u00C0-\u00FF]){1,30}$/;
    
        if( !regex.test(this.name) ){
            ModalReportEvent("Error", 17, "El nombre ingresado contiene carácteres inválidos");
            document.getElementById(inputId).value  = "";

            return false;
        
        }else{
            return true;
        }
    }

    isValidLastname(inputId){
        var regex   = /([a-zA-Z\ \u00C0-\u00FF]){1,30}$/;
    
        if( !regex.test(this.lastname) ){
            ModalReportEvent("Error", 18, "El apellido ingresado contiene carácteres inválidos");
            document.getElementById(inputId).value  = "";

            return false;
        
        }else{
            return true;
        }
    }

    isValidEmail(inputId){
        var regex       = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
         
        if( !regex.test(this.email) ){
            ModalReportEvent("Error", 18, "El correo ingresado no es válido");
            document.getElementById(inputId).value  = "";

            return false;

        }else{
            return true;
        }
    }

    isValidPhone(inputId){
        var regex   = /^[3-9][0-9]{7}$/;
        
        if( !regex.test(this.phone) ){
//            ModalReportEvent("Error", 35, "El número telefónico ingresado es incorrecto");
            document.getElementById(inputId).value  = "";
            this.phone  = "";

            return true;

        }else{
            return true;
        }
    }

    add(){
        return new Promise((resolve, reject) => {
            let data    = new FormData();

            data.append("idCompany",    this.idCompany);
            data.append("username",     this.username);
            data.append("permissions",  this.permissions);
            data.append("name",         this.name);
            data.append("lastname",     this.lastname);
            data.append("email",        this.email);
            data.append("phone",        this.phone);
            
            $.ajax({
                url:            "backend/addUser.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (error)=>{ console.log(error); reject(false);},
                success:        (response)=>{
                    setTimeout(()=>{
                        CloseSpinner();

                        if( response.ERROR === true ){
                            ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                            resolve(false);

                        }else{
                            ModalReportEvent("Operación Exitosa", "", response.MESSAGE);
                            resolve(true);
                        }
                    }, delay);
                }
            });
        });
    }

    update(){
        return new Promise((resolve, reject) => {
            let data    = new FormData();

            data.append("id", this.id);
            data.append("username", this.username);
            data.append("permissions", this.permissions);
            data.append("name", this.name);
            data.append("lastname", this.lastname);
            data.append("email", this.email);
            data.append("phone", this.phone);

            $.ajax({
                url:            "backend/updateUser.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (error)=>{console.log(error); reject(false);},
                success:        (response)=>{
                    setTimeout(()=>{
                        CloseSpinner();

                        if(response.ERROR){
                            ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                            resolve(false);
                            
                        }else{
                            ModalReportEvent("Operación Exitosa", "", response.MESSAGE);
                            resolve(true);
                            
                        }
                    }, delay);
                }
            });
        });
    }

    delete(){
        return new Promise((resolve, reject) => {
            let data    = new FormData();
            
            data.append("username", this.username);

            $.ajax({
                url:            "backend/deleteUser.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (error)=>{console.log(error); reject(false);},
                success:        (response)=>{
                    setTimeout(()=>{
                        CloseSpinner();

                        if(response.ERROR){
                            ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                            resolve(false);

                        }else{
                            ModalReportEvent("Operación Exitosa", "", response.MESSAGE);
                            resolve(true);
                        }
                    }, delay);
                }
            });
        });
    }

    /**
     * 
     * @param {number} username: The username what will search to fill the inputs
     */
    get(username){
        return new Promise((resolve, reject) => {
            let data    = new FormData();
            data.append("username", username);

            $.ajax({
                url:            "backend/getUser.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (response)=>{console.log(response); reject(false);},
                success:        (response)=>{
                    if(response.ERROR){ 
                        ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                        document.getElementById("searchUname").value    = "";
                        resolve(false);
                    
                    }else{
                        this.idcompany      = sessionStorage.getItem("ID_COMPANY");
                        this.username       = username;
                        this.permissions    = response.permissions;
                        this.name           = response.name;
                        this.lastname       = response.lastname;
                        this.email          = response.email;
                        this.phone          = response.phone;
                        this.id             = response.id;

                        resolve(true);
                    }
                }
            });
        });
    }
}

class Table{
    /**
     * @param {string} id : Id of the table
     * @param {json} header : Header of the table
     * @param {number} columns : Number of columns (OPTIONAL)
     * @param {boolean} clone: Do you want to clone some table? Set the id
     */
    constructor(id, header, columns, clone){
        let table, container;

        if(clone){
            table   = document.getElementById(id);

            this._table     = table;
            this._columns   = table.children[0].children[0].childElementCount;
            this._tbody     = table.children[1];
            this._rows      = table.children[1].rows.length + 1;
        
        }else{
            switch(document.getElementById(id)){
                case null:
                case undefined:
                    container   = document.createElement("div");
                    container.setAttribute("class", "table-modal table-reponsive-xl");
                    container.setAttribute("id", "container:" + id);
                    container.setAttribute("style", header.father.style);
    
                    table       = document.createElement("table");
                    table.setAttribute("class", "table table-striped");
                    table.setAttribute("id", id);
                    table.setAttribute("style", header.table.width);
    
                    let thead       = document.createElement("thead");
                    let row         = document.createElement("tr");
    
                    for(let i=0; i<header.length; i++){
                        let cell  = document.createElement("th");
                        cell.setAttribute("scope", "col");
    
                        if(header[i].width != ""){
                            cell.setAttribute("width", header[i].width);
                        };
    
                        let name    = document.createTextNode(header[i].name);
                        cell.appendChild(name);
                        row.appendChild(cell);
                    }
    
                    thead.appendChild(row);
                    table.appendChild(thead);
                    container.appendChild(table);
                    document.getElementById(header.father.id).appendChild(container);
                    
                    columns = header.length;
    
                    break;
    
                default:
                    table           = document.getElementById(id);

                    break;
            };

            this._table     = table;
            this._columns   = columns;
            this._tbody     = document.createElement("tbody");
            this._rows      = 0;

        }

        this._id        = id;
    }

    get id(){
        return this._id;
    }

    get tbody(){
        return this._tbody;
    }

    get columns(){
        return this._columns;
    }

    get rows(){
        return this._rows;
    }

    get table(){
        return this._table;
    }

    set id(value){
        this._id        = value;
    }

    set tbody(value){
        this._tbody     = value;
    }

    set columns(value){
        this._columns   = value;
    }

    set rows(value){
        this._rows      = value;
    }

    set table(value){
        this._table     = value;
    }

    /**
     * @param {array} type: Array with the type of data (Button, Link or Text)
     * @param {array} data: Array that contains the data
     * @param {string} id: Id associated to the row (OPTIONAL)
     */
    addRow(type, data, id){
        var row     = document.createElement("tr");
        var cell    = [];

        if(id != ""){
            row.setAttribute("id", id);
        }

        for(var j=0; j<this.columns; j++){
            cell[j] = document.createElement("td");

            switch(type[j]){
                case "Button":;
                    for(let x=0; x<data[j].items; x++){
                        let textBtn = document.createTextNode(data[j][x].text);
                        let button  = document.createElement("button");
                        let icon    = document.createElement("span");

                        button.setAttribute("onclick", data[j][x].action);
                        button.setAttribute("class", data[j][x].classBtn);
                        button.setAttribute("style", data[j][x].styleBtn);
                        icon.setAttribute("class", data[j][x].classIcon);
                        
                        button.appendChild(icon);
                        button.appendChild(textBtn);

                        cell[j].appendChild(button);
                    }

                    break;
                
                case "Cell":
                    for(let x=0; x<data[j].items; x++){
                        let text    = document.createTextNode(data[j][x].text);
                        let icon    = document.createElement("span");

                        icon.setAttribute("class", data[j][x].classIcon);
                        
                        cell[j].appendChild(icon);
                        cell[j].appendChild(text);
                    }

                    break;

                case "Link":
                    let text    = document.createTextNode(data[j].content);
                    let link    = document.createElement("a");
                    link.href   = data[j].function;
                    link.appendChild(text);
                    cell[j].appendChild(link);

                    break;
             
                case "List":
                    for(let x=0; x<data[j].length; x++){
                        let container   = document.createElement("div");
                        let content     = document.createTextNode(data[j][x].name);
                        
                        container.setAttribute("style", "margin-bottom: 3%;");

                        container.appendChild(content);
                        cell[j].appendChild(container);
                    }

                    break;

                case "Select":
                    let select  = document.createElement("select");
                    select.setAttribute("class", "custom-select");

                    for(var i=0; i<data[j].options.length; i++){
                        let option  = document.createElement("option");
                        option.textContent  = data[j].options[i];
                        select.add(option);
                    }

                    switch(data[j].type){
                        case "state":
                            if(data[j].value == "1"){
                                select.value    = "Realizada";
        
                            }else if(data[j].value == "0"){
                                select.value    = "Pendiente";
        
                            }else{
                                select.value    = "Error Values";
        
                            }

                            break;
                
                        case "importance":
                            if(data[j].value == "1"){
                                select.value    = "Urgente";
        
                            }else if(data[j].value == "0"){
                                select.value    = "Normal";
        
                            }else{
                                select.value    = "Error Importance";
        
                            }

                            break;

                        default:
                            console.log("ERROR TYPE SELECT");
                    }
                    
                    cell[j].appendChild(select);

                    break;

                case "Text":
                    let content = document.createTextNode(data[j]);
                    cell[j].appendChild(content);

                    break;

                case "TextArea":
                    let textArea            = document.createElement("textarea");
                    textArea.textContent    = data[j];
                    cell[j].appendChild(textArea);

                    break;

                default:
                    let error   = document.createTextNode("Error Type");
                    cell[j].appendChild(error);

                    break;
            }

            row.appendChild(cell[j]);
            this.rows   = this.rows + 1;
        }
        
        this.tbody.appendChild(row);
    }

    clear(){
        try{
            let table   = document.getElementById(this.id);
            table.children[1].remove();
        
        }catch(e){
            console.log("No se pueden borrar los hijos de una tabla vacia");
        }
    }

    encapsulate(){
        this.clear();
        document.getElementById(this.id).appendChild(this.tbody);
    }

}

class Activity{
    /**
     * 
     * @param {string} name: Name of the activity
     * @param {date} date: When the activity can be realice
     * @param {string} frecuency: Period to do the next maintance 
     * @param {string} location: Where the activity is associated
     * @param {string} priority: Priority of the activity. This can be Alta, Media or Baja
     * @param {string} area: Area associated to the activity. This can be Mecánica, Eléctrica or Jardinería
     * @param {text} comments: Comments associated to the activity (OPTIONAL)
     * @param {number} id: Id on the database (OPTIONAL)
     */
    constructor(name, date, frecuency, location, priority, area, comments, id){
        this._name          = name;
        this._date          = date;
        this._frecuency     = frecuency;
        this._location      = location;
        this._priority      = priority;
        this._area          = area;
        this._comments      = comments == undefined || comments == null ? "" : comments;
        this._id            = id;
        this._maintances    = "";
    }

    get name(){
        return this._name;
    }

    get date(){
        return this._date;
    }

    get frecuency(){
        return this._frecuency;
    }

    get location(){
        return this._location;
    }

    get priority(){
        return this._priority;
    }

    get area(){
        return this._area;
    }

    get comments(){
        return this._comments;
    }

    get id(){
        return this._id;
    }

    get maintances(){
        return this._maintances;
    }

    set name(value){
        this._name      = value;
    }

    set date(value){
        this._date      = value;
    }

    set frecuency(value){
        value   = value.replace(/ /g, "");
        this._frecuency = value;
    }

    set location(value){
        this._location  = value;
    }

    set priority(value){
        value   = value.replace(/ /g, "");
        this._priority  = value;
    }

    set area(value){
        value   = value.replace(/ /g, "");
        this._area      = value;
    }

    set priority(value){
        value   = value.replace(/ /g, "");
        this._priority  = value;
    }

    set comments(value){
        this._comments  = value;
    }

    set id(value){
        this._id    = value;
    }

    set maintances(value){
        this._maintances        = value;
    }

    /**
     * 
     * @param {string} inputId : Id of the input that containts the name 
     * @param {number} index : If is create by the application, the value is -1
     */
    isValidName(inputId, index){
        var regex   = /([a-zA-Z0-9\ \u00C0-\u00FF]){1,50}$/;
            
        if(!regex.test(this.name)){
            if(index == -1){
                ModalReportEvent("Error", 17, "El nombre ingresado contiene carácteres inválidos");
                document.getElementById(inputId).value  = "";
         
            }else{
                setTimeout(()=>{
                    CloseSpinner();
                    ModalReportEvent("Error", 46, "El nombre en la posición " + index + " contiene carácteres inválidos");
                }, 500);
            }
            
            return false;
            
        }else{
            return true;
        }
    }
    
     /**
     * 
     * @param {string} inputId : Id of the input that containts the name 
     * @param {number} index : If is create by the application, the value is -1
     */
    isValidDate(inputId, index){
        var today   = new Date();
        today       = today.toISOString().slice(0,10);
    
        let dateAux = this.date.split("-");

        if( dateAux.length == 3 ){
            return  true;
          /*  let dateRequired    = "";
            
            if( index == -1 ){
                dateRequired    = dateAux[0] + "-" + dateAux[1] + "-" + dateAux[2];
            }else{
                dateRequired    = dateAux[2] + "-" + dateAux[1] + "-" + dateAux[0];
            }
    
            var date    = new Date( dateRequired );
            date        = date.toISOString().slice(0,10);
    
            var date    = new Date(this.date);
            date        = date.toISOString().slice(0,10);

            if( date < today ){
                if(index == -1){
                    ModalReportEvent("Error", 52, "No es posible iniciar actividades en periodos anteriores a hoy");
                    document.getElementById(inputId).value  = "";

                }else{
                /*    setTimeout(()=>{
                        CloseSpinner();
                        ModalReportEvent("Error", 47, "La fecha de inicio en la fila " + index + " es previa al dia de hoy");
                    }, 500);
                
                    return true;
                }
    
                return false;
            
            }else{
                return true;
            
            }
    */
        }else{
            if( index != -1){
                setTimeout(()=>{
                    CloseSpinner();
                    ModalReportEvent("Error", 64, "La fecha de inicio en la fila " + index + " contiene un error de escritura");
                }, 500);

            }else{
                ModalReportEvent("Error", "MODIFICAR", "La fecha ingresada es incorrecta");
                document.getElementById(inputId).value  = "";

            }

            return false;
        }
    }

     /**
     * 
     * @param {string} inputId : Id of the input that containts the name 
     * @param {number} index : If is create by the application, the value is -1
     */
    isValidFrecuency(inputId, index){
        switch(this.frecuency){
            case "Diaria":
            case "Semanal":
            case "Quincenal":
            case "Mensual":
            case "Bimensual":
            case "Trimestral":
            case "Semestral":
            case "Anual":
            case "Bianual":
            case "Trianual":
                return true;
            default:
                if(index == -1){
                    ModalReportEvent("Error", 20, "La frecuencia ingresada no es válida");
                    document.getElementById(inputId).value  = "";
    
                }else{
                    setTimeout(()=>{
                        CloseSpinner();
                        ModalReportEvent("Error", 20, "La frecuencia en la posición " + index +" es incorrecta.");
                    }, 500);
                }
    
                return false;
        }
    }

     /**
     * 
     * @param {string} inputId : Id of the input that containts the name 
     * @param {number} index : If is create by the application, the value is -1
     */
    isValidLocation(inputId, index){
        let target      = this.location;
        let found       = false;
        let locations   = document.getElementById(inputId); 
    
        for(var i=0; i<locations.length; i++){
            if( target != "" && target == locations.children[i].value ){
                found   = true;
                break;
            }
        }
    
        if(found){
            return true;

        }else{
            if(index == -1){
                ModalReportEvent("Error", "MODIFICAR", "La ubicación selecionada no es válida");
                document.getElementById(inputId).value  = "";

            }else{
                setTimeout(()=>{
                    CloseSpinner();
                    ModalReportEvent("Error", 43, "La ubicación en la posición " + index + " no está registrada");
                }, delay);
            }

            return false;
        }
    }

    /**
     * 
     * @param {string} inputId : Id of the input that containts the name 
     * @param {number} index : If is create by the application, the value is -1
     */
    isValidPriority(inputId, index){
        switch(this.priority){
            case "Baja":
                return true;
            case "Media":
                return true;
            case "Alta":
                return true;
            default:
                if(index == -1){
                    ModalReportEvent("Error", "MODIFICAR", "La prioridad selecionada no es válida");
                    document.getElementById(inputId).value  = "";
    
                }else{
                    setTimeout(()=>{
                        CloseSpinner();
                        ModalReportEvent("Error", 42, "La prioridad en la posición " + index + " es incorrecta. Sólo se acepta 'Alta', 'Media' o 'Baja'");
                    }, 500);
                }
    
                return false;
        }
    }

    /**
     * 
     * @param {string} inputId : Id of the input that containts the name 
     * @param {number} index : If is create by the application, the value is -1
     */
    isValidArea(inputId, index){
        switch(this.area){
            case "Mecánica":
                return true;
            case "Eléctrica":
                return true;
            case "Jardinería":
                return true;
            default:
                if(index == -1){
                    ModalReportEvent("Error", 44, "El área seleccionada no es válida");
                    document.getElementById(inputId).value  = "";
    
                }else{
                    setTimeout(()=>{
                        CloseSpinner();
                        ModalReportEvent("Error", 44, "El área en la posición " + index + " es incorrecta. Sólo se acepta 'Mecánica', 'Eléctrica' o 'Jardinería'");
                    }, 500);
                }
    
                return false;
        }
    }

    frecuencyToPeriod(){
        switch(this.frecuency){
            case "Diaria":
                return 1;
            case "Semanal":
                return 7;
            case "Quincenal":
                return 15;
            case "Mensual":
                return 30;
            case "Bimensual":
                return 60;
            case "Trimestral":
                return 90;
            case "Semestral":
                return 180;
            case "Anual":
                return 360;
            case "Bianual":
                return 720;
            case "Trianual":
                return 1080;
            default:
                return "ERROR";
        }
    }

    /**
     * @param {boolean} showMessage : Do you want to show an message when is added an activity?
     * @param {boolean} isExcel: You are adding the data from an excel?  
     */
    add(showMessage, isExcel){
        return new Promise((resolve, reject) => {
            let data    = new FormData();

            data.append("isExcel", isExcel);
            data.append("name", this.name);
            data.append("date", this.date);
            data.append("frecuency", this.frecuencyToPeriod());
            data.append("location", this.location);
            data.append("priority", this.priority);
            data.append("area", this.area);
            data.append("comments", this.comments);

            $.ajax({
                url:            "backend/addActivity.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (response)=>{console.log(response); reject(false)},
                success:        (response)=>{
                    if(response.ERROR){
                        ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                        resolve(false);
                    }else{
                        if(showMessage){
                            ModalReportEvent("Operación exitosa", "", response.MESSAGE);
                        }
                        resolve(true);
                    }
                }
            });
        });
    }

    maintances(){
        return new Promise((resolve, reject) => {
            let data    = new FormData();
            
            data.append("idActivity", this.id);

            $.ajax({
                url:            "backend/getRecordsPerActivity.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (error)=>{console.log(error); reject(false)},
                success:        (response)=>{
                    if(response.ERROR){
                        ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                        resolve(false);
                    
                    }else{
                        this.maintances     = response;
                        resolve(true);
                    }
                }
            });
        });
    }

    update(){
        return new Promise((resolve, reject) => {
            let data    = new FormData();
            data.append("id", this.id);
            data.append("name", this.name);
            data.append("date", this.date);
            data.append("frecuency", this.frecuencyToPeriod());
            data.append("location", this.location);
            data.append("priority", this.priority);
            data.append("area", this.area);
            data.append("comments", this.comments);

            $.ajax({
                url:            "backend/updateActivity.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (response)=>{console.log(response); reject(false)},
                success:        (response)=>{
                    setTimeout(()=>{
                        CloseSpinner();

                        if(response.ERROR){
                            ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                            resolve(false);
                        }else{
                            ModalReportEvent("Operación exitosa", "", response.MESSAGE);
                            resolve(true);
                        }
                    }, delay);
                }
            });
        });
    }

    delete(){
        return new Promise((resolve, reject) => {
            let data    = new FormData();
            data.append("id",this.id);

            $.ajax({
                url:            "backend/deleteActivity.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (response)=>{console.log(response); reject(false)},
                success:        (response)=>{
                    setTimeout(()=>{
                        if(response.ERROR){
                            ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                            resolve(false);
                        }else{
                            ModalReportEvent("Operación Exitosa", "", response.MESSAGE);
                            resolve(true);
                        }
                    }, delay);
                }
            });
        });
    }
}

class PDF{
    /**
     * 
     * @param {string} logo : Image in base 64 format 
     */
    constructor(logo){
        this._doc           = new jsPDF('p', 'pt', 'letter');
        this._margins       = {top:30, bottom:40, left:50, width:550};
        this._logo          = logo;
    }

    get doc(){
        return this._doc;
    }

    get margins(){
        return this._margins;
    }

    get logo(){
        return this._logo;
    }

    get title(){
        return this._title;
    }

    set doc(value){
        this._doc       = value;
    }

    set margins(value){
        this._margins   = value;
    }

    set logo(value){
        this._logo      = value;
    }

    set title(value){
        this._title     = value;
    }

    setTitle(title){
        this.doc.addImage(this.logo,
            'JPEG',
            this.margins.left,
            this.margins.top,
            100,
            50
        );

        this.nextLine(35);
        this.title          = title;

        this.doc.text(this.title, this.margins.left + 150, this.margins.top);
    }

    setRecord(value){
        let string;

        switch (value.toString().split("").length){
            case 1:
                string  = "N° 00000" + value;
                break;
            case 2:
                string  = "N° 0000" + value;
                break;
            case 3:
                string  = "N° 000" + value;
                break;
            case 4:
                string  = "N° 00" + value;
                break;
            case 5:
                string  = "N° 0" + value;
                break;
            case 6:
                string  = "N° " + value;
                break;
            default:
                string  = "ERROR";
                break;
        }

        this.doc.text(string, this.margins.left + 400, this.margins.top);
    }

    /**
     * 
     * @param {string} type : The type of data can be Linear | Table 
     * @param {object} data : Data to show
     * @param {boolean} clone : If the data is an table, do you want to clone it?
     * @param {number} limit : Limit to clone, for example an table
     */
    setBody(type, data, clone, limit){
        this.nextLine(50);
        this.doc.setFontSize(12);

        switch(type){
            case "Linear":
                for(var i=0; i<data.length; i++){
                    this.doc.text(data[i].title, this.margins.left, this.margins.top);
                    this.doc.text(data[i].data, this.margins.left + data.position, this.margins.top);
                
                    if( data.length - i != 1 ){
                        this.nextLine(25);
                    }
                }

                break;

            case "Table":
                let objectToPrint;

                if(clone){
                    objectToPrint  = document.getElementById(data).cloneNode(true);
                    objectToPrint.rows[0].cells[limit].remove();
                
                    for( var i=0; i<objectToPrint.children[1].children.length; i++ ){
                        objectToPrint.children[1].rows[i].cells[5].remove();
                    }
                
                }else{
                    objectToPrint   = data;
                }
                
                this.doc.autoTable({
                    startY: this.margins.top,
                    html: objectToPrint,
                });

                break;

            default:
                break;
        }

    }

    /**
     * 
     * @param {number} value : Space between the current line to the next line
     */
    nextLine(value){
        this.margins.top    = this.margins.top + value;
    }

    print(name){
        if(name == ""){ return; }
        this.doc.save(name + ".pdf");
    }
}

class Guide{
    /**
     * 
     * @param {number} id : Id on the database
     * @param {string} username : User associated to the new guide
     * @param {array} activities : Activities´s list in the guide
     * @param {string} dateEmitted : Date when the guide was emitted
     * @param {string} dateFinished : Date when the guide was finished
     */
    constructor(id, username, activities, dateEmitted){
        this._id            = id;
        this._username      = username;
        this._activities    = activities;
        this._dateEmitted   = dateEmitted;
        this._lastOperation = 0;
        this._state         = 0;
        this._states        = [];
        this._observations  = [];
        this._importances   = [];
        this._piezometrias  = [];
        this._annexes       = [];
        this._warnings      = [];
    }

    get id(){
        return this._id;
    }

    get username(){
        return this._username;
    }

    get activities(){
        return this._activities;
    }

    get dateEmitted(){
        return this._dateEmitted;
    }

    get lastOperation(){
        return this._lastOperation;
    }

    get states(){
        return this._states;
    }

    get state(){
        return this._state;
    }

    get observations(){
        return this._observations;
    }

    get importances(){
        return this._importances;
    }

    get piezometrias(){
        return this._piezometrias;
    }

    get annexes(){
        return this._annexes;
    }

    get warnings(){
        return this._warnings;
    }

    set id(value){
        this._id        = value;
    }

    set username(value){
        this._username  = value;
    }

    set activities(value){
        this._activities = value;
    }

    set dateEmitted(value){
        this._dateEmitted = value
    }

    set lastOperation(value){
        this._lastOperation     = value;
    }

    set states(value){
        this._states     = value;
    }

    set state(value){
        this._state     = value;
    }

    set observations(value){
        this._observations  = value;
    }

    set importances(value){
        this._importances   = value;
    }

    set piezometrias(value){
        this._piezometrias  = value;
    }

    set annexes(value){
        this._annexes       = value;
    }

    set warnings(value){
        this._warnings      = value;
    }

    /**
     * 
     * @param {boolean} deleteSuggestion : Do you want to delete the suggestion associated?
     * @param {number} idSuggestion: Id of the suggestion (OPTIONAL) 
     */
    add(deleteSuggestion, idSuggestion){
        return new Promise((resolve, reject) => {
            let data    = new FormData();
            data.append("username", this.username);
            data.append("activities", this.activities);
            data.append("deleteSuggestion", deleteSuggestion);
            data.append("idSuggestion", idSuggestion);

            $.ajax({
                url:            "backend/addRecord.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (error)=>{console.log(error); reject(false)},
                success:        (response)=>{
                    if(response.ERROR){
                        ModalReportEvent("Error", DATA.ERRNO, DATA.MESSAGE);
                        resolve(false);
                    }else{
                        this.id             = response.id;
                        resolve(true);
                    }
                }
            });
        });
    }

    /**
     * 
     * @param {number} username : Who is request the data
     * @param {boolean} isAdmin : Is the user an admin?
     */
    get(username, isAdmin){
        return new Promise((resolve, reject) => {
            let data    = new FormData();

            data.append("idRecord", this.id);
            data.append("username", username);
            data.append("isAdmin", isAdmin);

            $.ajax({
                url:            "backend/getRecord.php",
                type:           "POST",
                data:           data,
                contentType:    false,
                processData:    false,
                error:          (error)=>{console.log(error); reject(false)},
                success:        (response)=>{
                    if(response.ERROR){
                        ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                        resolve(false);

                    }else{
                        for(let i=0; i<response.COUNT; i++){
                            let activity    = new Activity(
                                response[i].name,
                                "",
                                "",
                                response[i].location,
                                "",
                                "",
                                "",
                                response[i].id
                            );

                            let observation = "";
                            let found       = false;
                            let index       = 0;

                            try{
                                for(let j=0; j<response.observations[i].length; j++){
                                    let idAux   = response.observations[j].split("|")[0];
    
                                    if(idAux == response[i].id){
                                        found   = true;
                                        index   = j;
    
                                        break;
                                    }
                                }
    
                                if(found){
                                    let auxObs  = response.observations[index].replace(/\r\n/g, "");
                                    observation = auxObs.split("|")[1];
                                }
                            
                            }catch(e){
                                console.log("La actividad no registra observaciones");
                            }

                            this.importances.push(response[i].importance);
                            this.observations.push(observation);
                            this.activities.push(activity);
                            this.states.push(response[i].state);
                            this.annexes.push(response.annexes[i]);
                            this.warnings.push(response.warnings[i]);
                        }

                        this.state          = response.stateRecord;
                        this.username       = response.name_mandated + " " + response.lastname_mandated;
                        this.dateEmitted    = assingFormatDate(response.dateStart);
                        
                        resolve(true);
                    }
                }
            });
        });
    }

    update(){
        return new Promise((resolve, reject) => {
            let data = new FormData();

            data.append("idRecord", this.id);
            data.append("arrayObservations", this.observations);
            data.append("arrayStates", this.states);
            data.append("piezometriaData", this.piezometrias);
            data.append("arrayImportances", this.importances);
        
            $.ajax({
                type:           "POST",
                url:            "backend/updateRecord.php",
                contentType:    false,
                processData:    false,
                data:           data,
                error:          (error)=>{console.log(error); reject(false)},
                success:        (response)=>{
                    if(response.ERROR){
                        ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
                        resolve(false);

                    }else{
                        ModalReportEvent("Operación exitosa", "", response.MESSAGE);
                        resolve(true);
                    }
                }
            });
        });
    }
}

function capitalCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * 
 * @param {string} value :Value of the date
 * @param {boolean} type : Type 1 =  | Type 2 = 
 */
function assingFormatDate(value){
    let dateAux = value.split("-");
    return dateAux[2] + "-" + dateAux[1] + "-" + dateAux[0];
}

/**
 * 
 * @param {number} value :The value will be parse to the period to frecuency
 */
function periodToFrecuency(value){
    switch(value){
        case 1:
            return "Diaria";
        case 7:
            return "Semanal";
        case 15:
            return "Quincenal";
        case 30:
            return "Mensual";
        case 60:
            return "Bimensual";
        case 90:
            return "Trimestral";
        case 180:
            return "Semestral";
        case 360:
            return "Anual";
        case 720:
            return "Bianual";
        case 1080:
            return "Trianual";
        default:
            return "ERROR";
    }
}

/**
 * 
 * @param {string} functionName : Function that will be executed
 * @param {string} inputId : Input that will trigger the function
 */
function EventToChangeInput(functionName, inputId){
    document.getElementById(inputId).addEventListener("change", function(event){
        if( event.which != 13 || event.keyCode != 13 ){
            eval(functionName);
        }
    });
}

function EventToPressEnter(functionName, inputId){
    
    if( inputId === "" ){
        document.addEventListener("keypress", function(event){
            if (event.which == 13 || event.keyCode == 13){
                window[functionName]();
            }
        });
        
    }else{
        document.getElementById(inputId).addEventListener("keypress", function(event){
            if (event.which == 13 || event.keyCode == 13){
                window[functionName]();
            }
        });
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};

function RemoveElement(id){
var element = document.getElementById(id);
element.parentNode.removeChild(element);
}
 
function ShowSpinner(){
    $("#modalSpinner").modal('show');
}

function CloseSpinner(){
    $("#modalSpinner").modal("toggle");
}

function SortSelect(select){
    $(select).each(function() {            
        // Keep track of the selected option.
        var selectedValue = $(this).val();     
        // Sort all the options by text. I could easily sort these by val.
        $(this).html($("option", $(this)).sort(function(a, b) {
            return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
        }));     
        // Select one option.
        $(this).val(selectedValue);
    });
}

function FormatNumber(Value){
    
    var dot     = String(Value).split(".");
    
    if( dot[0] == "0" ){
        Value   = parseFloat(Value).toFixed(2);
        return Value;
       
    }else{
        Value       = parseFloat(Value).toFixed(0);
        Value       = String(Value).split("");
    
        var aux     = "";
        var count   = 0;
                        
        for( var i=Value.length; i>0; i-- ){
            
            if( count == 3 ){
                aux     = Value[i - 1] + "." + aux;
                count   = 1;
            
            }else{
                aux     = Value[i - 1] + aux;
                count++;
            }
        }
        
        return aux;
    }
}

function SetTitle(Title){
document.getElementById("titlePage").innerHTML  = Title;
}

function FormatDate(date){

    date    = date.split('-');
    date    = date[2] + "/" + date[1] + "/" + date[0];
    
  // let newDate     = new Date(date);
   // let currentDate = newDate.toISOString().slice(0,10);
 return date;
 //   return currentDate;
}

function FocusOn(id){
    document.getElementById(id).focus();
}

function NormalizeString(parameter1){
    var aux = parameter1.split(" ");
    aux[0]  = aux[0].toLowerCase();
    
    return aux[0].charAt(0).toUpperCase() + aux[0].slice(1);
}

function CloseModal(id) {
$(id).modal('hide');
$('body').children('div:nth-last-child(1)').fadeOut();
$('body').children('div:nth-last-child(2)').fadeOut();
}



 /*
This function was designed to verify the permissions assigned to a new user.
Here we only have four permissions, these are:
 * 1 = Administrador
 * 2 = Mecánico
 * 3 = Eléctrico
 * 4 = Jardinero
*/

function areValidPermissions(option){

    var permissions = "";
    var error       = true;
    
    if ( option == "add" || option == "edit" ){
        var administrator   = document.getElementById(option + "Administrator").checked;
        var mechanic        = document.getElementById(option + "Mechanic").checked;
        var electrician     = document.getElementById(option + "Electrician").checked;
        var gardener        = document.getElementById(option + "Gardener").checked;
        
        // Verifying if a person is administrator
        if( administrator === true ){
            permissions += "1";
            error        = false;
        }else{
            permissions += "0";
        }
        
        // Verifying if a person is mechanic
        if( mechanic === true ){
            permissions += "1";
            error        = false;
        }else{
            permissions += "0";
        }
        
        // Verifying if a person is electrician
        if( electrician === true ){
            permissions += "1";
            error        = false;
        }else{
            permissions += "0";
        }
        
        // Verifying if a person is a gardener
        if( gardener === true ){
            permissions += "1";
            error        = false;
        }else{
            permissions += "0";
        }
        
        if( error ){
            ModalReportEvent("Error", 19, "No se ha seleccionado ningún permiso");
            return "";
        }else{
            return permissions;
        }

    }else{
        ModalReportEvent("Error", 20, "La opción " + option + " no es válida dentro de los permisos");
        return "";
    }
    
 }

function getActivities(idRecord){
    return new Promise((resolve, reject) => {
        let data    = new FormData();
        data.append("all", 1);
        data.append("idRecord", idRecord);
       // data.append("arrayIdActivities", []);

        $.ajax({
            url:            "backend/getActivities.php",
            type:           "POST",
            data:           data,
            processData:    false,
            contentType:    false,
            error:          (error)=>{console.log(error); reject("")},
            success:        (response)=>{
                if(response.ERROR){
                    CloseSpinner();
                    resolve("");

                }else{
                    resolve(response);
                }
            }
        });
    });
};

function rolToPermission(idRol){
    return new Promise((resolve) => {
        let role    = document.getElementById(idRol).innerHTML;
        switch(role){
            case "Mecánico":
                resolve("Mecánica");
                break;
            case "Electricista":
                resolve("Eléctrica");
                break;
            case "Jardinero":
                resolve("Jardinería");
                break;
            default:
                resolve("ERROR");
                break;
        }
    });
}

function compareDateToToday(inputId){
    let date        = new Date(document.getElementById(inputId).value);
    let today       = new Date();

    let difference  = Math.round((today.getTime() - date.getTime()) / (1000*60*60*24));

    return difference > 0 ? true : false;
}

function clearSelect(inputId){
    let select  = document.getElementById(inputId);

    for(let i=0; i<select.length; i++){
        select.remove(i);
    }
}