import React from 'react';
import MyMenu from "../menu/MyMenu";
import MyMainView from "../mainview/MyMainView";
import classes from "./MyMain.module.css"

const MyMain = () => {
    return (
        <div className={classes.myMain}>

            <MyMenu />

            <MyMainView />

        </div>
    );
};

export default MyMain;