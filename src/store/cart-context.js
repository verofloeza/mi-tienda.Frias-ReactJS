import React, { createContext, useState } from 'react';

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productoCart, setProductoCart ] = useState(defaultValue);
    
    const clearCart = () => setProductoCart([]);

    const isInCart = (id) => {
        return productoCart.some((item) => item.item.id === id)
    }

    const onAdd = (producto, cantCart) => {

        if (isInCart(producto.id)) {
            const newCarrito = [...productoCart]
            for (const element of newCarrito) {
                if (element.item.id === producto.id) {
                    element.quality+=cantCart
                }
            }
            setProductoCart(newCarrito)
        } else {
           setProductoCart(
                [...productoCart, {"item": producto, "quality": cantCart}]
            ) 
           }
    }
    
    const deleteCart = (id) =>{
        const nuevoCart = productoCart.filter( i => i.item.id !== id)
        setProductoCart(nuevoCart)
    }

    
    
    return(
        <CartContext.Provider value={{
            itemsCarrito:productoCart,
            onAdd: onAdd,
            clearCart: clearCart,
            deleteCart: deleteCart,
            isInCart: isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    clearCart: () => {},
    deleteCart: (id) => {},
    isInCart: (id) => {}
});

export default CartContext;