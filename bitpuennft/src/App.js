// import logo from './logo.svg';
import React, { useState } from'react';
import './App.css';
import PostInput from './component/Poster.js';
import ConnectMetaMaskButton from './component/ConnectMetaMaskButton.js';

function App() {

  const [account, setAccount] = useState(null);

  const updateAccount = (newAccount) => {
    setAccount(newAccount);
  };
  // const handleSubmit = () => {
  //   // Implement your logic here
  // console.log('Account: ',account);
  // };

  return (
    <div>
      <div className='container'>
      <h1 className='title'> 
                bitpuen
            </h1>
            <ul className="tab">
                <li className="tabLink">trending</li>
                <ConnectMetaMaskButton onUpdateAccount={updateAccount}/>
                <li className="tabLink">news</li>
            </ul>
        

        <button className='button' onClick={()=>console.log("Account is: ",account)}>Done</button>
      </div>
    <div>
      <PostInput ></PostInput>
    </div>
    </div>
  );
}
export default App;