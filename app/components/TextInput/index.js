import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function TextInput(props) {
    const { label, required, style, name, type, value, onChange } = props;
    return (
        <div style={{
            flexDirection: 'row', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
            padding: 5,
            marginBlock:5
        }}>
            <TextField
                required={required}
                variant="outlined"
                type={type}
                label={label}
                value={value}
                onChange={onChange}
                color={required && !value ? 'secondary' : 'success'}
                name={name}
                style={{style,backgroundColor:'#fff'}}
                id="demo-helper-text-misaligned"

            />
        </div>
    );
}
