import React, {useEffect, useMemo, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import MyHeaderView from "./headerview/MyHeaderView";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";
import MyDatePicker from "../UI/datepicker/MyDatePicker";
import noDataImage from "../../assets/img/noDataImage.png"
import {useFetching} from "../hooks/useFetching";
import MySearchInput from "../UI/searchInput/MySearchInput";
import {getPageCount} from "../../utils/pages";

const MyMainView = ({reportId}) => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [reportStartDate, setReportStartDate] = useState(new Date());
    const [reportEndDate, setReportEndDate] = useState(new Date());
    const [totalPages, setTotalPages] = useState(0);
    const [limitRows] = useState(16);
    const [page, setPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const [fetchTable, isReportLoading, reportError] = useFetching(async (id, dateStart, dateEnd) => {
        const responseTable = await ReportService.getAll(id, dateStart, dateEnd)
        if (responseTable && responseTable.length) {
            setRows(responseTable);
            setColumns(Object.keys(responseTable[0]));
            const responseLength = responseTable.length;
            setTotalPages(getPageCount(responseLength, limitRows));
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
            setPage(0);
            fetchTable(reportId, reportStartDate, reportEndDate);
        } else {
            setRows([]);
            setColumns([]);
        }
    }, [reportId, reportStartDate, reportEndDate])

    const pagesArray = [...Array(totalPages).keys()];

    const getSearchQuery = (query) => {
        setSearchQuery(query);
    }

    const filteredRows = useMemo(() => {
        return rows.filter((row) => !searchQuery.toLowerCase() ||
            columns.some((column) => {
                if (row[column] === undefined) {
                    return false;
                }
                return row[column].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
            }));
    }, [searchQuery, rows, columns])

    const filteredAndPagedRows = useMemo(() => {
        setTotalPages(getPageCount(filteredRows.length, limitRows));
        return filteredRows.slice(page * limitRows, page * limitRows + limitRows);
    }, [filteredRows, page, limitRows])

    return (
        <div className={classes.myMainView}>
            <MyHeaderView/>

            <hr/>

            <div className={classes.searchInput}>

                <MySearchInput getSearchQuery={getSearchQuery}/>

                <MyDatePicker onChangeDate={onChangeDate}/>

            </div>

            {isReportLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}><Loader/></div>
                : !rows.length
                    ? <div className={classes.myNoDataImage}><img src={noDataImage} alt={'no Data...'}/></div>
                    : <MyTable columns={columns} rows={filteredAndPagedRows}/>
            }

            {reportError
                ? <h1 style={{display:'flex',alignContent:'center',justifyContent:'center', color:'gray'}}>Произошла ошибка {reportError}</h1>
                : <div></div>
            }

            <div>
                {pagesArray.map(p =>
                    <button
                        onClick={() => setPage(p)}
                        key={p}
                    >{p + 1}</button>
                )}
            </div>

        </div>
    );
};

export default MyMainView;