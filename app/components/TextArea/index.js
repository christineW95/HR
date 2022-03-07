import * as React from 'react';
import TextareaAutosize from '@material-ui/material/TextareaAutosize';

export default function EmptyTextarea(props) {
    const { label } = props
    return (
        <div style={{
            flexDirection: 'row', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
            padding: 5
        }}>
            <label>{label}</label>
            <TextareaAutosize
                {...props}
                style={{ display: 'flex', width: 300, margin: 10,borderRadius:3,padding:15,backgroundColor:'transparent',borderColor:'lightgray' }}
            />
        </div>

    );
}