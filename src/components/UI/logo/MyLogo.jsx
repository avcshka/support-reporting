import React from 'react';
import classes from './MyLogo.module.css'

const MyLogo = () => {

    return (
        <div className={classes.myLogo}>
            <h2 style={{color:'white'}}>OCULEUS</h2>
            <h5 style={{color:'white'}}>report</h5>
        </div>
    );
};

export default MyLogo;