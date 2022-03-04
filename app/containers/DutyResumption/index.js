import React, { useState } from "react";
import Footer from "../../components/Footer";
import BasicDatePicker from "../../components/Datepicker";
import EmptyTextarea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import CustomList from "../../components/List";
function DutyResumption() {
  const [actualdate, setactualdate] = useState(null);
  const [unplanneddays, setunplanneddays] = useState(null);
  const [unplannedadjdays, setunplannedadjdays] = useState(null);
  const [remarks, setremarks] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
let listOfLeaves=[];
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: 100,
        flexDirection: "column",
      }}
    >
                <h1>Completed Leaves</h1>

      <CustomList {...listOfLeaves}/>
      <form
        onSubmit={handleSubmit}
        style={{
          flexGrow: 1,
          display: "grid",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BasicDatePicker
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
        <EmptyTextarea
          label="Remarks:"
          name="remarks"
          value={remarks}
          onChange={(e) => setremarks(e.target.value)}
        />
      </form>
      <Footer />
    </div>
  );
}

export default DutyResumption;
