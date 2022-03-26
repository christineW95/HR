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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OutlinedCard from '../../components/Card';
function PayslipRequest() {
  const [actualdate, setactualdate] = useState(null);
  const [remarks, setremarks] = React.useState("");
  const steps = [
    {
        step: 1,
        label:'Request Details',
        completed: false,
        valid:false,
        icon:<DetailsSharp/>,
        content: <>
  
  <MaterialUIPickers
          label="Actual Date:"
          selected={actualdate}
        />
       
      </>  
    },
    {
      step: 2,
      label:"Additional Details",
      completed: false,
      icon:<CreateSharp/>,
      valid: false,
      content: <> 
       <EmptyTextarea
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

           
           
          <form  style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <CustomizedSteppers steps={steps} viewOnly={true}/>
            </form>
            <>
          <div
            style={{
              display: 'flex',
              margin:20,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <OutlinedCard>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Pay
              </Typography>
              <Typography variant="h5" component="div">
                15,000
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Net Balance
              </Typography>
              <Typography variant="h5" component="div">
                15,000
              </Typography>
            </OutlinedCard>
            <OutlinedCard>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Deductions
              </Typography>
              <Typography variant="h5" component="div">
                15,000
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Net Balance
              </Typography>
              <Typography variant="h5" component="div">
                15,000
              </Typography>
            </OutlinedCard>
          </div>
          <div style={{ marginBlock: 50 }}>
            <OutlinedCard>
              <Typography
                variant="h5"
                sx={{ fontSize: 24, fontWeight: 'bold' }}
                color="text.secondary"
                gutterBottom
              >
                Current Bank Account Details
              </Typography>
              <Typography variant="h7" component="div">
                Bank Name
              </Typography>
              <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                ABC
              </Typography>
              <Typography variant="h7" component="div">
                Account Number
              </Typography>
              <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                123456489
              </Typography>
            </OutlinedCard>
          </div>
        </>
           
        </div>
    );
}

export default PayslipRequest;
