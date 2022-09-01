import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                //state.cartItems[itemIndex].itemQuantity += 1; creating item quantity counter
                state.cartItems.push("")
                toast.info(`${action.payload.name} is in cart already!`, {position: "bottom-left", autoClose: 2000},)
                
            } else {
                const tempProduct = {...action.payload, itemQuantity: 1}
                //state.cartItems.push(tempProduct)
                state.cartItems.push(action.payload)
                toast.success(`${action.payload.name} added to cart successfully!`, {position: "bottom-left", autoClose: 2000});
                
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer 