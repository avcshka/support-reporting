import React from 'react';
import MyCalendar from "../../UI/calendar/MyCalendar";
import classes from "./MyHeaderView.module.css"

const MyHeaderView = () => {
    return (
        <div className={classes.headerView}>
            <h1>Reports</h1>
            <MyCalendar />
        </div>
    );
};

export default MyHeaderView;