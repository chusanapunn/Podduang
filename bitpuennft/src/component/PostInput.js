import React, { useState } from 'react';
import './componentStyle.css'
const PostInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [account] = useState(null);

  const handleSubmit = () => {
    // Implement your logic here
    console.log('Submitted value:', inputValue,'. By Account: ',account);
    // You can call your contract function or perform other actions

  };

  return (
    <div className="postContainer">
      <label className= 'label' >
        Prompt something: </label>
        <input
            className='input'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
      
      <button className='button' onClick={handleSubmit}>Done</button>
    </div>
  );
};

export default PostInput;