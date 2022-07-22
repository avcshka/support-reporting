import React from 'react';
import MyMenu from "./MyMenu";
import MyMainView from "./MyMainView";
import classes from "./MyMain.module.css"

const MyMain = () => {
    return (
        <div className={classes.myMain}>
            <MyMenu>

            </MyMenu>

            <MyMainView>

            </MyMainView>
        </div>
    );
};

export default MyMain;