import {createSlice} from "@reduxjs/toolkit";

export const cardLikeSlice = createSlice({
    name: "toggleLike",
    initialState: {
        toggleView: {display: "none"},
        articleLike: [],
    },
    reducers: {
        toggleLikeView: state => {
            state.toggleView.display === "none" ? state.toggleView.display = "inline-block" : state.toggleView.display = "none";
        },
        addArticleLike: (state, {payload}) => {
            state.articleLike = state.articleLike.concat(payload);
        }
    }
})

export const { toggleLikeView, addArticleLike } = cardLikeSlice.actions;
export const selectToggleLikeView = state => state.toggleLike.toggleView;
export const selectAddArticleLike = state => state.toggleLike.articleLike;

export default cardLikeSlice.reducer;