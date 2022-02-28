import { Fragment } from "react";
import classes from './Header.module.css'
import foodImage from '../Assets/food.jpg';
import CartButton from "./CartButton";

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Enjoy Some Food</h1>
            <CartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src = {foodImage} alt='A typical image of junk food.' />
        </div>
    </Fragment>
    )
}

export default Header;