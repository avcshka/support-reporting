import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import convertDate from "../../../helpers/convertDate";
import "react-datepicker/dist/react-datepicker.css";
import cl from './MyDatePicker.module.css'

const MyDatePicker = ({onChangeDate}) => {
    const currentDay = new Date();
    const [startDate, setStartDate] = useState(new Date(currentDay.getFullYear(), currentDay.getMonth() - 1, 1))
    const [endDate, setEndDate] = useState(new Date(currentDay.getFullYear(), currentDay.getMonth(), 0))

    useEffect(() => {
        if (startDate && endDate) {
            onChangeDate(convertDate(startDate), convertDate(endDate));
        }
    }, [startDate, endDate])

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    return (
        <div>
            <DatePicker
                className={cl.datePicker}
                dateFormat="dd/MM/yyyy"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    onChange(update);
                }}
                maxDate={new Date()}
                placeholderText="Input your date"
                showDisabledMonthNavigation
            />
        </div>
    );
};

export default MyDatePicker;