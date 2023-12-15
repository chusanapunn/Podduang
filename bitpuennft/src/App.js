// import logo from './logo.svg';
import React, { useState,useEffect } from'react';
import './App.css';
import Poster from './component/Poster.js';
import ConnectMetaMaskButton from './component/ConnectMetaMaskButton.js';



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
      <div className='container'>
      <h1 className='title'> 
                bitpuen
            </h1>
            <ul className="tab">
                <li className="tabLink">trending</li>
                <ConnectMetaMaskButton onUpdateAccount={(updateAccount)} onUpdateContract={(updateContract)}/>
                <li className="tabLink">news</li>
            </ul>

      </div>
    <div>
      <Poster account={account} contract={contract}></Poster>
    </div>
    </div>
  );
}
export default App;