import React from 'react';
import classes from "../main/MyMainView.module.css"
import MainBtn from "./mainbtn/MainBtn";
import {CalendarOutlined} from "@ant-design/icons";

const MyMainView = () => {
    return (
        <div className={classes.myMainView}>

                <MainBtn>
                    Share
                </MainBtn>

                <MainBtn>
                    Export
                </MainBtn>

                <MainBtn>
                    <CalendarOutlined>
                    </CalendarOutlined>
                    This week
                </MainBtn>

        </div>
    );
};

export default MyMainView;