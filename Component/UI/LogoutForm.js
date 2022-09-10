import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Layout/Button";

const LogoutForm = (props) => {
    const history = useHistory();
    useEffect(() => {
        props.setLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
        history.push('/');
    }, []);
    
    return(
        <Fragment></Fragment>
    )
};

export default LogoutForm;