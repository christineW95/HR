import React, { useState } from "react";
import Footer from "../../components/Footer";
import MaterialUIPickers from "../../components/Datepicker";
import EmptyTextarea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import CustomList from "../../components/List";
import { Add, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, MonetizationOnSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
import Summary from '../../components/Summary';
import { Button } from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
function DutyResumption() {
  const [actualdate, setactualdate] = useState(null);
  const [unplanneddays, setunplanneddays] = useState(null);
  const [unplannedadjdays, setunplannedadjdays] = useState(null);
  const [remarks, setremarks] = useState(null);
  const [show, setShow] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
  };
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
          onSelect={(date) => setactualdate(date)}
          startDate={new Date()}
          required
        />
        <TextInput
          label="Unplanned days"
          style={{ display: "flex", width: 300, margin: 10 }}
          name="unplanneddays"
          type={"number"}
          value={unplanneddays}
          onChange={(e) => setunplanneddays(e.target.value)}
          required
        />

        <TextInput
          label="Unplanned Adj days"
          style={{ display: "flex", width: 300, margin: 10 }}
          name="unplannedadjdays"
          type={'number'}
          value={unplannedadjdays}
          onChange={(e) => setunplannedadjdays(e.target.value)}
          required
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
            onChange={e => setremarks(e.target.value)}
        />
        </>
    }
]
let listOfLeaves=[];
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
               show ? ( <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <PageHeader />
                <CustomizedSteppers steps={steps} />
            </form>):null
           }

      
  
    </div>
  );
}

export default DutyResumption;
