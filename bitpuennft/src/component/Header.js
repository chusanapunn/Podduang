import React from 'react';
import ConnectMetaMaskButton from './ConnectMetaMaskButton.js';
import './componentStyle.css';

function Header(){
    return(
        <div className='container'>
            <h1 className='title'> 
                bitpuen
                
            </h1>
            <ConnectMetaMaskButton />
        </div>
        
    )
}
export default Header;