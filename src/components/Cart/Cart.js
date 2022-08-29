import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {
    onClose,
    selectOnClose,
} from "../../Actions/cartSlice";
import {
    incCounterElement,
    decCounterElement,
    selectCounterElementCard,
    selectTotalAmount
} from "../../Actions/cartMathSlice";
import { selectAddArticle } from "../../Actions/addGoodSlice";
import {filterData} from "../../Utils/filterData";
import style from "./Cart.module.css";
import {guid} from "../../Utils/id";


export default function Cart() {
    const close = useSelector(selectOnClose);
    const dispatch = useDispatch();
    const currentArticles = useSelector(selectAddArticle);
    const countElement = useSelector(selectCounterElementCard);
    const totalAmount = useSelector(selectTotalAmount);

    const keyId = () => guid();
    let newData = () => filterData(currentArticles);
    const closeWindows = () => {
        if(newData().length === 0) {
            return {display: "block"}
        }
        else {
            return {display: "none"}
        }
    }

    function incElement(incElementArticle) {
        dispatch(incCounterElement(incElementArticle));
    }
    function decElement(decElementArticle) {
        dispatch(decCounterElement(decElementArticle));
    }
    function closeCart() {
        dispatch(onClose());
    }

    return(
        <div style={close} className={style.containerCart}>
            <div className={style.wrapperCart}>
                <div className={style.cartRight}>
                    <div onClick={closeCart} className={style.cartClose}>
                        <FontAwesomeIcon icon={faRectangleXmark} />
                    </div>
                    <h1>Váš nákupní košík</h1>
    {/*//---------------------------------------------------------------------------------------------//*/}
                    <div style={closeWindows()} className={style.cartEmpty}>
                        <div className={style.openBox}>
                            <img src="../../../Images/Cart/Box/openBox.png" alt="Box"/>
                        </div>
                        <div className={style.cartText}>
                            <p>Váš nákupní košík je prázdný !</p>
                        </div>
                        <div className={style.cartSmile}>
                            <img src="../../../Images/Cart/Smiles/sad.svg" alt="Smile"/>
                        </div>
                    </div>
    {/*//-----------------------------------------------------------------------------------------------//*/}
                    <div className={style.cartFull}>
                        <div className={style.cartCard}>
                            {newData().map((item)=><div key={keyId()} className={style.cardInCart}>
                                <div key={keyId()} className={style.cardTitle}>
                                    <img key={keyId()} className={style.cartImg} src={item.image} alt="cart full"/>
                                    <div key={keyId()} className={style.cartTitleText}>
                                        <p key={keyId()}>{item.title}</p>
                                        <p key={keyId()}>Cena: {item.cost}</p>
                                    </div>
                                </div>
                                <div key={keyId()} className={style.buttonAdded}>
                                    <div key={keyId()} className={style.btnPlus} onClick={() => incElement(item.article)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                    <div key={keyId()} className={style.btnNumber}>{countElement}</div>
                                    <div key={keyId()} className={style.btnMinus} onClick={() => decElement(item.article)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </div>
                                    <div key={keyId()} className={style.btnDelete}>
                                        <FontAwesomeIcon icon={faRectangleXmark} />
                                    </div>
                                </div>
                            </div> )}
                        </div>
                        <div className={style.cartAmount}>
                            <span>Total amount:</span>
                            <span>{totalAmount} Kc s DPH</span>
                        </div>
                        <div>{currentArticles.join()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}