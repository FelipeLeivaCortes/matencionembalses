function initRecords(){
    $.ajax({
        url:            "backend/getPendingRecords.php",
        type:           "POST",
        data:           "",
        contentType:    false,
        processData:    false,
        error:          (error)=>{console.log(error)},
        success:        (response)=>{
            setTimeout(()=>{
                CloseSpinner();

                if(response.ERROR){
                    ModalReportEvent("Advertencia", response.ERRNO, response.MESSAGE);
                
                }else{
                    let types       = [];
                    let idFather    = "body-container";
                    let idTable     = "pendingRecordTable";
    
                    let header  = {
                        0:  {   name:   "N°",
                                width:  "5%"      },
                        1:  {   name:   "N° Guía",
                                width:  "10%"   },
                        2:  {   name:   "Fecha de Inicio",
                                width:  "15%"   },
                        3:  {   name:   "Días de Atraso",
                                width:  "15%"      },
                        4:  {   name:   "Estado",
                                width:  "15%"      },
                        5:  {   name:   "Acción",
                                width:  "15%"      },
                        length:     6,
                        table:  {
                                    width:  "width: 100%",
                                },     
                        father: {   id:     idFather,
                                    style:  "height: 300px; overflow: scroll"
                                }
                    }
    
                    table   = new Table(
                        idTable,
                        header,
                        header.length,
                        false
                    );
    
                    types   = ["Text","Link","Text","Text","Text"];

                    for(let i=0; i<response.count; i++){
                        let data    = [];
                        let late;
                        let state;
                        let button;

                        let link    = { content:    response[i].id,
                                        function:   "javascript:getRecord('" + response[i].id + "')",                
                                    };

                        if(response[i].state == 0){
                            types.push("Button");
                            late    = response[i].daysLate;
                            state   = "Pendiente";
                            button  = { 
                                0:  {   text:       "Anular",
                                        styleBtn:   "",
                                        classBtn:   "btn btn-danger btn-sm",
                                        classIcon:  "icon-circle-with-cross icon-space",
                                        action:     "javascript:openModalDeleteRecord(" + response[i].id + ");"
                                    },
                                items:  1,
                            };
                        
                        }else{
                            types.push("Text");
                            late    = "No Aplica";
                            state   = "Realizada";
                            button  = "No Aplica";

                        }

                        data    = [ i + 1,
                                    link,
                                    FormatDate(response[i].dateStart),
                                    late,
                                    state,
                                    button
                        ];                        
        
                        table.addRow(types, data, "row:" + response[i].id);
                    }
                    
                    table.encapsulate();
                }
            }, delay);
        }
    });
}

function openModalDeleteRecord(idRecord){
    document.getElementById("id_to_delete").innerHTML   = "Está seguro que desea anular la guía n°: <b>" + idRecord + "</b>";
    document.getElementById("btnDeleteRecord").setAttribute("onclick", "DeleteRecord(" + idRecord + ")")
    $('#deleteGuideForm').modal('show');
}

function DeleteRecord(id){
    $("#deleteGuideForm").modal("toggle");

    var formData    = new FormData();
    formData.append("idRecord", id);

    $.ajax({
        url:            "backend/deleteRecord.php",
        type:           "POST",
        data:           formData,
        contentType:    false,
        processData:    false,
        error:          (error)=>{console.log(error);},
        success:        (response)=>{
            if(response.ERROR){
                ModalReportEvent("Error", response.ERRNO, response.MESSAGE);
            
            }else{
                let idTable = "pendingRecordTable";
                let table   = document.getElementById(idTable);
                let target  = "row:" + id;
                let index   = 0;

                if( table.children[1].children.length > 1 ){
                    for(var i=0; i<table.children[1].children.length; i++){
                        if( target == table.children[1].children[i].id ){
                            table.children[1].children[i].remove();
                            index   = i;

                            break;
                        }
                    }

                    for(var j=index; j<table.children[1].children.length; j++){
                        table.children[1].children[j].cells[0].textContent  = j + 1;
                    }
    
                }else{
                    document.getElementById("container:" + idTable).remove();
                }

                ModalReportEvent("Operación Exitosa", "", response.MESSAGE);
            }
        }
    });
}

function FormatSerial(id){
    var stringAux   = id.toString();
    var arrayAux    = stringAux.split("");
    var items       = arrayAux.length;
    
    switch(items){
        case 1:
            return '00000' + stringAux;
        case 2:
            return '0000' + stringAux;
        case 3:
            return '000' + stringAux;
        case 4:
            return '00' + stringAux;
        case 5:
            return '0' + stringAux;
        case 6:
            return stringAux;
        default:
            return 'OVERFLOW SERIALS';
    }

}

function printRecord(idRecord){
    document.getElementById("printPdfBtn").disabled = true;
    
    $('#searchRecordForm').modal('toggle');
    
    let pdf  = new PDF(imgData);
    pdf.setTitle("Guía de Mantención N° " + idRecord);

    var today       = new Date();
    var date        = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
    var time        = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dataTime    = date + ' ' + time;

    pdf.setBody("Linear", {
        0: {
            title:      "Fecha: ",
            data:       dataTime
        },
        1: {
            title:      "Encargado: ",
            data:       document.getElementById("userMandated").value
        },
        2:  {
            title:      "Fecha de Emisión: ",
            data:       document.getElementById("dateStart").value
        },
        position: 110,
        length: 3
    }, false, 0);

    pdf.setBody("Table", 'tablePendingRecords', true, 5);
    
    pdf.print("Guía de Manteción_" + document.getElementById("userMandated").value + "_" + date);

    ClearTable('tablePendingRecords');
    document.getElementById("printPdfBtn").disabled = false;
}