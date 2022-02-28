import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ display: 'flex', width: 300, margin: 10 }}
            />
        </div>

    );
}