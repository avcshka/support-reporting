import React, {useEffect, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";

const MyMainView = () => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isReportLoading, setIsReportLoading] = useState(false);

    useEffect(() => {
        fetchTable()
    }, [])

    async function fetchTable() {
        setIsReportLoading(true);
        const responseTable =  await ReportService.getAll();
        setRows(responseTable);
        setColumns(Object.keys(responseTable[0]));
        setIsReportLoading(false);
    }

    return (
        <div className={classes.myMainView}>
            <MyHeaderView/>
            <hr/>
            {isReportLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}><Loader/></div>
                : <MyTable columns={columns} rows={rows}/>
            }
        </div>
    );
};

export default MyMainView;