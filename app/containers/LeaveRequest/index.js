import React from "react";
import Footer from "../../components/Footer";
import MaterialUIPickers from "../../components/Datepicker";
import MultipleSelect from "../../components/select";

import EmptyTextarea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import { Link } from "react-router-dom";
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

  let options = [];
  const [typeOfLeave, settypeOfLeave] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: 100,
        flexDirection: "column",
      }}
    >
     
      <form
        onSubmit={handleSubmit}
        style={{
          flexGrow: 1,
          display: "grid",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      
        <h1>Request Details</h1>

        {/* TODO:send the options */}
        <MultipleSelect
          label="Type of Leave:"
          options={options}
          value={typeOfLeave}
          onChange={(e) => settypeOfLeave(e.target.value)}
          required
        />

        <label style={{ padding: 7 }}>
          Leave Balance:
          <label style={{ padding: 52 }}>{leaveBalance}</label>
        </label>
      

        <TextInput
          label=" Number of days:"
          style={{ display: "flex", width: 300, margin: 10 }}
          name="numofdays"
          type={"number"}
          value={numberOfDays}
          onChange={(e) => setnumberOfDays(e.target.value)}
          required
        />

        
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
        <MaterialUIPickers
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
        <EmptyTextarea
          label="Remarks:"
          name="remarks"
          value={remarks}
          onChange={(e) => setremarks(e.target.value)}
        />
           <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Link
          to={"/dutyresumption"}
          style={{
            whiteSpace: "nowrap",
            textAlign: "justify",
            textDecoration: "none",
          }}
        >
          View Completed Requests
        </Link>
        <Link
          to={"/cancelleaverequest"}
          style={{
            whiteSpace: "nowrap",
            textAlign: "justify",
            textDecoration: "none",
          }}
        >
          View Current Requests
        </Link>
      </div>
      </form>
      <Footer />
    </div>
  );
}

export default LeaveRequest;
