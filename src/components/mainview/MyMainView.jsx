import React, {useEffect, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";
import MyDatePicker from "../UI/datepicker/MyDatePicker";
import noDataImage from "../../assets/img/noDataImage.png"
import {useFetching} from "../hooks/useFetching";

const MyMainView = ({reportId}) => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [reportStartDate, setReportStartDate] = useState(new Date());
    const [reportEndDate, setReportEndDate] = useState(new Date());
    const [fetchTable, isReportLoading, reportError] = useFetching(async (id, dateStart, dateEnd) => {
        const responseTable = await ReportService.getAll(id, dateStart, dateEnd)
        if (responseTable && responseTable.length) {
            setRows(responseTable);
            setColumns(Object.keys(responseTable[0]));
        } else {
            setRows([]);
            setColumns([]);
        }

    })

    const onChangeDate = (startDate, endDate) => {
        setReportStartDate(startDate)
        setReportEndDate(endDate)
    }

    useEffect(() => {
        if (reportId > 0) {
            fetchTable(reportId, reportStartDate, reportEndDate);
        } else {
            setRows([]);
            setColumns([]);
        }
    }, [reportId, reportStartDate, reportEndDate])

    return (
        <div className={classes.myMainView}>

            <MyHeaderView/>

            <hr/>

            <MyDatePicker onChangeDate={onChangeDate} />

            {isReportLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}><Loader/></div>
                : !rows.length
                    ? <div className={classes.myNoDataImage}><img src={noDataImage} alt={'no Data...'}/></div>
                    : <MyTable columns={columns} rows={rows}/>
            }

            {reportError
                ? <h1 style={{display:'flex',alignContent:'center',justifyContent:'center', color:'gray'}}>Произошла ошибка {reportError}</h1>
                : <div></div>
            }

        </div>
    );
};

export default MyMainView;