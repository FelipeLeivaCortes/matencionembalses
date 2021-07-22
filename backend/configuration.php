<?php
  include "sendMail.php";

  $URL            = "localhost";
	$USERNAME       = "root";
	$PASSWORD       = "";
	$ADMINISTRATION = "administration";
  $PATH_FILES     = "../docs/empresa";
  $PATH_EVENTS    = "/documents/events/";
  $PATH_MANUALS   = "/documents/manuals/";
  $defaultDate    = '1900-01-01';

  date_default_timezone_set("America/Santiago");

# The next variable is to assgin by default the last and next maintance of an activity
	

	$DATA   = array();
	$QUERY  = "";
	$KEY    = "1f4276388ad3214c873428dbef42243f";
	$LINK   = new mysqli($URL, $USERNAME, $PASSWORD, $ADMINISTRATION);

	function encrypt($message, $encryption_key){  
    $secretKey = hex2bin($encryption_key);
    $nonceSize = openssl_cipher_iv_length('aes-256-ctr');
    $nonce = openssl_random_pseudo_bytes($nonceSize);
    $ciphertext = openssl_encrypt(
      $message, 
      'aes-256-ctr', 
      $secretKey,
      OPENSSL_RAW_DATA,
      $nonce
    );

    return base64_encode($nonce.$ciphertext);
  }

  function decrypt($message, $encryption_key){
      $secretKey = hex2bin($encryption_key);
      $message = base64_decode($message);
      $nonceSize = openssl_cipher_iv_length('aes-256-ctr');
      $nonce = mb_substr($message, 0, $nonceSize, '8bit');
      $ciphertext = mb_substr($message, $nonceSize, null, '8bit');
      $plaintext= openssl_decrypt(
        $ciphertext, 
        'aes-256-ctr', 
        $secretKey,
        OPENSSL_RAW_DATA,
        $nonce
      );
      return $plaintext;
  }

  function query($link, $data, $close){
      switch($data["type"]){
      
        case("SELECT"):
          $query  =   $link->prepare($data["query"]);

          if($data["parameters"] != ""){
            call_user_func_array(array($query, 'bind_param'), json2array($data["parameters"]));
          }
          
          $query  ->  execute();
          $meta   =   $query->result_metadata();
          
          while($field = $meta->fetch_field()){
            $parameters[] = &$row[$field->name];
          } 
      
          call_user_func_array(array($query, 'bind_result'), json2array($parameters));
          
          $index  = 0;

          while($query->fetch()){ 
            $x = array();
            
            foreach($row as $key => $val){ 
              $x[$key]  = $val;
            }

            $results[]  = $x;
            $index++;
          }

          $result = $index == 0 ? [] : $results;
          $query  ->  close();

          if($close){
            $link   ->  close();
          }
         
          return  $result;

        case "DELETE":
        case "UPDATE":
        case "INSERT":
          $query  =   $link->prepare($data["query"]);

          if($data["parameters"] != ""){
            call_user_func_array(array($query, 'bind_param'), json2array($data["parameters"]));
          }
          
          $query  ->  execute();

          if($close){
            $link   ->  close();
          }

          return   $query->affected_rows;

        default:
          return "";
      }
  }

  function json2array($arr){
    if (strnatcmp(phpversion(),'5.3') >= 0){
        $refs = array();
        foreach($arr as $key => $value)
            $refs[$key] = &$arr[$key];
        return $refs;
    }
    
    return $arr;
  }

  function backupDeletedFiles($type, $id, $username){
    $folderAux  =   date("m")."-".date("Y");
    $folder     =   "../docs/empresa".$_SESSION["idCompany"]."/deleted"."/".$folderAux."/";
    $pathFile   =   "";

    if(!file_exists($folder)){
        mkdir($folder, 0777, true);
    }

    switch($type){
      case "Activity":
        $pathFile   =   $folder."activity_".$id.".txt";
        break;

      case "Record":
        $pathFile   =   $folder."record_".$id.".txt";
        break;

      default:
        $pathFile   =   $folder."error_".$id.".txt";
        break;
    }

    if(file_exists($pathFile)){
        $file   = fopen($pathFile, "a");
        fwrite($file, PHP_EOL.$id."|".date("Y-m-d")."|".$username);
        fclose($file);
    }else{
        $file   = fopen($pathFile, "w");
        fwrite($file, $id."|".date("Y-m-d")."|".$username);
        fclose($file);
    }
    
  }

  function sendReport($idCompany, $link){
    $data		=	array(
			"type"			=>	"SELECT",
			"query"			=>	"SELECT nombre, apellido, correo FROM usuario WHERE idEmpresa = ? AND permisos = '1000';",
			"parameters"	=>	array("i", $idCompany)
		);
		$results  =	query($link, $data, true);


    $folderAux  =   date("m")."-".date("Y");
    $folder     =   "../docs/empresa".$_SESSION["idCompany"]."/deleted"."/".$folderAux."/";
    $response   =   array();
    $arrayFiles =   scandir($folder);

    for($i=0; $i<sizeof($arrayFiles); $i++){
        if($arrayFiles[$i] != "." && $arrayFiles[$i] != ".."){
            $typeFile     = explode("_", $arrayFiles[$i])[0];
            $fileContent  = fopen($folder.$arrayFiles[$i], "r");

            while(!feof($fileContent)){
                $line     = explode("|", fgets($fileContent));
                $dateAux  = explode("-", $line[1]);

                array_push($response, [
                  "type"  =>  $typeFile,
                  "id"    =>  $line[0],
                  "date"  =>  $dateAux[2]."-".$dateAux[1]."-".$dateAux[0],
                  "user"  =>  $line[2],
                ]);
            }
        }
    }

    /**
     * SENDING AN EMAIL TO ALL THE ADMINISTRATORS
     */
    for($i=0; $i<sizeof($results); $i++){
      $content      = "";
      
      for($j=0; $j<sizeof($response); $j++){
        $type = $response[$j]["type"] == "activity" ? "Actividad" : "Registro";

        if($j == 0){
          $content  = ($j + 1).")<br>   * Documento: ".$type."<br>   * N°: ".$response[$j]["id"]."<br>   * Fecha: ".$response[$j]["date"].
                    "<br>   * Responsable: ".$response[$j]["user"];
        }else{
          $content  = $content."<br><br>".($j + 1).")<br>   * Documento: ".$type."<br>   * N°: ".$response[$j]["id"]."<br>   * Fecha: ".$response[$j]["date"].
                    "<br>   * Responsable: ".$response[$j]["user"];
        }

      }

      $subject		=  "Informe Mensual Plataforma de Manteción";
      $body			  =  '<html>
                      <head>
                        <title>Informe Mensual</title>
                      </head>
                      <body>
                        <p>Estimado(a): '.$results[$i]["nombre"]. ' '.$results[$i]["apellido"].'<br><br>'.

                          'Junto con saludar, por medio del presente correo le queremos dar a conocer un breve resumen de las actividades y '.
                          'guías de mantenciones que han sido eliminadas o anuladas durante el mes recien pasado.<br>'.
                          'Estas son las siguientes:<br><br>'.
                          $content.
                          '<br><br>Saludos</p>
                      </body>
                    </html>';
				
		  $errorSendMail	= sendMail($results[$i]["correo"], $subject, $body);
    }

    return $response;
  }
?>
