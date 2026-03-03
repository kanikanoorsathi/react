import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveRromCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt=''></img>
                    <button onClick={()=>handleRemoveRromCart(bottle.id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;