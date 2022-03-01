import { Button, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../../components/Footer';
import RadioButtonsGroup from '../../components/RadioGroup';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
function EmployeeServices() {
    const [type, setType] = useState('')
    const [language, setLanguage] = useState('')
    //TODO:retrieve from API
    const [purpose, setpurpose] = React.useState('');
    const [to, setTo] = React.useState(null);
    const [remarks, setremarks] = React.useState('');


    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };

    return (
        <div style={{ display: 'flex', flex: 1, padding: 100 }}>
            <form onSubmit={handleSubmit} style={{
                flexGrow: 1,
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <h1>Request Details</h1>
                <RadioButtonsGroup
                    value={type}
                    onChange={e => setType(e)}
                    options={[{
                        value: 'salary',
                        label: 'Salary Certificate'
                    },
                    {
                        value: 'employment_certificate',
                        label: 'Employment Certificate'
                    },
                    {
                        value: 'id',
                        label: 'ID Cards'
                    },
                    {
                        value: 'health',
                        label: 'Health Cards'
                    }]} />
                <RadioButtonsGroup
                    direction={'row'}
                    label="Language"
                    horizontal={true}
                    value={language}
                    onChange={e => setLanguage(e)}
                    options={[{
                        value: 'en',
                        label: 'English'
                    },
                    {
                        value: 'ar',
                        label: 'Arabic'
                    },
                    ]} />


                <TextInput
                    label="To"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="to"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    required />

                <TextInput
                    label="Purpose"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="purpose"
                    value={purpose}
                    onChange={e => setpurpose(e.target.value)}
                    required />



                <EmptyTextarea
                    label='Remarks:'
                    name="remarks"
                    value={remarks}
                    onChange={e => setremarks(e.target.value)}
                />
                {/* <div style={{}}>
                    <Button variant="contained" style={{ margin: 20 }}>Submit</Button>

                </div> */}
                <Footer />

            </form>

        </div >
    );
}

export default EmployeeServices;
