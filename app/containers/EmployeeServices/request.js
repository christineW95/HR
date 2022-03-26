import { Button, Grid, Paper, Stepper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MaterialUIPickers from '../../components/Datepicker';
import FullWidthGrid from '../../components/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import RadioButtonsGroup from '../../components/RadioGroup';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
import { Add, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, MonetizationOnSharp, PersonAddSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
import Summary from '../../components/Summary';
import PageHeader from '../../components/PageHeader';

export default function EmployeeServicesRequest() {

    const [type, setType] = useState('')
    const [language, setLanguage] = useState('')
    //TODO:retrieve from API
    const [purpose, setpurpose] = React.useState('');
    const [to, setTo] = React.useState(null);
    const [remarks, setremarks] = React.useState('');


   
    
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
            icon:<PersonAddSharp/>,
            content: <> <TextInput
            label="To"
            style={{ display: 'flex', width: 300, margin: 10 }}
            name="to"
            value={to}
             />

        <TextInput
            label="Purpose"
            style={{ display: 'flex', width: 300, margin: 10 }}
            name="purpose"
            value={purpose}
             />
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
            />
            </>
        }
    ]
  
    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column',backgroundColor:'#fff' }}>

           
           
          <form  style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <CustomizedSteppers steps={steps} viewOnly={true}/>
            </form>
           
           
        </div>
    );
}

