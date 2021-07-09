import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector(props) {
    const [date, setDate] = useState(new Date());

    function handleDate(date) {
        setDate(date);
        props.searchCallback(date)
    }

    // TODO make it look prettier
    // TODO date button
    // TODO margins

    // TODO need to sanitize the date range? In here or the API? Seems to limit to 100 years in past and future
    return (
        <div>
            <DatePicker dateFormat='dd MMMM yyyy' selected={date} onChange={(newDate) => handleDate(newDate)} />
        </div>
    )
};

export default DateSelector;