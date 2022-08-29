// import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import PropTypes from 'prop-types';
import {
    incrementGoodInCart,
    addArticle,
    selectAddArticle
} from "../../Actions/addGoodSlice";
import {
    toggleLikeView,
    addArticleLike,
    selectToggleLikeView,
    selectAddArticleLike
} from "../../Actions/cardLikeSlice";
import {guid} from "../../Utils/id"
import data from "../Data/Data.json";
import style from "./Main.module.css";

export default function Main() {

    const dispatch = useDispatch();
    const productArticles = useSelector(selectAddArticle);
    const toggleLikeDisplay = useSelector(selectToggleLikeView);
    const currentArticles = useSelector(selectAddArticleLike);

    const keyId = () => guid();
    function onAddGood(addArticleCard) {
        dispatch(incrementGoodInCart());
        dispatch(addArticle(addArticleCard));
    }
    function toggleLike(addLikeArticle) {
        dispatch(toggleLikeView());
        dispatch(addArticleLike(addLikeArticle));
    }

    return(
        <>
            <div className={style.cards_goods}>
                {data.map(item =>
                    <div key={keyId()} className={style.card_goods}>
                        <div className={style.cardHeart} onClick={() => toggleLike(item.article)}>
                            <div className={style.cardOffHeart}>
                                <img width='24px' height='24px' src="../../../Images/Cards/icons/b_w-heart.svg" alt="heart"/>
                            </div>
                            <div style={toggleLikeDisplay} className={style.cardOnHeart}>
                                <img width='24px' height='24px' src="../../../Images/Cards/icons/red-heart.svg" alt="heart"/>
                            </div>
                        </div>
                        <div className={style.card_title}>
                            <h4>{item.title}</h4>
                        </div>
                        <img src={item.image} className={style.card_image} alt='' />
                        <div className={style.card_text}>
                            <p>{item.text}</p>
                        </div>
                        <h2>{item.cost}</h2>
                        <button className={style.card_btn} disabled={productArticles.includes(item.article)} onClick={
                            () => onAddGood(item.article)
                        }>Add to cart</button>
                        <div>{currentArticles.join()}</div>
                    </div>
                )}
            </div>
        </>
    )
}
