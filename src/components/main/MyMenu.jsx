import React from 'react';
import MyButton from "../UI/button/MyButton";
import classes from "./MyMenu.module.css"
import {HomeOutlined, UnorderedListOutlined, UserOutlined} from "@ant-design/icons";

const MyMenu = () => {
    return (

        <div className={classes.myMenu}>

            <MyButton style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <HomeOutlined style={{
                    marginRight: '10px'
                }}/>
                <p> Home </p>
            </MyButton>

            <MyButton style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <UserOutlined style={{
                    marginRight: '10px'
                }}/>
                Users
            </MyButton>

            <hr/>

            <MyButton style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <UnorderedListOutlined style={{
                    marginRight: '10px'
                }}/>
                Reports
            </MyButton>
        </div>
    );
};

export default MyMenu;