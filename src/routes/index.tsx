import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard/index';
import Repository from '../Pages/Repository/index';

const Routes: React.FC = () => (
  <Switch>
    {/* switch will gatantee that only one route will be shown at a time */}
    <Route path="/dashboard" exact component={Dashboard} />
    {/* You need EXACT in order to not put all routes containing '/' to go to dashboard  */}
    <Route path="/repository/:repository+" component={Repository} />
    {/* <Route path="/repository/:repository+" component={Repository} /> */}
  </Switch>
);

export default Routes;
