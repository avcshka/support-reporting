import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyMenu from "../menu/MyMenu";
import MyMainView from "../mainview/MyMainView";
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
        const response = await axios.get('https://test.oculeus.com/supportreport/get_reports_list')
        const mergedMenuItems = [...defaultMenuItems, ...response.data];
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