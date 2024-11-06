import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bolis from '../../Assets/bolis.jpg'

function Navbar(){
    let nav = useNavigate()
    let [state, setState] = useState(0)
    let click = (a) => {
      console.log(a)
      if(a === true || a === 1){
        setState(0)
      }
      else{
        setState(1)
      }
      
    }
    let [menu, setMenu] = useState('menu1')
    let clickmenu= (a) =>{
      if(a === 'menu1' ){
        setMenu('menu2')
      }
      else{
        setMenu('menu1')
      }
    }
    
    return(<>
    
    <div className={menu}>
        <button onClick={()=>nav('/')}>
        inicio
        </button>
        <button>
        quienes somos
        </button>
        <button onClick={()=>nav('/catalogo')}>
        catalogo
        </button>
        <button onClick={()=>nav('/contactos')}>
        contactanos
        </button>
        
        
      </div>
      
      <nav className= "nav">
        <button onClick={() => clickmenu(menu) } className='menuboton'>
          Menu
        </button>
        <img src={bolis} className={'logo'}></img>
        <button className= 'sesionboton'>
          sesion
        </button>
      </nav>
    
    </>)
}
export default Navbar