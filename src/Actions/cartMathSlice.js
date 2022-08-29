import {createSlice} from "@reduxjs/toolkit";
import data from "../components/Data/Data.json";

let dataClone = data.slice();

export const cartMathSlice = createSlice({
    name: "cartMath",
    initialState: {
        totalAmount: 0,
        counterElementCard: 0,
    },
    reducers: {
        incCounterElement: (state, {payload}) => {
            state.counterElementCard++;
            let arrFilter = dataClone.find((index) => index.article === payload);
            state.totalAmount += parseInt(arrFilter.cost.match(/\d+/));
        },
        decCounterElement: (state, {payload}) => {
            state.counterElementCard > 0 ? state.counterElementCard-- : state.counterElementCard = 0;
            let arrFilter = dataClone.find((index) => index.article === payload);
            if (state.totalAmount >= 0 && state.totalAmount >= parseInt(arrFilter.cost.match(/\d+/))) {
                state.totalAmount -= parseInt(arrFilter.cost.match(/\d+/));
            }
        },
    }
})

export const { incCounterElement, decCounterElement } = cartMathSlice.actions;
export const selectTotalAmount = state => state.cartMath.totalAmount;
export const selectCounterElementCard = state => state.cartMath.counterElementCard;


export default cartMathSlice.reducer;

