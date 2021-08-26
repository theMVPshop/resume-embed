import React from 'react';
import { Switch, Route } from 'react-router';
import ResumeBuilder from './components/ResumeBuilder';



function Router() {

  return (
    <Switch>
      
      <Route path='/' component={ResumeBuilder}></Route>

    </Switch>
  );
}

export default Router;
