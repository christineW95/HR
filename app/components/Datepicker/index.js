import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function BasicDatePicker(props) {
    const { label ,style} = props
    return (
        <div style={{
            ...containerStyle,...style,
        }}>
            <label style={{display:'flex',flex:3}} >{label}</label>
            <div style={{display:'flex',flex:7,marginInline:40}}>
            <DatePicker {...props} />

            </div>
        </div>
    );
}
const containerStyle={
    flexDirection: 'row',
     display: 'flex',
    flex:1,
    alignItems: 'center',
    padding: 5,
    paddingBlock:20,
    margin:5
    
}