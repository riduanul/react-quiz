import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import classes from '../Styles/Account.module.css';

export default function Account() {
    const {currentUser, logout} = useAuth();
    return(
     <div className={classes.account}>
      {currentUser ? (
          <>
             <span className="material-icons-outlined" title="Account">
                account_circle     
             </span>
             <span>{currentUser.displayName}</span>
             <span className = 'material-icons-outlined' title="Logout" onClick={logout}>
                logout
             </span>
          </>
      ) : (
          <>
           <span className="material-icons-outlined" title="Account">
                account_circle     
             </span>
                   
            <Link to="/login"><p>Login</p></Link>
          </>
      )}

        
    </div>
    );
}