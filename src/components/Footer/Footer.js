import style from "./Footer.module.css"

function Footer() {
    return(
        <div className={style.footer}>
            <div className={style.footerLeft}>
                <span>My project e-shop</span>
            </div>
            <div className={style.cardHeart}>
                <div className={style.cardOffHeart}>
                    <img width='24px' height='24px' src="../../../Images/Cards/icons/b_w-heart.svg" alt="heart"/>
                </div>
                <div className={style.cardOnHeart}>
                    <img width='24px' height='24px' src="../../../Images/Cards/icons/red-heart.svg" alt="heart"/>
                </div>
            </div>
            <div className={style.footerRight}>
                <span> 2022 &copy; All Right Reserved</span>
            </div>
        </div>
    )
}
export default Footer