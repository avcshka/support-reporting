import React, {useEffect, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";
import MyDatePicker from "../UI/datepicker/MyDatePicker";

const MyMainView = ({reportId}) => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isReportLoading, setIsReportLoading] = useState(false);
    const [startDateTable, setStartDateTable] = useState('')
    const [endDateTable, setEndDateTable] = useState('');
    const [getDate, setGetDate] = useState('')

    const onChangeDate = (startDate, endDate) => {
        // const dateNow = new Date().toLocaleString()
        setStartDateTable(startDate)
        setEndDateTable(endDate)
    }

    useEffect(() => {
        if (reportId > 0) {
            fetchTable(reportId);
        } else {
            setRows([]);
            setColumns([]);
            setGetDate('');
        }
    }, [reportId])

    async function fetchTable(id) {
        setIsReportLoading(true);
        const responseTable = await ReportService.getAll(id);
        setGetDate(responseTable);
        setRows(responseTable);
        setColumns(Object.keys(responseTable[0]));
        setIsReportLoading(false);
    }

    return (
        <div className={classes.myMainView}>

            <MyHeaderView/>

            <hr/>

            <MyDatePicker setGetDate={getDate} onChangeDate={onChangeDate} />

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