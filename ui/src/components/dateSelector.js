import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector(props) {
    const [date, setDate] = useState(new Date());

    function handleDate(date) {
        setDate(date);
        // TODO only make request if date is different to last one?
        props.searchCallback(date)
    }

    // TODO make it look prettier
    // TODO margins

    return (
        <div>
            <DatePicker
                todayButton='Today'
                placeholderText="Select a date"
                startOpen={true}
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