import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cl from './MyDatePicker.module.css'


const MyDatePicker = ({onChangeDate}) => {
    const [dateRange, setDateRange] = useState('');
    const [startDate, endDate] = dateRange;
    const [nowStartDate, setNowStartDate] = useState('')
    const [nowEndDate, setNowEndDate] = useState('')

    const onDateTable = (id,startDate, endDate) => {
        setNowStartDate(startDate);
        setNowEndDate(endDate);
        onChangeDate(startDate,endDate);
    }

    return (
        <div className={cl.datePickerContainer}>
            <div className={cl.datePicker}>
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                        onDateTable();
                        console.log('Сработал onChange')
                    }}
                />
            </div>
        </div>
    );
};

export default MyDatePicker;