import { Button, TextareaAutosize } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import RadioButtonsGroup from '../../components/RadioGroup';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
import { Add, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, MonetizationOnSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
import Summary from '../../components/Summary';
import PageHeader from '../../components/PageHeader';
function EmployeeServices() {
    const [type, setType] = useState('')
    const [language, setLanguage] = useState('')
    //TODO:retrieve from API
    const [purpose, setpurpose] = React.useState('');
    const [to, setTo] = React.useState(null);
    const [remarks, setremarks] = React.useState('');
    const [show, setShow] = useState(false)


    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };
    const steps = [
        {
            step: 1,
            label:'Request Details',
            completed: false,
            valid:false,
            icon:<DetailsSharp/>,
            content: <>
             <RadioButtonsGroup
             label={'Service Type'}
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
            </>
        },
        {
            step: 2,
            label:'To Whom',
            completed: false,
            valid: false,
            icon:<CalendarToday/>,
            content: <> <TextInput
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
            </>

        },
        
        {
            step: 3,
            label:"Additional Details",
            completed: false,
            icon:<CreateSharp/>,
            valid: false,
            content: <> <EmptyTextarea
                label='Remarks:'
                name="remarks"
                value={remarks}
                onChange={e => setremarks(e.target.value)}
            />
            </>
        }
    ]
    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column',backgroundColor:'#fff' }}>
        <Summary/>

         <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
         <Button
             onClick={() => setShow(true)}
             variant="contained"
             color='primary' >
             <Add />
             Submit New</Button>
         </div>
        
        {
            show ? ( 
            

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection:'column',
         }}>
             <PageHeader />
             <CustomizedSteppers steps={steps} />
         </form>
        ):null
        }
        
        
     </div>
    );
}

export default EmployeeServices;
