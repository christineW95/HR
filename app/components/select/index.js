import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect(props) {
    const { value, onChange, required, options } = props
    const theme = useTheme();

    return (
        <div style={{
            padding: 5, flexDirection: 'row', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between'
        }}>

            <label>{props.label}</label>
            <Select
                style={{ display: 'flex', width: 300, margin: 10 }}
                required={required}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={value}
                onChange={onChange}
                variant='outlined'
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, name, theme)}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}
