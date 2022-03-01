import React, { useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../../components/Footer';
function TrainingRequest() {

    const [courseName, setcourseName] = React.useState('');
    const [courseLocation, setcourseLocation] = React.useState('');
    const [className, setclassName] = React.useState('');
    const [requestDate, setrequestDate] = React.useState(new Date().toLocaleDateString());
    const [courseDetails, setcourseDetails] = React.useState('');
    const [cost, setCost] = React.useState('');
    const [beginDate, setbeginDate] = React.useState(new Date());
    const [endDate, setendDate] = React.useState(null);
    const [duration, setduration] = React.useState(null);
    const [trainingProvider, settrainingProvider] = React.useState('');
    const [remarks, setremarks] = React.useState('');


    const handleSubmit = event => {
        //TODO:handle submit call API
        event.preventDefault();
    };

    return (
        <div >
            <form onSubmit={handleSubmit} style={{
                flexGrow: 1,
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <h1>Request Details</h1>

                <label>
                    Course Name:
                    <input
                        name="coursename"
                        value={courseName}
                        onChange={e => setcourseName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Course Location:
                    <input
                        name="courseLocation"
                        value={courseLocation}
                        onChange={e => setcourseLocation(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Class Name:
                    <input
                        name="className"
                        value={className}
                        onChange={e => setclassName(e.target.value)}
                        required
                    >

                    </input>
                </label>
                <label>
                    Request Date:
                    <input
                        name="requestDate"
                        value={requestDate}
                    >
                    </input>
                </label>





                <label>
                    Course Details:
                    <textarea
                        name="courseDetails"
                        value={courseDetails}
                        onChange={e => setcourseDetails(e.target.value)}
                    >
                    </textarea>
                </label>
                <label>
                    Cost:
                    <input
                        name="cost"
                        type={"number"}
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                        required
                    >
                    </input>
                </label>
                <label style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
                    Begin Date:
                    <DatePicker selected={beginDate} onSelect={(date) => setbeginDate(date)} startDate={new Date()} required />
                </label>
                <label style={{ flexDirection: 'row', display: 'flex', flex: 1, }}>
                    End Date:
                    <DatePicker selected={endDate} required onSelect={(date) => {
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
                </label>
                <label>
                    Duration:
                    <input
                        name="duration"
                        value={duration}
                    >

                    </input>
                </label>
                <label>
                    Training Provider:
                    <input
                        name="trainingProvider"
                        value={trainingProvider}
                        onChange={e => settrainingProvider(e.target.value)}
                        required
                    >

                    </input>
                </label>
                <label>
                    Remarks:
                    <textarea
                        name="remarks"
                        value={remarks}
                        onChange={e => setremarks(e.target.value)}

                    >

                    </textarea>
                </label>

                <button>Submit</button>
            </form>
            <Footer />
        </div>
    );
}

export default TrainingRequest;
