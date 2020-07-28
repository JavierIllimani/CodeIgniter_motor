<?php
/*clase donde se realizan las consultas a la base de datos */
	defined('BASEPATH') OR exit('No direct script access allowed');
    class M_controlador extends CI_Model
    {
        
    
        /*la primrera consulta para extraer los datos*/
        function get_ProcesoSig($flujo,$proceso){
             $this->load->database();
             $condiciones = array('codFlujo' => $flujo, 'codProceso' => $proceso);
            $query = $this->db->select('*') 
                          ->from('proceso')
                          ->where($condiciones)  
                          ->get();
            return $query->result();
        }
        /*consulta para ver cuando se oprime el boton siguiente */
        function get_ProcesoSig2($flujo,$proceso){
            $this->load->database();
            $condiciones = array('codFlujo' => $flujo, 'codProceso' => $proceso);
            $query = $this->db->select('*') 
                          ->from('proceso')
                          ->where($condiciones)
                          ->get();
            return $query->result();
        }
        /*consulta para ver cuando se oprime el boton anterio */
        function get_ProcesoSig3($flujo,$proceso){
            $this->load->database();
            $condiciones = array('codFlujo' => $flujo, 'codProcesosig' => $proceso);
            $query = $this->db->select('*') 
                          ->from('proceso')
                          ->where($condiciones)  
                          ->get();
            return $query->result();
        }
        /*consulta para cuando el siguiente proceso es null, o sea
        para cuando el proceso sea condicional*/
        function get_ProcesoSig4($flujo,$proceso){
            $this->load->database();
            $condiciones = array('codFlujo' => $flujo, 'codProceso' => $proceso);
            $query = $this->db->select('*') 
                          ->from('procesocond')
                          ->where($condiciones)  
                          ->get();
            return $query->result();
        }
    }
    
?>