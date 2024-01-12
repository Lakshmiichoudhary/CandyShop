import { useState } from 'react';
import Cart from './Component/Cart/Cart'
import Header from './Component/Header/Header'
import MainBody from './Component/MainBody'
import { CartProvider } from './Context/cartContext'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  
  return (
    <CartProvider>
      <Header toggleCart={toggleCart}/>
      {isCartOpen && <Cart onClose={closeCart} />}
      <MainBody />
      
    </CartProvider>
  )
}

export default App
