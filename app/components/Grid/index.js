import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AccessAlarm, AccessAlarmOutlined, AccessAlarmSharp, BubbleChart, BubbleChartSharp, CalendarTodaySharp, EventNoteSharp, ExplicitSharp, ExposureNeg1Sharp, ExposureRounded, FolderSharedSharp, HomeSharp, InsertDriveFileSharp, ListAltSharp, LocalAtmSharp, PagesOutlined, PlayCircleFilledSharp, ThreeDRotation } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,padding:20,
    margin:50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const pages = [{ path: '/', name: 'Home',icon:<HomeSharp  color="secondary"  fontSize='large'/> },
   { path: '/trainingrequest', name: 'Training Request',icon:<ListAltSharp  color="secondary"  fontSize='large'/> },
    { path: '/leaveencashment', name: 'Leave Encashment' ,icon:<LocalAtmSharp  color="secondary"  fontSize='large'/>},
  { path: '/employeeservices', name: 'Employee Services',icon:<FolderSharedSharp  color="secondary"  fontSize='large'/> },
  { path: '/leavebalance', name: 'Leave Balance' ,icon:<ExposureRounded color="secondary"  fontSize='large'/>},
  { path: '/dutyresumption', name: 'Duty Resumption',icon:<PlayCircleFilledSharp color="secondary"  fontSize='large'/> },
  { path: '/leaverequest', name: 'Leave Request' ,icon:<EventNoteSharp color="secondary"  fontSize='large'/>},
  { path: '/payslip', name: 'Payslip' ,icon:<InsertDriveFileSharp color="secondary"  fontSize='large' />},
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {pages.map((page) => (
                 <Grid item xs={6} sm={4}>
              <Paper className={classes.paper} style={{display:'flex',margin:5,padding:20,alignItems:'center',
               boxShadow: "2px 4px 2px 2px #9E9E9E",flexDirection:'column'}} >
{page.icon}

<Button
                  key={page.name}
                
                >
                  <Link to={page.path} style={{
                    whiteSpace: 'nowrap',
                    textAlign: 'justify',
                    color: 'primary',
                    fontWeight:'bold',
                    fontSize:18,
                    textDecoration:'none'
                  }}>
                    {page.name}
                  </Link>
                </Button>
              </Paper>
            </Grid>
          ))}
       
      </Grid>
    </div>
  );
}
