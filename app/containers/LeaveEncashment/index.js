import { Button, TextareaAutosize } from '@material-ui/core';
import React, { useEffect,useState } from 'react';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import Summary from '../../components/Summary';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
import { Add, AssignmentLateSharp, CalendarToday, CreateSharp, DetailsSharp, MonetizationOnSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
import SimpleModal from '../../components/Modal/requestsModal';

function LeaveEncashment() {
    //TODO:retrieve from API
    let leaveBalance = 25;
    let leaveEncashed = 0;
    let requestDate = new Date().toLocaleDateString();
    let options = []
    const [typeOfLeave, settypeOfLeave] = React.useState('');
    const [numberOfDays, setnumberOfDays] = React.useState(null);
    const [remarks, setremarks] = React.useState('');
    const [show, setShow] = useState(false)
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
    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };
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
            onChange={e => settypeOfLeave(e.target.value)}
            required />


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
            onChange={e => setnumberOfDays(e.target.value)}
            required />
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
                onChange={e => setremarks(e.target.value)}
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
           
           <SimpleModal open={showRequestsModal}  requests={requests[currentIndex]} path={'/leaveencashmentrequest'} deleteRequest={deleteRequest}/>
           
        </div>
    );
}

export default LeaveEncashment;
