import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const itemInCart = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                if (itemInCart.quantity !== undefined) {
                    itemInCart.quantity += 1;
                }
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (item && item.quantity !== undefined) {
                item.quantity++;
            }
        },
    },
});

export const { addItemToCart,increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
