import React, {useEffect, useState} from 'react';
import MySidebar from "../sidebar/MySidebar";
import MyContent from "../content/MyContent";
import ReportService from "../../API/ReportService";
import classes from "./MyMain.module.css"

const MyMain = () => {
    const [activeMenuItemId, setActiveMenuItemId] = useState(0);
    const [menuItems, setMenuItems] = useState([]);
    const defaultMenuItems = [
        {id: 0, title: 'Home', icon: 'HomeOutlined'},
        {id: -1, title: 'Users', icon: 'UserOutlined'},
    ];

    useEffect(() => {
        fetchReportList()
    }, [])

    async function fetchReportList() {
        const responseReportList = await ReportService.getMenu()
        const mergedMenuItems = [...defaultMenuItems, ...responseReportList];
        setMenuItems(mergedMenuItems);
    }

    const changeActiveMenuItems = (id) => {
        setActiveMenuItemId(id);
    }

    return (
        <div className={classes.myMain}>

            <MySidebar menuItems={menuItems} changeActiveMenuItem={changeActiveMenuItems}/>

            <MyContent reportId={activeMenuItemId}/>

        </div>
    );
};

export default MyMain;