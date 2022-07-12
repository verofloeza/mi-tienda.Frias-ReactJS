import React, { createContext, useState } from 'react';

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productoCart, setProductoCart ] = useState(defaultValue);
    
    
    const onAdd = (producto, cantCart) => {
        console.log(productoCart);
           setProductoCart(
                [...productoCart, {"item": producto, "quality": cantCart}]
            ) 
        
        console.log(productoCart)
    }
    
    
    const clearCart = () => setProductoCart([]);
    
    return(
        <CartContext.Provider value={{
            itemsCarrito:productoCart,
            onAdd: onAdd,
            clearCart: clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    clearCart: () => {},
});

export default CartContext;