import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function MaterialUIPickers(props) {
  const classes = useStyles();
  const { label ,style,value,onSelect,required} = props
  return (
    <div style={{
      ...containerStyle,...style,
  }}>
      <label style={{display:'flex',flex:3}} >{label}</label>
      <div style={{display:'flex',flex:7,paddingInlineStart:20}}>
      <TextField
value={value}
required={required}
 onChange={onSelect}
variant='outlined'
defaultValue={new Date().toISOString().split('T')[0]}
        id="date"
        type="date"
        className={classes.textField}

      />
        </div>
        </div>
    
  );
}
const containerStyle={
  flexDirection: 'row',
   display: 'flex',
  flex:1,
  alignItems: 'center',
  paddingBlock:20,
  margin:5
  
}