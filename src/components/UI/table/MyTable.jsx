import React from 'react';
import classes from './MyTable.module.css'

const MyTable = ({rows, columns}) => {
    return (
        <div className={classes.myTable}>
            <table>
                {columns.map(column => {
                    return (
                        <th>
                            <tr>{column}</tr>
                        </th>
                    )
                })}

                {rows.map((row, key) => {
                    return (
                        <tr key={key}>
                            {columns.map(column => {
                                return (
                                    <td>{row[column]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default MyTable;