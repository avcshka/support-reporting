import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, active, setActive, ...props}) => {

    const rootClasses = [classes.myBtn]
    if (active) {
        rootClasses.push(classes.active)
        console.log("active:", active);
    }

    return (
        <div>
            <button {...props} className={rootClasses.join(' ')}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;
