import { Button, TextareaAutosize } from '@mui/material';
import React, { useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../../components/Footer';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
function LeaveEncashment() {
    //TODO:retrieve from API
    let leaveBalance = 25;
    let leaveEncashed = 0;
    let requestDate = new Date().toLocaleDateString();
    let options = []
    const [typeOfLeave, settypeOfLeave] = React.useState('');
    const [numberOfDays, setnumberOfDays] = React.useState(null);
    const [remarks, setremarks] = React.useState('');


    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };

    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column' }}>
            <form onSubmit={handleSubmit} style={{
                flexGrow: 1,
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <h1>Request Details</h1>


                {/* TODO:send the options */}
                <MultipleSelect
                    label="Type of Leave:"
                    options={options}
                    value={typeOfLeave}
                    onChange={e => settypeOfLeave(e.target.value)}
                    required />

                <label style={{ padding: 7 }}>
                    Leave Balance:
                    <label style={{ padding: 20 }}>{leaveBalance}</label>
                </label>
                <label style={{ padding: 7 }}>
                    Leave Encashed:
                    <label style={{ padding: 10 }}>{leaveEncashed}</label>
                </label>
                <TextInput
                    label=" Number of days:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="numofdays"
                    type={'number'}
                    value={numberOfDays}
                    onChange={e => setnumberOfDays(e.target.value)}
                    required />

                <label style={{ padding: 7 }}>
                    Request Date:
                    <label style={{ padding: 30 }}>
                        {requestDate}

                    </label>
                </label>

                <EmptyTextarea
                    label='Remarks:'
                    name="remarks"
                    value={remarks}
                    onChange={e => setremarks(e.target.value)}
                />



            </form>
            <Footer />
        </div >
    );
}

export default LeaveEncashment;
