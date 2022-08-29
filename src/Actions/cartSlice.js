import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        close: {display: "none"}
    },
    reducers: {
        onClose: state => {
            state.close.display = "none"
        },
        offClose: state => {
            state.close.display = "block"
        }
    }
})
export const { onClose, offClose } = cartSlice.actions;
export const selectOnClose = state => state.cart.close;

export default cartSlice.reducer;

