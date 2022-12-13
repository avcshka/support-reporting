import React from 'react';
import classes from "../../content/MyContent.module.css";
import {Pagination} from "antd";

const MyPagination = ({totalPages, totalRowsCount, limitRows, setPage}) => {
    return (
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
    );
};

export default MyPagination;