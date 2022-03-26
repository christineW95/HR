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
import CustomizedSteppers from '../../components/Stepper';
import Summary from '../../components/Summary';
import MultipleSelect from '../../components/select';
import { AssignmentIndSharp, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, KeyboardArrowUpSharp, MonetizationOnSharp } from '@material-ui/icons';

function ViewLeaveRequest() {
  const [country, setCountry] = React.useState("");

  let leaveBalance = 25;
  let reportingDate = new Date().toISOString().split('T')[0]
  const [beginDate, setbeginDate] = React.useState(null);
  const [endDate, setendDate] = React.useState(null);
  const [numberOfDays, setnumberOfDays] = React.useState(null);
  const [address, setaddress] = React.useState(null);
  const [replacement, setreplacement] = React.useState(null);
  const [remarks, setremarks] = React.useState("");
  const [phone, setphone] = React.useState(null);
  const [typeOfLeave, settypeOfLeave] = React.useState("");

  let options = [];

   
    
    const steps = [
        {
            step: 1,
            label:'Leave Details',
            completed: false,
            valid:false,
            icon:<DetailsSharp/>,
            content: <>
           
                <label style={{ padding: 7 }}>
              Leave Balance:
              <label style={{ padding: 52 }}>{leaveBalance}</label>
            </label>
            <MultipleSelect
              label="Type of Leave:"
              options={options}
              value={typeOfLeave}
            />
             <TextInput
              label=" Number of days:"
              style={{ display: "flex", width: 300, margin: 10 }}
              name="numofdays"
              type={"number"}
              value={numberOfDays}
            />
            </>
        },
        {
            step: 2,
            label:'Select Dates',
            completed: false,
            valid: false,
            icon:<CalendarToday/>,
            content: <> <MaterialUIPickers
            label={"Expected Reporting Date:"}
            value={reportingDate}
          />
            <MaterialUIPickers
            label={"Begin Date:"}
            value={beginDate}
          />
          <MaterialUIPickers
            label={"End Date:"}
            value={endDate}
            
          />
            </>
    
        },
        {
            step: 3,
            label:"Leave Information",
            icon:<AssignmentIndSharp/>,
            completed: false,
            valid: false,
            content: <> 
              <EmptyTextarea
              label="Address during Leave"
              name="address"
              value={address}
            />
    
            <TextInput
              label="Country"
              style={{ display: "flex", width: 300, margin: 10 }}
              name="country"
              value={country}
            />
    
            <TextInput
              label="Telephone Number"
              style={{ display: "flex", width: 300, margin: 10 }}
              name="phone"
              type={"number"}
              value={phone}
            />
    
            {/* TODO:send the options */}
            <MultipleSelect
              label="Replacement Person"
              options={options}
              value={replacement}
            />
    
            </>
        },
        {
            step: 4,
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

export default ViewLeaveRequest;
