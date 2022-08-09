import React from 'react';
import classes from './MyTable.module.css'

const MyTable = ({rows, columns}) => {
    return (
        <div className={classes.myTable}>
            <table>
                <thead>
                <tr>
                    {columns.map((column, index) => {
                        return (
                            <th key={'head_' + index}>{column}</th>
                        )
                    })}
                </tr>
                </thead>

                <tbody>
                {rows.map((row, index) => {
                    return (
                        <tr key={'row_' + index}>
                            {columns.map((column, index) => {
                                return (
                                    <td key={'cell_' + index}>{row[column]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default MyTable;