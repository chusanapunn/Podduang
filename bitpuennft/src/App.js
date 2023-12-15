// import logo from './logo.svg';
import React, { useState } from'react';
import './App.css';
import PostInput from './component/PostInput.js';
import Header from './component/Header.js';
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
      <Header ></Header>
      <ConnectMetaMaskButton onUpdateAccount={updateAccount}/>
      {/* Add the rest of your app components here */}
      <button className='button' onClick={()=>console.log("Account is: ",account)}>Done</button>
      <PostInput ></PostInput>
    </div>
  );
}
export default App;