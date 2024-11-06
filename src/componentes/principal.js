import React from "react";
import bolis from '../Assets/bolis.jpg'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Principal (){
    
    
    return (<>




      <img src={bolis} className={'bolisimg'}></img>
    <div className='Empresa'>
      <h2 className='quienes somo'>¿Quienes somos?</h2>
      <h2 className='proposito'>¿Cual es nuestro proposito?</h2>
      <h2 className='mision'>Nuestra mision</h2>
    </div>
    <div className='Empresacontenido'>
      <h4 className='quienes somo'>Somos shalajgsdcj, adcbhvahc vec v jvag evcjavc ghaevcgva gvgj,evg cagvca vegcach vehabc ussug vasug vasa  vs ara</h4>
      <h4 className='proposito'>nuestto proposito es cjhvrcgvgcvwj  wer  tr,ry.,n trur,tu r , rt y. try e. n tey nt,nt t ynt</h4>
      <h4 className='mision'>Nuestra mision es  rrrklbkltrlybtkty,mty,mty t , y,eybmtryntr,un,rt,t mu, tr tr</h4>
    </div>




        
    
    </>)
}
export default Principal