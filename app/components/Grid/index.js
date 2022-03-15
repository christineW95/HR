import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,padding:20,
    margin:50
  },

}));

export default function FullWidthGrid(props) {
    const {children}=props;
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    {children}
      </Grid>
    </div>
  );
}
