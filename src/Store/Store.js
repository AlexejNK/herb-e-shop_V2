import {configureStore} from "@reduxjs/toolkit";
import addGoodReducer from "../Actions/addGoodSlice";
import onCloseReducer from "../Actions/cartSlice";
import toggleLikeReducer from "../Actions/cardLikeSlice";
import cartMathReducer from "../Actions/cartMathSlice";

export default configureStore({
    reducer: {
        addGood: addGoodReducer,
        cart: onCloseReducer,
        toggleLike: toggleLikeReducer,
        cartMath: cartMathReducer,
    }
})
