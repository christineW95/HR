/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';
import ProfilePage from '../Profilepage';
import LeaveRequest from '../LeaveRequest';
import TrainingRequest from '../TrainingRequest';
import LeaveEncashment from '../LeaveEncashment';
import EmployeeServices from '../EmployeeServices';
import Payslip from '../Payslip';
import LeaveBalance from '../LeaveBalance';
import DutyResumption from '../DutyResumption';
import CancelLeaveRequest from '../CancelLeaveRequest';
import Request from '../TrainingRequest/request';
import LeaveEnchashmentRequest from '../LeaveEncashment/request';
import DutyResumptionRequest from '../DutyResumption/request';
import EmployeeServicesRequest from '../EmployeeServices/request';
import ViewLeaveRequest from '../LeaveRequest/request';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>

      <Header />
      <Switch>
        <Route exact path="/HR"  component={HomePage} basename='/HR' />
        <Route path="/HR/profile" component={ProfilePage} />
        <Route path="/HR/leaverequest" component={LeaveRequest} />
        <Route path="/HR/trainingrequest" component={TrainingRequest} />
        <Route path="/HR/leaveencashment" component={LeaveEncashment} />
        <Route path="/HR/employeeservices" component={EmployeeServices} />
        <Route path="/HR/payslip" component={Payslip} />
        <Route path="/HR/leavebalance" component={LeaveBalance} />
        <Route path="/HR/dutyresumption" component={DutyResumption} />
        <Route path="/HR/cancelleaverequest" component={CancelLeaveRequest} />
        <Route path="/HR/request" component={Request} />
        <Route path="/HR/leaveencashmentrequest" component={LeaveEnchashmentRequest} />
        <Route path="/HR/dutyresumptionrequest" component={DutyResumptionRequest} />
        <Route path="/HR/employeeservicesrequest" component={EmployeeServicesRequest} />
        <Route path="/HR/viewleaverequest" component={ViewLeaveRequest} />
       
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
