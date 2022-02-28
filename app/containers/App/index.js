/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import ProfilePage from '../Profilepage';
import LeaveRequest from '../LeaveRequest';
import TrainingRequest from '../TrainingRequest';
import LeaveEncashment from '../LeaveEncashment';

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
        <Route path="/features" component={FeaturePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/leaveRequest" component={LeaveRequest} />
        <Route path="/trainingrequest" component={TrainingRequest} />
        <Route path="/leaveencashment" component={LeaveEncashment} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
