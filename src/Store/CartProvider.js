import CartContext from "./CartContext";

const CartProvider = props =>{
    const addItemToCart = (item) =>{
    };

    const removeItemFromCart = (id) =>{
    };

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return(
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;