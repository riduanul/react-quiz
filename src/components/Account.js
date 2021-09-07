import { Link } from 'react-router-dom';
import classes from '../Styles/Account.module.css';

export default function Account() {
    return(
     <div className={classes.account}>
         <span className="material-icons-outlined" title="Account">
            account_circle     
         </span>
         <Link to="/signup">Signup</Link>
    </div>
    );
}