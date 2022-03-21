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
function Summary(props) {

   
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1, padding: 20,
            margin: 50
            ,justifyContent:'center',alignItems:'center',
        },
        paper: {
            height: 280,
            width:220,
            textAlign: 'center',
            boxShadow: "2px 4px 2px 2px #9E9E9E",
             flexDirection: 'column',
            display: 'flex',
             margin: 10,
            //   padding: 20, 
            justifyContent: 'center', 
            // borderRadius: 200, 
            alignItems: 'center',

            // color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

  
    return (
        <div className={classes.root} >
        <Grid container spacing={3} style={{alignItems:'center',justifyContent:'space-around'}}>
        <Grid xs={12} sm={4}>
                <Paper  className={classes.paper}>
                    <AssignmentTurnedInIcon color='secondary' style={{ fontSize: 60, marginBlock: 20 }} />
                    <Link to={"page.path"} style={{
                        whiteSpace: 'nowrap',
                        textAlign: 'justify',
                        color: 'primary',
                        fontWeight: 'bold',
                        fontSize: 18,
                        textDecoration: 'none'
                    }}>
                        Saved Requests
                    </Link>
                </Paper>
            </Grid>
            <Grid xs={12} sm={4}>
                <Paper  className={classes.paper}>
                    <AssignmentTurnedInIcon color='secondary' style={{ fontSize: 60, marginBlock: 20 }} />
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
            <Grid xs={12} sm={4}>
                <Paper  className={classes.paper}  >
                    <AssignmentLateSharp color='secondary' style={{ fontSize: 60, marginBlock: 20 }} />

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
    );
}

export default Summary;
