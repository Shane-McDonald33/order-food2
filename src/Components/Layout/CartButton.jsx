import CartIcon from "../Cart/CartIcon";
import classes from './CartButton.module.css';

const CartButton = (props) => {
    return (
        <button className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span>Your Cart</span>
        </button>
    )
}

export default CartButton;