import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import convertDate from "../../../helpers/convertDate";
import "react-datepicker/dist/react-datepicker.css";
import cl from './MyDatePicker.module.css'
import moment from "moment/moment";

const MyDatePicker = ({onChangeDate}) => {
    const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate())
    const [endDate, setEndDate] = useState(moment().toDate())


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