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
  const {onPress}=props
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

 const requests=['Saved Requests', '  Completed Requests  ', 'Opened Requests']
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        style={{ alignItems: 'center', justifyContent: 'space-around' }}
      >
        {
          requests.map((item,index)=>
          <Grid xs={12} sm={4}>
          <Button onClick={()=>
            onPress(index)}>

          <Paper className={classes.paper}>
            <Assignment
              color="secondary"
              style={{ fontSize: 60, marginBlock: 20 }}
            />
            <h3
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
                {item}
            </h3>
          </Paper>
          </Button>

        </Grid>
          )
        }
     
        {/* <Grid xs={12} sm={4}>
        <Button onClick={()=>{
            setCurrentRequests(closed)
            onPress}}>
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
            onPress}}>
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
        </Grid> */}
      </Grid>

    </div>
  );
}

export default Summary;
