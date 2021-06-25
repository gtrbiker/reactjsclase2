

import React from 'react';
import './App.css';
//components
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import NavBar from './components/Navbar/NavBar';
import ShoppingCart from './components/ShoppingCart/ShoppingCard';

class App extends React.Component{
  render(){
    return(
      <div className='container'>
        <Header />
        <NavBar />
        <ShoppingCart />
        
        <CardComponent name={'Cheescake'} 
                      description={'Precio: '}
                      
                      img={'https://cdn.kiwilimon.com/recetaimagen/36007/th5-640x426-43954.jpg'} />

        <CardComponent name={'Tiramisu'} 
                      description={'Precio: '}
                      
                      img={'https://www.cocinavital.mx/wp-content/uploads/2019/05/tiramisu-clasico-pasos.jpg'} />

        <CardComponent name={'Cupcakes'} 
                      description={'Precio: '}
                      
                      img={'https://cdn.kiwilimon.com/recetaimagen/10996/th5-640x426-23726.jpg'} />     
        

      </div>
    );
  }
}

export default App;