import * as React from 'react';
import Radio from '@material-ui/material/Radio';
import RadioGroup from '@material-ui/material/RadioGroup';
import FormControlLabel from '@material-ui/material/FormControlLabel';
import FormControl from '@material-ui/material/FormControl';
import FormLabel from '@material-ui/material/FormLabel';

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
