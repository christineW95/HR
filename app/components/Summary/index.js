import { Button, Grid, Paper, Stepper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Add, Assignment, AssignmentLateSharp } from '@material-ui/icons';
import MaterialUIPickers from '../Datepicker';
import Footer from '../Footer';
import FullWidthGrid from '../Grid';
import PageHeader from '../PageHeader';
import EmptyTextarea from '../TextArea';
import TextInput from '../TextInput';
import CustomizedSteppers from '../Stepper';
import SimpleModal from '../Modal/requestsModal';
function Summary(props) {
  const {opened,saved,closed,deleteRequest}=props
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 20,
      margin: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      height: 280,
      width: 220,
      textAlign: 'center',
      boxShadow: '2px 4px 2px 2px #9E9E9E',
      flexDirection: 'column',
      display: 'flex',
      margin: 20,
      justifyContent: 'center',
      // borderRadius: 200,
      alignItems: 'center',

      // color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [currentRequests,setCurrentRequests]=useState([])
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        style={{ alignItems: 'center', justifyContent: 'space-around' }}
      >
        <Grid xs={12} sm={4}>
          <Button onClick={()=>{
            setCurrentRequests(saved)
            handleOpen()}}>

          <Paper className={classes.paper}>
            <Assignment
              color="secondary"
              style={{ fontSize: 60, marginBlock: 20 }}
            />
            <h3
              to="page.path"
              style={{
                whiteSpace: 'nowrap',
                textAlign: 'justify',
                paddingInline:50,
                color: 'primary',
                fontWeight: 'bold',
                fontSize: 18,
                textDecoration: 'none',
              }}
            >
                Saved Requests
            </h3>
          </Paper>
          </Button>

        </Grid>
        <Grid xs={12} sm={4}>
        <Button onClick={()=>{
            setCurrentRequests(closed)
            handleOpen()}}>
          <Paper className={classes.paper}>
            <AssignmentTurnedInIcon
              color="secondary"
              style={{ fontSize: 60, marginBlock: 20 }}
            />
            <h3
              style={{
                whiteSpace: 'nowrap',
                textAlign: 'justify',
                color: 'primary',
                fontWeight: 'bold',
                fontSize: 18,
                paddingInline:50,

                

                textDecoration: 'none',
              }}
            >
                Completed Requests
            </h3>
          </Paper>
          </Button>
        </Grid>
        <Grid xs={12} sm={4}>
        <Button onClick={()=>{
            setCurrentRequests(opened)
            handleOpen()}}>
          <Paper className={classes.paper}>
            <AssignmentLateSharp
              color="secondary"
              style={{ fontSize: 60, marginBlock: 20 }}
            />

            <h3
              style={{
                whiteSpace: 'nowrap',
                padding:5,
                textAlign: 'justify',
                color: 'primary',
                fontWeight: 'bold',
                fontSize: 18,
                textDecoration: 'none',
              }}
            >
               Opened Requests
            </h3>
          </Paper>
          </Button>
        </Grid>
      </Grid>
      <SimpleModal open={open} handleClose={handleClose} requests={currentRequests} deleteRequest={deleteRequest}/>         

    </div>
  );
}

export default Summary;
