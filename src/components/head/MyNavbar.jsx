import React from 'react';
import MyInput from "../UI/input/MyInput";
import MyLogo from "../UI/logo/MyLogo";
import classes from "./MyNavbar.module.css";
import MyButton from "../UI/button/MyButton";

const MyNavbar = () => {
    return (
        <div className={classes.myNavbar}>

            <MyLogo>
                Oculeus
            </MyLogo>

            <MyInput
                placeholder = "Search..."
            />
            <MyButton>
                Sign out
            </MyButton>
        </div>
    );
};

export default MyNavbar;