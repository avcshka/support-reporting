import React from 'react';
import classes from "./MainBtn.module.css"

const MainBtn = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.mainBtn}>
                {children}
            </button>
        </div>
    );
};

export default MainBtn;