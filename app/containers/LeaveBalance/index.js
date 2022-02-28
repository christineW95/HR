import { Button, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RadioButtonsGroup from '../../components/RadioGroup';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import BasicTable from '../../components/Table';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
function LeaveBalance() {




    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column' }}>
            <h1>Leave Details</h1>
            <BasicTable />
        </div >
    );
}

export default LeaveBalance;
