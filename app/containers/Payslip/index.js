import React, { useEffect, useState } from "react";
import OutlinedCard from "../../components/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MaterialUIPickers from "../../components/Datepicker";
function Payslip() {
  const [actualdate, setactualdate] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: 100,
        flexDirection: "column",
      }}
    >
      <h1>Employee Details</h1>

      <MaterialUIPickers
        label={"Actual Date:"}
        selected={actualdate}
        onSelect={(date) => setactualdate(date)}
        startDate={new Date()}
        required
        style={{}}
      />

      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button
          variant="contained"
          style={{ margin: 20, alignItems: "center" }}
        >
          View
        </Button>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "row" ,justifyContent:'space-evenly'}}>
        <OutlinedCard>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
      <div style={{marginBlock:50}}>
      <OutlinedCard>
          <Typography sx={{ fontSize: 20,fontWeight:'bold' }} color="text.secondary" gutterBottom>
Current Bank Account Details
          </Typography>
          <Typography variant="h7" component="div">
            Bank Name
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ahmed Zidan
          </Typography>
          <Typography variant="h7" component="div">
            Account Number
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
123456489
          </Typography>
         </OutlinedCard>
        
      </div>
    </div>
  );
}

export default Payslip;
