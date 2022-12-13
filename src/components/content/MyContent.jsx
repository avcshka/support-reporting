import React, {useEffect, useState} from 'react';
import classes from "./MyContent.module.css"
import MyTable from "../UI/table/MyTable";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";
import MyDatePicker from "../UI/datepicker/MyDatePicker";
import noDataImage from "../../assets/img/noDataImage.png"
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../../utils/pages";
import 'antd/dist/antd.css';
import MySearch from "../UI/search/MySearch";
import MyPagination from "../UI/pagination/MyPagination";

const MyContent = ({reportId}) => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [reportStartDate, setReportStartDate] = useState(new Date());
    const [reportEndDate, setReportEndDate] = useState(new Date());
    const [totalPages, setTotalPages] = useState(0);
    const limitRows = 16;
    const [page, setPage] = useState(0);
    const [totalRowsCount, setTotalRowsCount] = useState(0);
    const [filteredAndPagedRows, setFilteredAndPagedRows] = useState('');

    const [fetchTable, isReportLoading, reportError] = useFetching(async (id, dateStart, dateEnd) => {
        setRows([]);
        setColumns([]);
        const responseTable = await ReportService.getAll(id, dateStart, dateEnd)
        if (responseTable && responseTable.length) {
            setRows(responseTable);
            setColumns(Object.keys(responseTable[0]));
            setTotalRowsCount(responseTable.length);
            setTotalPages(getPageCount(responseTable.length, limitRows));
        }
    })

    const onChangeDate = (startDate, endDate) => {
        setReportStartDate(startDate)
        setReportEndDate(endDate)
    }

    useEffect(() => {
        setRows([]);
        setColumns([]);
        if (reportId > 0) {
            fetchTable(reportId, reportStartDate, reportEndDate);
        }
        setPage(0);
        setTotalRowsCount(0);
        setTotalPages(0);
    }, [reportId, reportStartDate, reportEndDate])

    const getFilteredAndPagedRows = (filteredRows) => {
        setFilteredAndPagedRows(filteredRows)
    }

    const getTotalPages = (totalPages) => {
        setTotalPages(totalPages)
    }

    return (
        <div className={classes.myMainView}>

            <div className={classes.filters}>
                <MySearch rows={rows} columns={columns} getFilteredAndPagedRows={getFilteredAndPagedRows}
                          limitRows={limitRows} page={page} getTotalPages={getTotalPages}
                />
                <MyDatePicker onChangeDate={onChangeDate}/>
            </div>

            {isReportLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}><Loader/></div>
                : !rows.length
                    ? <div className={classes.myNoDataImage}><img src={noDataImage} alt={'no Data...'}/></div>
                    : <MyTable style={{overflow: 'auto'}} columns={columns} rows={filteredAndPagedRows}/>
            }

            {reportError
                ?
                <h1 style={{display: 'flex', alignContent: 'center', justifyContent: 'center', color: 'gray'}}>Произошла
                    ошибка {reportError}</h1>
                : <div/>
            }
            <MyPagination totalPages={totalPages} totalRowsCount={totalRowsCount} limitRows={limitRows} setPage={setPage} />
        </div>
    )
};

export default MyContent;