import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
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
                state.cartItems[itemIndex].push(null)
                
            } else {
                const tempProduct = {...action.payload, itemQuantity: 1}
                //state.cartItems.push(tempProduct)
                state.cartItems.push(action.payload)
                
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer 