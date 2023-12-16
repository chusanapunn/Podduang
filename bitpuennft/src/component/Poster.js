import React, { useState } from 'react';
import './componentStyle.css';


const Poster = ({account,contract}) => {
  const [inputValue, setInputValue] = useState('');
  // const [imageValue, setImageValue] = useState('');
  // const [posterAccount] = useState(account);

  async function handleSubmit() {
    // Implement your logic here
    
    console.log('Submitted value:', inputValue,'. By Account: ',account);
    // You can call your contract function or perform other actions
    const post = await contract.createPost(inputValue,{gasLimit:150000});
    console.log("Check post :", post);
  };

  return (
    <div className="posterContainer">
    <label className= 'label' >
      Post your Advertisement : 
    </label><input
            className='input'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
      {account ?
      (
      <button className='button' onClick={handleSubmit}> Post </button> 
      ):
      ( 
      <div className="errText"> You have to login first  </div>
      )}
    </div>
  );
};

export default Poster;