import {createSlice} from "@reduxjs/toolkit";

export const addGoodSlice = createSlice({
    name: "addGood",
    initialState: {
        counterGoods: 0,
        articleGood : [],
    },
    reducers: {
        incrementGoodInCart: state => {
            state.counterGoods += 1;
        },
        addArticle: (state, {payload}) => {
            state.articleGood = state.articleGood.concat(payload)
        }
    }
})
export const { incrementGoodInCart, addArticle } = addGoodSlice.actions;
export const selectIncrementGoodInCard = state => state.addGood.counterGoods;
export const selectAddArticle = state => state.addGood.articleGood;

export default addGoodSlice.reducer;