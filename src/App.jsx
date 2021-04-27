import React from 'react';
import Catalogo from './components/Catalogo/Catalogo';
import Menu from './components/Menu/Menu';
import Presentador from './components/Presentador/Presentador';
import Articulo from './components/Articulo/Articulo';
import Footer from './components/Footer/Footer';
import Marcas from './components/Marcas/Marcas'

function App() {
  return (
    <div >
      <Menu/>
      <Presentador/>
      
      <Catalogo/>
      <Articulo/>
      <Marcas/>
      <Footer/>
      

      

      
    </div>
  );
}

export default App;
