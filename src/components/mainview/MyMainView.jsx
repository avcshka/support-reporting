import React, {useEffect, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";

const MyMainView = ({reportId}) => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isReportLoading, setIsReportLoading] = useState(false);

    useEffect(() => {
        if (reportId > 0) {
            fetchTable(reportId);
        } else {
            setRows([]);
            setColumns([]);
        }
    }, [reportId])

    async function fetchTable(id) {
        setIsReportLoading(true);
        const responseTable = await ReportService.getAll(id);
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
            {!isReportLoading && !rows.length
                ? <h1>No data ...</h1>
                : <div></div>
            }

        </div>
    );
};

export default MyMainView;