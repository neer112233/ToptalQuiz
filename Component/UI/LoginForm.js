import { useRef, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

import Constants from "../Configs/Constants";

import classes from "./LoginForm.module.css";

const loginController = async (email, password) => {
    const url = Constants.baseURL + "login";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', '*/*');
    // headers.append('Origin','http://localhost:3000');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');

    const requestOptions = {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: headers
    };    

    const fetchCall = async () => {
        try{
            console.log("Hello 1");
            const response = await fetch(url,requestOptions);
            console.log("Hello 2");
            const json = await response.json();
            console.log("Hello 3");
            console.log(json);
            return json;
        }
        catch(error){
            console.log(error);
        }
    }

    fetchCall();
};

const LoginForm = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isEmailCorrect, setEmailCorrect] = useState(false);
    const [isPasswordCorrect, setPasswordCorrect] = useState(false);

    const history = useHistory();

    const submitHandler = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const isEmailCorrectV = email.indexOf('@') != -1;
        const isPasswordCorrectV = password.length >= 2;

        if (isEmailCorrectV) {
            setEmailCorrect(true);
        }

        if (isPasswordCorrectV) {
            setPasswordCorrect(true);
        }

        if (isEmailCorrectV && isPasswordCorrectV) {
            props.setLoggedIn(true);
            console.log("wait before");
            const data = await loginController(email, password);
            console.log("wait");
            console.log(data);
            
            localStorage.setItem('isLoggedIn', true);

            history.push("/");
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label>Email</label><br />
            <input ref={emailRef} label="Email" /><br />
            {!isEmailCorrect && <p>Please enter correct Email.</p>}
            <label>Password</label><br />
            <input ref={passwordRef} label="Password" /><br />
            {!isPasswordCorrect && <p>Please enter correct password.</p>}
            <input type="submit" value="Submit"></input>
        </form>
    );
};

export default LoginForm;