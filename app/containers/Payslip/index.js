import { Button, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BasicDatePicker from '../../components/Datepicker';
import RadioButtonsGroup from '../../components/RadioGroup';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
function Payslip() {
    const [actualdate, setactualdate] = useState(null);


    return (
        <div    style={{
            display: "flex",
            flex: 1,
            padding: 100,
            flexDirection: "column",
          }}
      >
                <h1>Employee Details</h1>

<BasicDatePicker
          label={"Actual Date:"}
          selected={actualdate}
          onSelect={(date) => setactualdate(date)}
          startDate={new Date()}
          required
          style={{}}
        />

        <div style={{justifyContent:'center',display:'flex'}}>

      <Button variant="contained" style={{ margin: 20,alignItems:'center' }}>View</Button>
      </div>

        </div >
    );
}

export default Payslip;
