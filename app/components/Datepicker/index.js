import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function BasicDatePicker(props) {
    const { label } = props
    return (
        <div style={{
            flexDirection: 'row', display: 'flex',
            alignItems: 'center', justifyContent: 'space-evenly',
            padding: 5
        }}>
            <label style={{ width: 200 }}>{label}</label>
            <DatePicker {...props} />
        </div>
    );
}
