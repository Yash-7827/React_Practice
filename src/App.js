import './App.css';
import Header from './Components/Layout/Header'
import {React,Fragment,useState} from 'react';
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart';

function App() {
  
  const[ cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onCartButton={hideCartHandler}/>}
      <Header onCartShow={showCartHandler}></Header>
      <Meals/>
    </Fragment>
  );
}

export default App;