import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function TextInput(props) {
    const { label, required, style, name, type, value, onChange } = props;
    return (
        <div style={{
            flexDirection: 'row', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
            padding: 5
        }}>
            <label>{label}</label>
            <TextField
                required={required}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                style={style}
                id="demo-helper-text-misaligned"

            />
        </div>
    );
}
