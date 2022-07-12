import React, { createContext, useState } from 'react';

const CartContext = createContext({});

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productoCart, setProductoCart ] = useState(defaultValue);
    const [ cantCart, setCantCart ] = useState(1);
    const [ counter, setCounter ] = useState(true);
    const [ compra, setCompra ] = useState(false);
    const initial = 1;
    const stock = 5;
    
    const onAdd = (producto) => {
        console.log(productoCart);
           setProductoCart(
                //[...productoCart, {"item": producto, "quality": cantCart}]
                productoCart.push({"item": producto, "quality": cantCart})
            ) 
        
        
        console.log(productoCart)
        setCounter(!counter)
        setCompra(!compra)
    }
    const sumar = () =>{
        if( cantCart < stock ){
        setCantCart(cantCart+1);
        }
    }
    const quitar = () =>{
        if( cantCart > initial ){
        setCantCart(cantCart-1);
        }
    }
    const guardar = (event) => setCantCart(event.target.value);
    
    const clearCart = () => setProductoCart([]);

    const context ={
            itemsCarrito:productoCart,
            cantCart: cantCart,
            counter: counter,
            compra: compra,
            onAdd: onAdd,
            initial: initial,
            stock: stock,
            sumar: sumar,
            quitar: quitar,
            guardar: guardar,
            clearCart: clearCart
        };
    
    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
};



export default CartContext;