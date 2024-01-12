import React, { useContext } from 'react'
import CartButton from './CartButton'
import { CartContext } from '../../Context/cartContext';


const Header = ({toggleCart}) => {
  const { cart } = useContext(CartContext);
  
  return (
    <div className="flex font-bold bg-black text-white justify-between p-5">
        <h1 className='text-3xl'>CandyShop</h1>
        <CartButton cartItemCount={cart.length} onClick={toggleCart} />
    </div>
  )
}

export default Header
