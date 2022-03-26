import { Button, Grid, Paper, Stepper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MaterialUIPickers from '../../components/Datepicker';
import Footer from '../../components/Footer';
import FullWidthGrid from '../../components/Grid';
import PageHeader from '../../components/PageHeader';
import EmptyTextarea from '../../components/TextArea';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import TextInput from '../../components/TextInput';
import { Add, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, MonetizationOnSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
import Summary from '../../components/Summary';
function LeaveEnchashmentRequest() {

    const [courseName, setcourseName] = React.useState('');
    const [courseLocation, setcourseLocation] = React.useState('');
    const [className, setclassName] = React.useState('');
    const [requestDate, setrequestDate] = React.useState(new Date().toLocaleDateString());
    const [courseDetails, setcourseDetails] = React.useState('');
    const [cost, setCost] = React.useState('');
    const [beginDate, setbeginDate] = React.useState(new Date());
    const [endDate, setendDate] = React.useState(null);
    const [duration, setduration] = React.useState(0);
    const [trainingProvider, settrainingProvider] = React.useState('');
    const [remarks, setremarks] = React.useState('');
    const [show, setShow] = useState(false)


   
    const steps = [
        {
            step: 1,
            label:'Balance',
            completed: false,
            valid:false,
            icon:<DetailsSharp/>,
            content: <>
              <label style={{ padding: 7,marginBlock:10, }}>
            Request Date: {requestDate}
           
        </label>
        <TextInput
            label="Leave Balance"
            style={{ display: 'flex', width: 300, margin: 30 }}
            value={leaveBalance}
             />
            <TextInput
            label="Leave Encashed"
            style={{ display: 'flex', width: 300, margin: 10 }}
            value={leaveEncashed}
             />



        <MultipleSelect
            label="Type of Leave"
            options={options}
            value={typeOfLeave}
             />


            </>
            
        },
        {
            step: 2,
            label:'Select Dates',
            completed: false,
            valid: false,
            icon:<CalendarToday/>,
            content: <>
              <TextInput
            label=" Number of days:"
            style={{ display: 'flex', width: 300, margin: 10 }}
            name="numofdays"
            type={'number'}
            value={numberOfDays}
             />
            </>

        },
       
        {
            step: 3,
            label:"Additional Details",
            completed: false,
            icon:<CreateSharp/>,
            valid: false,
            content: <> 
            <EmptyTextarea
                label='Remarks:'
                name="remarks"
                value={remarks}
            />
            </>
        }
    ]
    const deleteRequest=(requestIndex,requestsType)=>{
        switch(requestsType)
        {
            case 'open':
                openedRequests.splice(requestIndex,1);
                case 'closed':
                    closedRequests.splice(requestIndex,1);
                    case 'saved':
                        savedRequests.splice(requestIndex,1);

        }
    }
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

export default LeaveEnchashmentRequest;
