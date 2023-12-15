import React, { useState } from 'react';
import './componentStyle.css'
const Poster = ({account}) => {
  const [inputValue, setInputValue] = useState('');
  const [posterAccount] = useState(account);

  const handleSubmit = () => {
    // Implement your logic here
    
    console.log('Submitted value:', inputValue,'. By Account: ',account);
    // You can call your contract function or perform other actions
    
  };

  return (
    <div className="posterContainer">
      <label className= 'label' >
        Distribute your thoughts : </label>
        <input
            className='input'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
      
      <button className='button' onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default Poster;