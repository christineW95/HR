import React, { useState } from "react";
import Footer from "../../components/Footer";
import MaterialUIPickers from "../../components/Datepicker";
import EmptyTextarea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import CustomList from "../../components/List";
function CancelLeaveRequest() {
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
                <h1>Current Leaves</h1>

      <CustomList {...listOfLeaves}/>
    
      <Footer />
    </div>
  );
}

export default CancelLeaveRequest;
