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
export default function DutyResumptionRequest() {
    const [actualdate, setactualdate] = useState(null);
    const [unplanneddays, setunplanneddays] = useState(null);
    const [unplannedadjdays, setunplannedadjdays] = useState(null);
    const [remarks, setremarks] = useState(null);


   
    
    const steps = [
        {
            step: 1,
            label:'Select Dates',
            completed: false,
            valid:false,
            icon:<DetailsSharp/>,
            content: <>
             <MaterialUIPickers
              label={"Actual Date:"}
              selected={actualdate}
            />
            <TextInput
              label="Unplanned days"
              style={{ display: "flex", width: 300, margin: 10 }}
              name="unplanneddays"
              type={"number"}
              value={unplanneddays}
            />
    
            <TextInput
              label="Unplanned Adj days"
              style={{ display: "flex", width: 300, margin: 10 }}
              name="unplannedadjdays"
              type={'number'}
              value={unplannedadjdays}
            />
            </>
        },
      
        {
            step: 2,
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
                <PageHeader />
                <CustomizedSteppers steps={steps} viewOnly={true}/>
            </form>
           
           
        </div>
    );
}

