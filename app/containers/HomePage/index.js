/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import{ AccessAlarmOutlined, AccessAlarmSharp, BubbleChart, BubbleChartSharp, CalendarTodaySharp, EventNoteSharp, ExplicitSharp, ExposureNeg1Sharp, ExposureRounded, FolderSharedSharp, HomeSharp, InsertDriveFileSharp, ListAltSharp, LocalAtmSharp, PagesOutlined, PlayCircleFilledSharp, ThreeDRotation } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import RetrieveSPData from '../../services/lists/list';
import SpacingGrid from '../../components/Grid';

const key = 'home';
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
export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const classes = useStyles();

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  const pages = [
    { path: '/trainingrequest', name: 'Training Request',icon:<ListAltSharp  color="secondary"  fontSize='large'/> },
     { path: '/leaveencashment', name: 'Leave Encashment' ,icon:<LocalAtmSharp  color="secondary"  fontSize='large'/>},
   { path: '/employeeservices', name: 'Employee Services',icon:<FolderSharedSharp  color="secondary"  fontSize='large'/> },
   { path: '/leavebalance', name: 'Leave Balance' ,icon:<ExposureRounded color="secondary"  fontSize='large'/>},
   { path: '/dutyresumption', name: 'Duty Resumption',icon:<PlayCircleFilledSharp color="secondary"  fontSize='large'/> },
   { path: '/leaverequest', name: 'Leave Request' ,icon:<EventNoteSharp color="secondary"  fontSize='large'/>},
   { path: '/payslip', name: 'Payslip' ,icon:<InsertDriveFileSharp color="secondary"  fontSize='large' />},
   ];
  return (
    <article>
      <title>Home Page</title>
      <meta
        name="description"
        content="A React.js Boilerplate application homepage"
      />
      <Button onClick={()=>{
        RetrieveSPData( window.location.host)
      }}>Call API</Button>
    
      <SpacingGrid pages={pages}>
      {pages.map((page) => (
                 <Grid item xs={6} sm={4}>
              <Paper className={classes.paper} style={{display:'flex',margin:5,padding:20,alignItems:'center',
               boxShadow: "2px 4px 2px 2px #9E9E9E",flexDirection:'column'}} >
{page.icon}

<Button
                  key={page.name}J
                  onClick={()=>console.log({x:page.path})}
                
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
      </SpacingGrid>

    </article >
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
