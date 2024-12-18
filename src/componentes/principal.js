import React from "react";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './principal.css'
import Catalog from "./Catalog/Catalog";
import Pedidos from "./Pedidos/Pedidos";
function Principal (){
    let [display, setDisplay] = useState(1)
    let switchDisplay = (currentDisplay) => {
      currentDisplay === 0?setDisplay(1) : setDisplay(0)
    }
    return (<>
      {display}


      <div className="tabGroup">
        <div onClick={() => display !== 1 ?switchDisplay(display): console.log('No es')} className="tab">Catalogo</div>
        <div onClick={() => display !== 0 ?switchDisplay(display): console.log('No es')} className="tab">Pedidos</div>
      </div>

      {
        display === 1 ? (<Catalog></Catalog>) : "Catalogo Inactivo" 
      }
      {
        display === 0 ? (<Pedidos></Pedidos>) : "Pedidos Inactivo" 
      }










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