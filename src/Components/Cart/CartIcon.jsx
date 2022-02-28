import cartImage from '../Assets/shopping-cart.png';
import classes from './CartIcon.module.css'

const CartIcon = () => {
    return (
        <img src={cartImage} alt='shopping cart icon' className={classes.icon}/>
    )
};

export default CartIcon;