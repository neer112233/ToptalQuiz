import { useEffect, useRef, useState } from "react";

import classes from './SignUpForm.module.css';

const SignUpForm = (props) => {
    const [isfirstName, setFirstName] = useState(false);
    const [isLastName, setLastName] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [isPassword, setPassword] = useState(false);
    const [isSignUpValid, setSignValid] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    useEffect(() => {
        if(isSignUpValid){
            props.removeSignUpForm(false);
        }
    }, [isSignUpValid]);

    const submitHandler = (event) => {
        event.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        var count = 0;

        if(firstName.length>0){
            setFirstName(true);
            count++;
        }
        else{
            setFirstName(false);
        }

        if(lastName.length>0){
            setLastName(true);
            count++;
        }
        else{
            setLastName(false);
        }

        if(email.indexOf('@')>0){
            setEmail(true);
            count++;
        }
        else{
            setEmail(false);
        }

        if(password.length>=6){
            setPassword(true);
            count++;
        }
        else{
            setPassword(false);
        }

        if(count==4){
            setSignValid(true);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label>First Name</label><br />
            <input ref={firstNameRef} label="first_name" /><br />
            {!isfirstName && <p>Please enter first name.</p>}
            <label>Last Name</label><br />
            <input ref={lastNameRef} label="last_name" /><br />
            {!isLastName && <p>Please enter last name.</p>}
            <label>Email</label><br />
            <input ref={emailRef} label="Email" /><br />
            {!isPassword && <p>Please enter email.</p>}
            <label>Password</label><br />
            <input ref={passRef} label="password" /><br />
            {!isPassword && <p>Please enter password.</p>}
            <input type="submit" value="Submit"></input>
        </form>        
    );
};

export default SignUpForm;