import React, { createContext, useState } from 'react';

export const CartContextProvider = ({defaultValue=[],children}) =>{
    const [ favoritos, setFavoritos] = useState([]);
    const [ productoCart, setProductoCart ] = useState(defaultValue);
    
    const clearCart = () => {
        setProductoCart([]);
    }

    const isInCart = (title) => {
        return productoCart.some((item) => item.item.title === title)
    }

    const onAdd = (producto, cantCart) => {
        if (isInCart(producto.title)) {
            const newCarrito = [...productoCart]
            for (const element of newCarrito) {
                if (element.item.title === producto.title) {
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
    
    const deleteCart = (title) =>{
        const nuevoCart = productoCart.filter( i => i.item.title !== title);
        setProductoCart(nuevoCart);
    }

    const clearFavoritos = () => {
        setFavoritos([]);
    }

    const addFavoritos = (producto) => {
        setFavoritos(
            [...favoritos, {producto}]
        )
    }

    const deleteFavoritos = (title) =>{
        const nuevoFavoritos = favoritos.filter( i => i.producto.title !== title);
        setFavoritos(nuevoFavoritos);
    }
    
    return(
        <CartContext.Provider value={{
            itemsCarrito:productoCart,
            onAdd: onAdd,
            clearCart: clearCart,
            deleteCart: deleteCart,
            isInCart: isInCart,
            addFavoritos: addFavoritos,
            clearFavoritos: clearFavoritos,
            deleteFavoritos: deleteFavoritos,
            favoritos: favoritos
        }}>
            {children}
        </CartContext.Provider>
    )
};

const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    clearCart: () => {},
    deleteCart: (title) => {},
    isInCart: (id) => {},
    addFavoritos: (producto) =>{},
    clearFavoritos: () => {},
    deleteFavoritos: (title) => {},
    favoritos: []
});

export default CartContext;