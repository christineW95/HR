import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
    const { options, value, onChange, horizontal, label } = props;
    return (
        <FormControl>
               {label ? <label style={{fontWeight:'bold'}}>{label}</label>
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

        </FormControl>
    );
}
