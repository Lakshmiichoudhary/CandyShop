import React, { useContext, useState } from 'react';
import Form from './Form';
import { CartContext } from '../Context/cartContext';

const MainBody = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);


  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleBuyClick = (index, quantity) => {
    const selectedItem = items[index];
    addToCart(selectedItem, quantity);
    console.log(`Buying ${quantity} of ${selectedItem.name}`);
  };

  return (
    <div>
      <Form onAddItem={handleAddItem} />
      <ul className='m-5 p-2'>
        {items.map((item, index) => (
          <li className='p-2 mx-2 flex justify-between font-bold' key={index}>
              <span>{item.name}</span>
              <span>{item.description}</span>
              <span >${item.price}</span>
              <div className='p-2 '>
              <button
                className='bg-black m-2 text-white p-2 rounded-md'
                onClick={() => handleBuyClick(index, 1)}
              >
                Buy 1
              </button>
              <button
                className='bg-black m-2 text-white p-2 rounded-md'
                onClick={() => handleBuyClick(index, 2)}
              >
                Buy 2
              </button>
              <button
                className='bg-black m-2 text-white p-2 rounded-md'
                onClick={() => handleBuyClick(index, 3)}
              >
                Buy 3
              </button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainBody;
