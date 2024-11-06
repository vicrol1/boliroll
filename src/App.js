
import './App.css';
import bolis from './Assets/bolis.jpg'
import {useState} from 'react'


function App() {
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
  
  return (
    <div className="App">
      {
        state
      }
      <div className={menu}>
        <button>
        inicio
        </button>
        <button>
        quienes somos
        </button>
        <button>
        catalogo
        </button>
        <button>
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



    </div>
  );
}

export default App;
