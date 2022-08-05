import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {

    return (
        <input
            style={{outline: 'none',}}
            type={"text"}
            ref={ref}
            className={classes.myInput}
            {...props}
        />
    );
});

export default MyInput;