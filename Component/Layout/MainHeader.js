import { Link, NavLink } from "react-router-dom";

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    const isLoggedIn = props.isLoggedIn;
    
    const loggedIn = localStorage.getItem('isLoggedIn');

    console.log("MainHeader");
    console.log(isLoggedIn);
    console.log(loggedIn);

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    { !isLoggedIn &&
                        <li>
                            <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                        </li>
                    }
                    { !isLoggedIn &&
                        <li>
                            <NavLink activeClassName={classes.active} to="/signup">SignUp</NavLink>
                        </li>
                    }
                    {isLoggedIn &&
                        <li>
                            <NavLink activeClassName={classes.active} to="/logout">LogOut</NavLink>
                        </li>
                    }
                    { isLoggedIn &&
                        <li>
                            <NavLink activeClassName={classes.active} to="/create-quiz">Create Quiz</NavLink>
                        </li>                        
                    }
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;