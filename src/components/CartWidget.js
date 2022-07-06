import './css/CartWidget.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div>
        <a href="/cart" className='icons'>
            <FontAwesomeIcon icon={faCartShopping} />  
        </a>
        <span className='cantItem'>5</span> 
    </div>        
  );
}

export default CartWidget;