import React, {useEffect, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import axios from "axios";

const MyMainView = () => {
    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        fetchTable()
    }, [])

    async function fetchTable() {
        const responseTable =  await axios.get('https://test.oculeus.com/supportreport/get_report?dbeg=2022-05-31&dend=2022-08-03&ttt=2&typ=1')
        setRows(responseTable.data);
        setColumns(Object.keys(responseTable.data[0]));
    }

    return (
        <div className={classes.myMainView}>

            <MyHeaderView/>

            <hr/>

            <MyTable columns={columns} rows={rows}/>

        </div>
    );
};

export default MyMainView;