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
import { Add, AssignmentLateSharp } from '@material-ui/icons';
import CustomizedSteppers from '../../components/Stepper';
function TrainingRequest() {

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
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1, padding: 20,
            margin: 50
            ,justifyContent:'center',alignItems:'center',
        },
        paper: {
            height: 300,
            width:250,
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };
    const steps = [
        {
            step: 1,
            label:'Training Details',
            completed: false,
            valid:false,
            content: <>
              <label style={{ padding: 7 }}>
                    Request Date:
                    <label style={{ padding: 50 }}>
                        {requestDate}

                    </label>
                </label>
                <TextInput
                    label="Course Name"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="coursename"
                    value={courseName}
                    onChange={e => setcourseName(e.target.value)}
                    required />

                <TextInput
                    label="Course Location"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="courseLocation"
                    value={courseLocation}
                    onChange={e => setcourseLocation(e.target.value)}
                    required />

                <TextInput
                    label="Class Name"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="className"
                    value={className}
                    onChange={e => setclassName(e.target.value)}
                    required />

              
                <EmptyTextarea
                    label='Course Details'
                    name="courseDetails"
                    value={courseDetails}
                    onChange={e => setcourseDetails(e.target.value)}
                />
            </>
        },
        {
            step: 2,
            label:'Select Dates',
            completed: false,
            valid: false,
            content: <><MaterialUIPickers label={"Begin Date:"} selected={beginDate} onSelect={(date) => setbeginDate(date)} startDate={new Date()} required />
                <MaterialUIPickers label={"End Date:"} selected={endDate} required onSelect={(date) => {
                    setendDate(date)
                    if (beginDate) {
                        var Difference_In_Time = date.getTime() - beginDate.getTime();

                        // To calculate the no. of days between two dates
                        var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
                        if (Difference_In_Days > 0)
                            setduration(Difference_In_Days)
                        else
                            alert("End date must be after Begin Date")
                    }
                }
                } />


                <label style={{ padding: 7 }}>
                    Duration:
                    <label style={{ padding: 80 }}>
                        {duration}
                    </label>
                </label>
            </>

        },
        {
            step: 3,
            label:"Cost",
            completed: false,
            valid: false,
            content: <>  <TextInput
                label="Cost"
                style={{
                    display: 'flex', width: 300, margin: 10,
                    backgroundColor: 'white',
                }}
                name="cost"
                type={'number'}
                value={cost}
                onChange={e => setCost(e.target.value)}
                required />


                <TextInput
                    label="Training Provider:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="trainingProvider"
                    value={trainingProvider}
                    onChange={e => settrainingProvider(e.target.value)}
                    required />

            </>
        },
        {
            step: 4,
            label:"Additional Details",
            completed: false,
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
            <div className={classes.root} >
                <Grid container spacing={5} style={{alignItems:'center'}}>
                    <Grid xs={12} sm={6}>
                        <Paper className={classes.paper} style={{
                            display: 'flex', margin: 10, padding: 20, justifyContent: 'center', borderRadius: 200, alignItems: 'center',
                            boxShadow: "2px 4px 2px 2px #9E9E9E", flexDirection: 'column'
                        }} >
                            <AssignmentTurnedInIcon color='secondary' style={{ fontSize: 100, marginBlock: 20 }} />
                            <Link to={"page.path"} style={{
                                whiteSpace: 'nowrap',
                                textAlign: 'justify',
                                color: 'primary',
                                fontWeight: 'bold',
                                fontSize: 18,
                                textDecoration: 'none'
                            }}>
                                Completed Requests
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Paper className={classes.paper} style={{
                            display: 'flex', margin: 10, padding: 20, justifyContent: 'center', borderRadius: 200, alignItems: 'center',
                            boxShadow: "2px 4px 2px 2px #9E9E9E", flexDirection: 'column'
                        }} >
                            <AssignmentLateSharp color='secondary' style={{ fontSize: 100, marginBlock: 20 }} />

                            <Link to={"page.path"} style={{
                                whiteSpace: 'nowrap',
                                textAlign: 'justify',
                                color: 'primary',
                                fontWeight: 'bold',
                                fontSize: 18,
                                textDecoration: 'none'
                            }}>
                                Opened Requests
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Button
                onClick={() => setShow(true)}
                variant="contained"
                color='primary' >
                <Add />
                Submit New</Button>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <PageHeader />
                <CustomizedSteppers steps={steps} />




            </form>
           
        </div>
    );
}

export default TrainingRequest;
