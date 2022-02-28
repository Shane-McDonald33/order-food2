import { Fragment } from "react";

import foodImage from '../Assets/food.jpg'
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Enjoy Some Food</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt="Picture of typical fast foods"/>
            </div>
        </Fragment>
    )
};

export default Header;