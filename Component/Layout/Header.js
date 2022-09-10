import { Fragment, useEffect, useState } from "react";
import LoginForm from "../UI/LoginForm";
import SignUpForm from "../UI/SignUpForm";
import Button from "./Button";

import LoginButton from "./Button";

import classes from './Header.module.css';

const Header = (props) => {
    const [loginForm, setLoginForm] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isSignUpForm, setSignUpForm] = useState(false);

    useEffect(() => {
        console.log(isSignUpForm);
        if(isLoggedIn){
            setLoginForm(false);
        }
    }, [loginForm, isLoggedIn, isSignUpForm]);

    const loginHandler = () => {
        setLoginForm(true);
    };

    const signUpHandler = () => {
        setSignUpForm(true);
        setLoginForm(false);
        setLoggedIn(false);
    };

    const logoutHandler = () => {
        setLoggedIn(false);
        setLoginForm(false);
    };

    const removeLoginHandler = () => {

    };

    const loginButton = <Button name="Login" onClick={loginHandler}/>;
    const signUpButton = <Button name="SignUp" onClick={signUpHandler}/>;
    const logoutButton = <Button name="Logout" onClick={logoutHandler}/>;
    const loginFormVar = <LoginForm removeLoginForm={setLoggedIn} />;
    const signUpForm = <SignUpForm removeSignUpForm={setSignUpForm} />;

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Toptal Quiz Builder App</h1>
                {!loginForm && !isLoggedIn && !isSignUpForm && loginButton}
                {!loginForm && !isLoggedIn && !isSignUpForm && signUpButton}
                {isLoggedIn && logoutButton}
            </header>
            
            {loginForm && loginFormVar}
            {isSignUpForm && signUpForm}
        </Fragment>
    );
};

export default Header;