import React, { useState } from 'react';

const Form = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddClick = () => {

    if (name && description && price) {
      
      onAddItem({ name, description, price });
      
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form className="m-4 p-4 font-bold">
      <label>
        Name
        <input
          className="p-2 m-3 border border-gray-700"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          className="p-2 m-3 border border-gray-700"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price
        <input
          className="p-2 m-3 border border-gray-700"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button
        className="m-3 p-3 px-5 rounded-md bg-black text-white"
        type="button"
        onClick={handleAddClick}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
