import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector(props) {
    const [date, setDate] = useState(new Date());

    function handleDate(date) {
        props.dateCallback(date);
        setDate(date);
    }

    // TODO make it look prettier
    // TODO date button
    // TODO margins

    // TODO DO WE NEED BUTTON? DO IT WITH ONCHANGE INSTEAD?
    return (
        <div>
            <DatePicker dateFormat='dd MMMM yyyy' selected={date} onChange={(newDate) => handleDate(newDate)} />
            <Button onClick={props.searchCallback}>Search</Button>
        </div>
    )
};

export default DateSelector;