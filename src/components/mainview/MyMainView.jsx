import React, {useEffect, useMemo, useState} from 'react';
import classes from "./MyMainView.module.css"
import MyTable from "../UI/table/MyTable";
import ReportService from "../../API/ReportService";
import Loader from "../UI/Loader/Loader";
import MyDatePicker from "../UI/datepicker/MyDatePicker";
import noDataImage from "../../assets/img/noDataImage.png"
import {useFetching} from "../hooks/useFetching";
import MySearchInput from "../UI/searchInput/MySearchInput";
import {getPageCount} from "../../utils/pages";
import {Pagination} from "antd";
import 'antd/dist/antd.css';

const MyMainView = ({reportId}) => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [reportStartDate, setReportStartDate] = useState(new Date());
    const [reportEndDate, setReportEndDate] = useState(new Date());
    const [totalPages, setTotalPages] = useState(0);
    const limitRows = 16;
    const [page, setPage] = useState(0);
    const [totalRowsCount, setTotalRowsCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

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

            <div className={classes.searchInput}>
                <MySearchInput getSearchQuery={getSearchQuery}/>

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

            <div className={classes.paginationAndRows}>
                {totalPages > 1
                    ? <div className={classes.rowsCount}> Всего {totalPages} стр. где {totalRowsCount} записей</div>
                    : <div/>
                }

                {totalPages > 1
                    ? <Pagination
                        showQuickJumper
                        pageSize={limitRows}
                        total={totalRowsCount}
                        onChange={(p) => setPage(p - 1)}
                    />
                    : <div/>
                }
            </div>
        </div>
    )
};

export default MyMainView;