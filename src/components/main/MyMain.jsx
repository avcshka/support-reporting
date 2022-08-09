import React, {useEffect, useState} from 'react';
import MyMenu from "../menu/MyMenu";
import MyMainView from "../mainview/MyMainView";
import ReportService from "../../API/ReportService";
import classes from "./MyMain.module.css"

const MyMain = () => {
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

    return (
        <div className={classes.myMain}>

            <MyMenu menuItems={menuItems}/>

            <MyMainView/>

        </div>
    );
};

export default MyMain;