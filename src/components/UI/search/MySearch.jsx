import React, {useMemo, useState} from 'react';
import cl from './MySearch.module.css'
import MySearchInput from "../searchInput/MySearchInput";
import {getPageCount} from "../../../utils/pages";
const MySearch = ({rows, columns, getFilteredAndPagedRows, limitRows, page, getTotalPages}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(0);

    const getSearchQuery = (query) => {
        setSearchQuery(query);
        getFilteredAndPagedRows(filteredAndPagedRows);
        getTotalPages(totalPages);
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
        <div className={cl.filters}>

            <MySearchInput getSearchQuery={getSearchQuery}/>

        </div>
    );
};

export default MySearch;