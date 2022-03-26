import React, { useEffect, useState } from 'react';

import Footer from "../../components/Footer";
import MaterialUIPickers from "../../components/Datepicker";
import MultipleSelect from "../../components/select";

import EmptyTextarea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import { Link } from "react-router-dom";
import { Add, ArrowUpward, AssignmentIndSharp, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, KeyboardArrowUpSharp, MonetizationOnSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
import Summary from '../../components/Summary';
import { Button } from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import Fab from '@material-ui/core/Fab';
import SimpleModal from '../../components/Modal/requestsModal';

function LeaveRequest() {
  const [country, setCountry] = React.useState("");
  //TODO:retrieve from API
  let leaveBalance = 25;
  let reportingDate = new Date().toISOString().split('T')[0]
  const [beginDate, setbeginDate] = React.useState(null);
  const [endDate, setendDate] = React.useState(null);
  const [numberOfDays, setnumberOfDays] = React.useState(null);
  const [address, setaddress] = React.useState(null);
  const [replacement, setreplacement] = React.useState(null);
  const [remarks, setremarks] = React.useState("");
  const [phone, setphone] = React.useState(null);
  const [show, setShow] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [showRequestsModal, setShowRequestsModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const openedRequests=[
    {
        title:'Test',
        date:new Date().toLocaleString(),
        actions:['view']
    },
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view']
    }
]
const savedRequests=[
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view','delete']
    },
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view','delete']

    },
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view','delete']

    }
]
const closedRequests=[
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view']
    },
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view']
    },
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view']
    },
    {
        title:'Test',
        date: new Date().toLocaleString(),
        actions:['view']
    }
]
const requests=[{'saved':savedRequests},{'closed':closedRequests},{'open':openedRequests}]
    const [allRequests,setAllRequests]=useState(requests)
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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let options = [];
  const [typeOfLeave, settypeOfLeave] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
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
          onChange={(e) => settypeOfLeave(e.target.value)}
          required
        />
         <TextInput
          label=" Number of days:"
          style={{ display: "flex", width: 300, margin: 10 }}
          name="numofdays"
          type={"number"}
          value={numberOfDays}
          onChange={(e) => setnumberOfDays(e.target.value)}
          required
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
        onSelect={(e) => setbeginDate(e.target.value)}
      
        required
      />
      <MaterialUIPickers
        label={"End Date:"}
        value={endDate}
        required
        onSelect={(e) => {
          setendDate(e.target.value);
          if (beginDate) {
            var Difference_In_Time =new Date(endDate).getTime() - new Date(beginDate).getTime();

            // To calculate the no. of days between two dates
            var Difference_In_Days = Math.round(
              Difference_In_Time / (1000 * 3600 * 24)
            );
            if (Difference_In_Days > 0) setduration(Difference_In_Days);
            else alert("End date must be after Begin Date");
          }
        }}
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
          onChange={(e) => setaddress(e.target.value)}
        />

        <TextInput
          label="Country"
          style={{ display: "flex", width: 300, margin: 10 }}
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        <TextInput
          label="Telephone Number"
          style={{ display: "flex", width: 300, margin: 10 }}
          name="phone"
          type={"number"}
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          required
        />

        {/* TODO:send the options */}
        <MultipleSelect
          label="Replacement Person"
          options={options}
          value={replacement}
          onChange={(e) => setreplacement(e.target.value)}
          required
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
            onChange={e => setremarks(e.target.value)}
        />
     
          
        </>
    }
]
  return (
    <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column',backgroundColor:'#fff' }}>

<Summary onPress={(index)=>
           {setCurrentIndex(index)
           setShowRequestsModal(true)}
        }/>

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
           <div>

           <Fab color={'secondary'} style={{float:'right'}} onClick={handleOpen}>
           <KeyboardArrowUpSharp/>
          </Fab>
          <SimpleModal open={showRequestsModal}  requests={requests[currentIndex]} path={'/viewleaverequest'} deleteRequest={deleteRequest}/>
          </div>
           
    </div>
  );
}

export default LeaveRequest;
