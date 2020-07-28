<H1><p>MOTOR DE FLUJO</p></H1>
<?php
    /*clase donde se muestra el motor de flujo */
    if(empty($lista)){
        echo "no hay datos";
    }else{
        /* saca los datos para enviarlos mediante el formulario*/
        foreach($lista as $datos){
            $codFlujo= $datos->codFlujo; 
            $codProceso=$datos->codProceso;
            $codProcesosig=$datos->codProcesosig; 
            $archivo=$datos->pantalla;
        }  
    } 
    /*si el siguiente proceso es condicional realiza el siguiente codigo */
     if($codProcesosig=='null'){
        $data= $this->M_controlador->get_ProcesoSig4($codFlujo,$codProceso);
        foreach($data as $datos){
            $codProceso2 = $datos->codProceso;
            $codFlujo= $datos->codFlujo;
            $codProcesoSI=$datos->codProcesoSI;
            $codProcesoNO=$datos->codProcesoNo; 
        } 
        if(isset($_POST['si'])){            
            $codProcesosig=$codProcesoSI;
         }
        if(isset($_POST['no'])){
            $codProcesosig=$codProcesoNO;
        }
    }    
    
?>

<?php
include $archivo;
?>
<form  action="" method="GET"  >
<input type="hidden" value="<?php echo $codFlujo; ?> " name="codFlujo">
<input type="hidden" value="<?php echo $codProceso; ?>" name="codProceso">
<input type="hidden" value="<?php echo $codProcesosig; ?>" name="codProcesoSiguiente">
<input type="hidden" value="<?php echo $archivo; ?>"name="$archivo">
<input type="submit" value="Anterior" name="Anterior">
<input type="submit" value="Siguiente" name="Siguiente">

</form>
