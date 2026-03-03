import React from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { useState } from 'react';
// import { addToStoredCart, getStoreCart,  } from '../../Uitilities/localstores';
// import { useEffect } from 'react';
import { addToStoredCart, getStoreCart, removeFromCart } from '../../Uitilities/localstores';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])
    const bottles =use(bottlesPromise);
    //useEffect
    useEffect(()=> {
        const storeCartIds = getStoreCart(); 

        //console.log(storeCartIds, bottles);
        const storedCart = []
        for (const id of storeCartIds){
            //console.log(id);
            const cartBottle= bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }
        console.log('stored cart', storedCart);
         setCart (storedCart);

        
    }, [bottles])

    const handleAddToCart = (bottle) =>{
        //console.log('bottle will be added to he art', bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);

        //save the bottle id in the storage
        addToStoredCart(bottle.id);
    }

    const handleRemoveRromCart = id =>{
        console.log('remove item from the cart',id);
        const reaminingCart = cart.filter(bottle => bottle.id !== id);
        setCart(reaminingCart);
        removeFromCart(id);
    }

    //console.log(bottles)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveRromCart={handleRemoveRromCart}></Cart>
            <div className='grid'>
                {
                    bottles.map (bottle => <Bottle key={bottle.id}
                        handleAddToCart={handleAddToCart}
                         bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;