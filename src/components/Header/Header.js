import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {
    // incrementGoodInCart,
    selectIncrementGoodInCard
} from "../../Actions/addGoodSlice";
import {selectTotalAmount} from "../../Actions/cartMathSlice"
import {offClose} from "../../Actions/cartSlice";

function Header() {

    const counterGoods = useSelector(selectIncrementGoodInCard);
    const totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();

    function goCart() {
        dispatch(offClose());
    }

    return(
        <div className={style.headerAll}>
            <div className={style.headerLeft}>
                <button className={style.btnReplacement}>
                    <img src="../,,/../Images/Logo/Logo1.png" alt='company'/>
                </button>
            </div>
            <div className='header-center'>
                <input type='text' placeholder='Search in catalog' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={style.headerIconGlass} />
            </div>
            <div className={style.headerRight}>
                <button className={style.btnReplacement}><span className={style.headerCart}>Log In</span></button>
                <div className={style.headerIconCart}>
                    {/*onClick={goCart}*/}
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <div className={style.headerAmount}>{counterGoods}</div>
                </div>
                <span onClick={goCart} className={style.headerCart}>Košík - {totalAmount} Kč</span>
            </div>
        </div>
    )
}
export default Header