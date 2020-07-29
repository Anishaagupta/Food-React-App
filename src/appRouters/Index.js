import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DineOutpage from '../pages/DineOutpage/Index';
import Citiespage from '../pages/Citiespage/Index';
import TopChefpage from '../pages/TopChefpage/Index';
import Gourmetpage from '../pages/Gourmetpage/Index';

const Routes = () => {
  return (
    <React.Fragment>
      <div>
        <Switch>
          <Route exact path='/' component={DineOutpage} />
          <Route exact path='/gourmet' component={Gourmetpage} />
          <Route exact path='/topchef' component={TopChefpage} />
          <Route exact path='/cities' component={Citiespage} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Routes;
