
<?php
/*Nombre: Javier Illimani Yupanqui
En la siguiente clase se llama a la base de datos ademas se cargan datos para luego ser mostrados en la vista
*/
class Controlador extends CI_controller
{
    public function flujo()

	{   /* se consiguen los datos desde la url*/
        $codFlujo = $this->input->get('codFlujo', TRUE); 
        $codProceso = $this->input->get('codProceso', TRUE);
        $codProcesoSiguiente = $this->input->get('codProcesoSiguiente');
        /*si el url esta vacio, para la primera vez, se da valores a $codFlujo y $codProceso*/
        if((empty($codFlujo)) or (empty($codProceso)))
        {
            $codFlujo='F1';
            $codProceso='P1';
        }
 
        $this->load->model('M_controlador'); /* se carga el model de consulta de base de datos M_controlador*/
        $data['lista'] = $this->M_controlador->get_ProcesoSig($codFlujo,$codProceso);/*se ingresa los datos en la funcion
        //para la consulta en la base de datos*/
        $this->load->view('motor',$data);  /*se carga los datos en el motor para que se muestre ahi.*/
         

        $siguiente=$this->input->get("Siguiente", TRUE);/*se pregunta si se oprimio el boton de siguiente*/
        if(isset($siguiente) ){
            $data2= $this->M_controlador->get_ProcesoSig2($codFlujo,$codProcesoSiguiente); /*se ingresa los datos
            en la funcion que realizara la consulta en la base de dato */
            if(empty($data2)){
                echo "no hay datos en consulta";
            }else{
                foreach($data2 as $datos){
                    $codProceso=$datos->codProceso;  /* devuelve codProceso de la consulta */
                } 
             } 

             $codProcesEnvia=$codProceso;
             $archivoEnvia="flujo?codFlujo=".$codFlujo."&codProceso=".$codProcesEnvia;   //se arma la direccion
             header("Location: ".$archivoEnvia); // se redirige a la direccion especificado en $archivoEnvia
        }
        $anterior=$this->input->get("Anterior", TRUE);/*se pregunta si se oprimio el boton de anterior*/
        /* en el siguiente codigo practicamente todo es lo mismo que para el valor Siguiente, con excepcion de
        de que el codigo en la consulta hay una pequeña diferencia*/
        if(isset($anterior) ){
            $data3= $this->M_controlador->get_ProcesoSig3($codFlujo,$codProceso);
            if(empty($data3)){
                echo "no hay datos en consulta3";
            }else{
                foreach($data3 as $datos){
                    $codProceso=$datos->codProceso;
  
                } 
             }
             $codProcesEnvia=$codProceso;
             $archivoEnvia="flujo?codFlujo=".$codFlujo."&codProceso=".$codProcesEnvia;   
             header("Location: ".$archivoEnvia);
        }
        

    }
}
?>