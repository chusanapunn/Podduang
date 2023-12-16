// import logo from './logo.svg';
import React, { useState,useEffect } from'react';
import './App.css';
import Poster from './component/Poster.js';
import ConnectMetaMaskButton from './component/ConnectMetaMaskButton.js';
import PostDisplayer from './component/PostDisplayer.js';

function App() {

  const [account, setAccount] = useState(null);
  const [contract,setContract] = useState(null);

  const updateAccount = (newAccount) => {
    setAccount(newAccount);
  };
  
  const updateContract = (newContract)=>{
    setContract(newContract);
  }

  useEffect(() => {
    console.log("Account is: ", account);
    console.log("Contract is: ", contract);
    }, [account,contract]);

  // const handleSubmit = () => {
  //   // Implement your logic here
  // console.log('Account: ',account);
  // };

  return (
    <div>
      <div className='header'>
      <h1 className='title'> 
                bitpuen :P 
            
            </h1>
            <h2 className='subtitle'>campaign & Advertisement</h2>
            <ul className="tab">
                <li className="tabLink" style={{fontWeight:"400"}}>trending</li>
                <ConnectMetaMaskButton onUpdateAccount={(updateAccount)} onUpdateContract={(updateContract)}/>
                {/* <li className="tabLink">news</li> */}
            </ul>

      </div>
    <div>
      <Poster account={account} contract={contract}></Poster>
    </div>
    <PostDisplayer contract={contract}> </PostDisplayer>
    </div>
  );
}
export default App;