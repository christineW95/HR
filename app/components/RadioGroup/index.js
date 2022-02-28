import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup(props) {
    const { options, value, onChange, horizontal, label } = props;
    return (
        <FormControl>
            <div style={{
                flexDirection: 'row', display: 'flex',
                alignItems: 'center', justifyContent: 'space-between',
                padding: 5
            }}>

                {label ? <label>{label}</label>
                    : null}
                <RadioGroup
                    row={horizontal}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value}
                    onChange={e => {

                        onChange(e.target.value)
                    }}
                >
                    {
                        options.map(option => (
                            <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                        )
                        )
                    }
                </RadioGroup>
            </div>

        </FormControl>
    );
}
