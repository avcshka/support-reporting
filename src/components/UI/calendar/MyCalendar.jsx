import React from 'react';
import MainBtn from "../mainbtn/MainBtn";
import {CalendarOutlined} from "@ant-design/icons";
import classes from "./MyCalendar.module.css"

const MyCalendar = () => {
    return (
        <div className={classes.myCalendar}>
            <MainBtn style={{
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
                borderRight: 'none'
            }}>Share</MainBtn>

            <MainBtn style={{
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px'
            }}>Export</MainBtn>

            <MainBtn style={{
                marginLeft: '10px'
            }}>
                <CalendarOutlined style={{paddingRight: '10px'}}/>
                Calendar
            </MainBtn>
        </div>
    );
};

export default MyCalendar;