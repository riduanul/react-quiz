import { Link } from 'react-router-dom';
import logo from "../Assets/images/logo-bg.png";
import classes from '../Styles/Nav.module.css';
import Account from "./Account";

export default function Nav() {
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Learn with sumit logo" />
                        <h3>Learn With Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account/>
            
        </nav>
    );
}