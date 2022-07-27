import React from 'react';
import MyButton from "../UI/button/MyButton";
import {HomeOutlined, UnorderedListOutlined, UserOutlined} from "@ant-design/icons";
import classes from "./MyMenu.module.css"


const MyMenu = () => {
    return (
        <div className={classes.myMenu}>

            <MyButton>
                <HomeOutlined className={classes.iconButton}/>
                Home
            </MyButton>

            <MyButton>
                <UserOutlined className={classes.iconButton}/>
                Users
            </MyButton>

            <hr/>

            <MyButton>
                <UnorderedListOutlined className={classes.iconButton}/>
                Reports
            </MyButton>

        </div>
    );
};

export default MyMenu;