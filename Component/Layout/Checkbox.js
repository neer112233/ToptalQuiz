import { Fragment, useEffect, useState } from "react";

import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        console.log("use checkbox...");
        props.isSolution(isChecked);
    }, [isChecked]);

    const onChangeHandler = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <Fragment>
            <div>
                <label>
                    <input type="checkbox" checked={isChecked} onChange={onChangeHandler} />
                    {props.label}
                </label>
            </div>
        </Fragment>
    );
};

export default Checkbox;