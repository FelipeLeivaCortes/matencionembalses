<?php
    session_start();
    include "configuration.php";

	if(	empty($LINK) ){
		$DATA["ERROR"]      = true;
        $DATA["ERRNO"]      = 1;
		$DATA["MESSAGE"]    = "El servidor no responde";
	
	}else{

    /***************************************************************************** */
	/****** ---> DO NOT EDIT THIS UNLESS IT EXTREMELY NECESSARY <--- ************* */
	/***************************************************************************** */

        $USERNAME   = $_SESSION["userDatabase"];
        $PASSWORD   = $_SESSION["passDatabase"];
        $ID_COMPANY = $_SESSION["idCompany"];
        $DATABASE   = "empresa".$ID_COMPANY;
        
        $LINK       ->  close();
        $LINK       =   new mysqli($URL, $USERNAME, $PASSWORD, $DATABASE);

    /***************************************************************************** */
    /***************************************************************************** */
 
        $arrayObservations  =   explode(",", $_POST["arrayObservations"]);
        $arrayStates        =   explode(",", $_POST["arrayStates"]);
        $piezometrias       =   explode(",", $_POST["piezometriaData"]);

        $data		=	array(
			"type"			=>	"SELECT",
			"query"			=>	"SELECT actividades, estados FROM registro WHERE id = ?;",
			"parameters"	=>	array("i", $_POST["idRecord"])
		);
		$result1	=	query($LINK, $data, false);	
	
		if(sizeof($result1) == 0){
            $DATA["ERROR"]      = true;
            $DATA["ERRNO"]      = 8;
            $DATA["MESSAGE"]    = "No se han encontrado resultados en su búsqueda";
      
        }else if(sizeof($result1) > 1){
            $DATA["ERROR"]      = true;
            $DATA["ERRNO"]      = 9;
            $DATA["MESSAGE"]    = "Se han encontrado duplicidades en sus datos. Comuníquese con el administrador";

        }else{
            $arrayActivities        =   explode(",", $result1[0]["actividades"]);
            $arrayStatesOriginal    =   explode(",", $result1[0]["estados"]);
            $error                  =   false;
            $today	                =   date('Y-m-d');

            $pathFolder             =   $PATH_FILES.$ID_COMPANY."/records/record_".$_POST["idRecord"]."/";
            $pathFile               =   $pathFolder."record_".$_POST["idRecord"].".txt";
            
            if(!file_exists($pathFolder)){
                mkdir($pathFolder, 0777, true);
            }

            if(file_exists($pathFile)){
                unlink($pathFile);
            }

            for($i=0; $i<sizeof($arrayStates); $i++){
                $idActivity = intval($arrayActivities[$i]);

                if( $arrayStates[$i] == "1" ){
                    $data		=	array(
                        "type"			=>	"SELECT",
                        "query"			=>	"SELECT nombre, ultimaMantencion, frecuencia FROM actividad WHERE id = ?",
                        "parameters"	=>	array("i", $idActivity)
                    );
                    $result2    =	query($LINK, $data, false);	
                
                    if(sizeof($result2) == 0){
                        $DATA["ERROR"]      = true;
                        $DATA["ERRNO"]      = 8;
                        $DATA["MESSAGE"]    = "No se han encontrado resultados en su búsqueda";
                        $error              = true;
                        break;
                    
                    }else if(sizeof($result2) > 1){
                        $DATA["ERROR"]      = true;
                        $DATA["ERRNO"]      = 9;
                        $DATA["MESSAGE"]    = "Se han encontrado duplicidades en sus datos. Comuníquese con el administrador";
                        $error              = true;
                        break;
                
                    }else if($result2[0]["ultimaMantencion"] == $today){
                        array_push($DATA, [
                            'idActivity'        => $idActivity,
                            'operation'         => 'Update',
                            'statusActivity'    => 'Warning',
                            'message'           => 'La actividad con id: '.$idActivity.' ya fue modificada hoy',
                        ]);
                    
                    }else{
                        $nextMaintein   =   date('Y-m-d', strtotime($today.'+ '.$result2[0]["frecuencia"].' days'));

                        $data		=	array(
                            "type"			=>	"UPDATE",
                            "query"			=>	"UPDATE actividad SET ultimaMantencion = ?, proximaMantencion = ? WHERE id = ?;",
                            "parameters"	=>	array('ssi', $today, $nextMaintein, $idActivity)
                        );
                        $result3    =	query($LINK, $data, false);	

                        if($result3 != 1){
                            array_push($DATA, [
                                'idActivity'        =>  $idActivity,
                                'operation'         =>  'Update',
                                'statusActivity'    =>  'Error',
                                'message'           =>  'Error al actualizar la fecha de mantención de la actividad de código '.$idActivity
                            ]);

                            $error  = true;
                            break;

                        }else{
                            array_push($DATA, [
                                'idActivity'        =>  $idActivity,
                                'operation'         =>  'Update',
                                'statusActivity'    =>  'OK',
                                'message'           =>  ''
                            ]);
                            
                            $arrayStatesOriginal[$i]    = "1";

                            if($result2[0]["nombre"] == 'realizar piezometría'){
                                $data		=	array(
                                    "type"			=>	"INSERT",
                                    "query"			=>	"INSERT INTO piezometria (fecha, cota, pcg1, pcg2, pcg3, pcg4, pcg5, pcg6, pcg7, pcg8, pcg9, pcg10,
                                                            pcg11, pcg12, pcg13, pcg14) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
                                    "parameters"	=>	array("sddddddddddddddd", $today, $piezometrias[0], $piezometrias[1], $piezometrias[2], $piezometrias[3], 
                                                            $piezometrias[4], $piezometrias[5], $piezometrias[6], $piezometrias[7], $piezometrias[8], $piezometrias[9],
                                                            $piezometrias[10], $piezometrias[11], $piezometrias[12], $piezometrias[13], $piezometrias[14]
                                                        )
                                );
                                $result4    =	query($LINK, $data, false);	

                                if($result4 != 1){
                                    array_push($DATA, [
                                        'idActivity'        =>  $idActivity,
                                        'operation'         =>  'Update',
                                        'statusActivity'    =>  'Error',
                                        'message'           =>  'Error al actualizar los datos de la piezometria'
                                    ]);

                                    $error  = true;
                                    break;
                                }
                            }
                        }
                    }
                }

                if(file_exists($pathFile)){
                    $file   = fopen($pathFile, "a");
                    $line   = str_replace("|", ",", $arrayObservations[$i]);
                    fwrite($file, PHP_EOL.$idActivity."|".$line);
                    fclose($file);
                
                }else{
                    $file   = fopen( $pathFile, "w");
                    $line   = str_replace("|", ",", $arrayObservations[$i]);
                    fwrite($file, $idActivity."|".$line);
                    fclose($file);

                }
            }

            if(!$error){
                $finished   = true;

                for($i=0; $i<sizeof($arrayStatesOriginal); $i++){
                    if( $arrayStatesOriginal[$i] == "0" ){
                        $finished   = false;
                        break;
                    }
                }

                if($finished){
                    $data		=	array(
                        "type"			=>	"UPDATE",
                        "query"			=>	"UPDATE registro SET fechaTermino = ?, estado = 1 WHERE id = ?;",
                        "parameters"	=>	array('si', $today, $_POST["idRecord"])
                    );
                    $result4	=	query($LINK, $data, false);	

                    if($result4 == 0 ){
                        $DATA["ERROR"]      = true;
                        $DATA["ERRNO"]      = 8;
                        $DATA["MESSAGE"]    = "No se han encontrado resultados en su búsqueda";
                    
                    }else if($result4 > 1){
                        $DATA["ERROR"]      = true;
                        $DATA["ERRNO"]      = 9;
                        $DATA["MESSAGE"]    = "Se han encontrado duplicidades en sus datos. Comuníquese con el administrador";
                    
                    }else{
                        array_push($DATA, [
                            'idRecord'          =>  $_POST["idRecord"],
                            'operation'         =>  'Finished',
                            'statusActivity'    =>  'OK',
                            'message'           =>  'Se han realizado todas las actividades de la guía n°: '.$_POST["idRecord"]
                        ]);

                    }
                }

                $stringStates       =   implode(",", $arrayStatesOriginal);

                $data		=	array(
                    "type"			=>	"UPDATE",
                    "query"			=>	"UPDATE registro SET estados = ?, importancias = ? WHERE id = ?;",
                    "parameters"	=>	array('ssi', $stringStates, $_POST["arrayImportances"], $_POST["idRecord"])
                );
                $result5	=	query($LINK, $data, true);	

                if($result5 == 0 ){
                    $DATA["ERROR"]      = true;
                    $DATA["ERRNO"]      = 8;
                    $DATA["MESSAGE"]    = "No se han encontrado resultados en su búsqueda";
                
                }else if($result5 > 1){
                    $DATA["ERROR"]      = true;
                    $DATA["ERRNO"]      = 9;
                    $DATA["MESSAGE"]    = "Se han encontrado duplicidades en sus datos. Comuníquese con el administrador";
                
                }else{
                    $DATA["ERROR"] 		= false;
                    $DATA["MESSAGE"]	= "Se han registrado los datos exitosamente";

                }
            }
        }
    }
    header('Content-Type: application/json');
	echo json_encode($DATA);
?>