import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector(props) {
    const [date, setDate] = useState(new Date());
    const [showDateDropdown, setShowDateDropdown] = useState(true)
    const [count, setCount] = useState(0)

    function handleDate(newDate) {
        if (newDate.toString() !== date.toString() || count < 1) {
            setDate(newDate);
            props.searchCallback(newDate);
        }
        setShowDateDropdown(false);
        setCount(count + 1);
    }

    return (
        <div>
            <DatePicker
                todayButton='Today'
                inline={showDateDropdown}
                selected={date}
                onChange={(newDate) => handleDate(newDate)}
                minDate={dateSelector(props.yearRange - (2 * props.yearRange))}
                maxDate={dateSelector(props.yearRange)}
                dateFormat='dd MMMM yyyy'
            />
        </div>
    )
};

function dateSelector(numberOfYearsInFutureOrPast) {
    const today = new Date();
    return new Date().setYear(today.getFullYear() + numberOfYearsInFutureOrPast);
}

export default DateSelector;