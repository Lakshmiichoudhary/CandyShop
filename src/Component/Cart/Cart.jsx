import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';


const Cart = ({ onClose }) => {
  const { cart,removeFromCart } = useContext(CartContext);

  const handleRemoveItemClick = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="border border-spacing-1 border-black
     shadow-black text-center m-7 mb-5 border-r-black font-bold">
      <h2 className='text-3xl'>Your Cart</h2>
      <button className="m-2 bg-black text-white p-4 rounded-md" onClick={onClose}>
        Close
      </button>
      <ul>
        {cart.map((cartItem, index) => (
          <li className='my-6  border border-t-black  mb-10 text-center flex justify-around font-bold text-2xl' key={index}>
            <span>{cartItem.item.name}</span>
            <span>{cartItem.item.description}</span>
            <span>{cartItem.item.price}</span>
            <div>
            <span>Quantity: {cartItem.quantity}</span>
            </div>
            <button
                className=" bg-red-800 text-white p-2 rounded-md ml-4"
                onClick={() => handleRemoveItemClick(index)}
              >
                Remove
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
