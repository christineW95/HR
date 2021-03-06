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
         <Route exact path="/" component={HomePage} />
         <Route path="/profile" component={ProfilePage} />
         <Route path="/leaverequest" component={LeaveRequest} />
         <Route path="/trainingrequest" component={TrainingRequest} />
         <Route path="/leaveencashment" component={LeaveEncashment} />
         <Route path="/employeeservices" component={EmployeeServices} />
         <Route path="/payslip" component={Payslip} />
         <Route path="/leavebalance" component={LeaveBalance} />
         <Route path="/dutyresumption" component={DutyResumption} />
         <Route path="/cancelleaverequest" component={CancelLeaveRequest} />
         <Route path="/request" component={Request} />
         <Route path="/leaveencashmentrequest" component={LeaveEnchashmentRequest} />
         <Route path="/dutyresumptionrequest" component={DutyResumptionRequest} />
         <Route path="/employeeservicesrequest" component={EmployeeServicesRequest} />
         <Route path="/viewleaverequest" component={ViewLeaveRequest} />
        
         <Route path="" component={HomePage} />
       </Switch>
       <GlobalStyle />
     </AppWrapper>
   );
 }
 