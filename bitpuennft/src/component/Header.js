import React  from 'react';
import './componentStyle.css';

function Header(){

    return(
        <div className='container'>
            <h1 className='title'> 
                bitpuen
            </h1>
            <ul className="tab">
            
                <li className="tabLink">trending</li>
                
                <li className="tabLink">news</li>
            </ul>
        </div>
        
    )
}
export default Header;