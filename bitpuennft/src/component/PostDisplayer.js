import React, { useState } from 'react';
import './componentStyle.css';


const PostDisplayer = ({contract}) => {
    const [inputValue, setInputValue] = useState('');

      
    console.log('Submitted value:', inputValue,'. By Account: ',account);
    // You can call your contract function or perform other actions
    const post = contract.createPost(inputValue);
    console.log("Check post", post);


  return (
    <div className="PostDisplayerContainer">
      <label className= 'label' >
        There is no post here.
        </label>

    </div>
  );
};

export default PostDisplayer;