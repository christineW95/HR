import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OutlinedCard from '../../components/Card';
import MaterialUIPickers from '../../components/Datepicker';
import CustomizedSteppers from '../../components/Stepper';
import SimpleModal from '../../components/Modal/requestsModal';
import { Add, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, MonetizationOnSharp } from '@material-ui/icons';
import Summary from '../../components/Summary';
import PageHeader from '../../components/PageHeader';
import EmptyTextarea from '../../components/TextArea';

function Payslip() {
  const [actualdate, setactualdate] = useState(null);
  const [show, setShow] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showRequestsModal, setShowRequestsModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [remarks, setremarks] = React.useState("");

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
        onSelect={date => setactualdate(date)}
        startDate={new Date()}
        required
        style={{}}
      />
      {/* <div style={{ justifyContent: 'center', display: 'flex' }}>
      <Button
        onClick={() => setShowResults(true)}
        variant="contained"
        color="secondary"
        style={{ margin: 20, alignItems: 'center' }}
      >
        View
      </Button>
    </div> */}
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
    <div
      style={{
        display: 'flex',
        flex: 1,
        padding: 100,
        flexDirection: 'column',
        backgroundColor:'#fff'
      }}
    >
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
               show ? ( <form  style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <PageHeader />
                <CustomizedSteppers steps={steps} />
            </form>):null
           }
           <SimpleModal open={showRequestsModal}  requests={requests[currentIndex]} path={'/paysliprequest'} deleteRequest={deleteRequest}/>

    
     
      {/* {showResults ? (
        <>
          <div
            style={{
              display: 'flex',
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
      ) : null} */}
    </div>
  );
}

export default Payslip;
