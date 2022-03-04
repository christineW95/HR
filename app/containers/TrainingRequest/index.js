import React, { useEffect } from 'react';
import BasicDatePicker from '../../components/Datepicker';
import Footer from '../../components/Footer';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
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


    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };

    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column' }}>
            <form onSubmit={handleSubmit} style={{
                flexGrow: 1,
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <h1>Request Details</h1>
                <TextInput
                    label="Course Name:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="coursename"
                    value={courseName}
                    onChange={e => setcourseName(e.target.value)}
                    required />

                <TextInput
                    label="Course Location:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="courseLocation"
                    value={courseLocation}
                    onChange={e => setcourseLocation(e.target.value)}
                    required />

                <TextInput
                    label="Class Name:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="className"
                    value={className}
                    onChange={e => setclassName(e.target.value)}
                    required />

                <label style={{ padding: 7 }}>
                    Request Date:
                    <label style={{ padding: 50 }}>
                        {requestDate}

                    </label>
                </label>
                <EmptyTextarea
                    label='Course Details:'
                    name="courseDetails"
                    value={courseDetails}
                    onChange={e => setcourseDetails(e.target.value)}
                />


                <TextInput
                    label="Cost:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="cost"
                    type={'number'}
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                    required />

                <BasicDatePicker label={"Begin Date:"} selected={beginDate} onSelect={(date) => setbeginDate(date)} startDate={new Date()} required />
                <BasicDatePicker label={"End Date:"} selected={endDate} required onSelect={(date) => {
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

                <TextInput
                    label="Training Provider:"
                    style={{ display: 'flex', width: 300, margin: 10 }}
                    name="trainingProvider"
                    value={trainingProvider}
                    onChange={e => settrainingProvider(e.target.value)}
                    required />

                <EmptyTextarea
                    label='Remarks:'
                    name="remarks"
                    value={remarks}
                    onChange={e => setremarks(e.target.value)}
                />


            </form>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Footer />

            </div>
        </div>
    );
}

export default TrainingRequest;
