import React from 'react';
import MyLogo from "../UI/logo/MyLogo";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import classes from "./MyNavbar.module.css";

const MyNavbar = () => {
    return (
        <div className={classes.myNavbar}>

            <MyLogo>Oculeus</MyLogo>

            <MyInput placeholder = "Search..."/>

            <MyButton className='signOut'>Sign out</MyButton>

        </div>
    );
};

export default MyNavbar;