
import './App.css';
import {Route, Routes} from 'react-router-dom'

import Principal from './componentes/principal';
import Contactos from './componentes/Contactos';
import Navbar from './componentes/nav/Navbar.js';



function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/catalogo' element={<div>RUTA Catalogo</div>}/>
        <Route path='/contactos' element={<Contactos/>}/>


      </Routes>

    </div>
  );
}

export default App;
