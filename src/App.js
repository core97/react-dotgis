import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* --- Pages Components --- */
import Home from './components/pages/Home';
import WeatherCharts from './components/pages/WeatherCharts';

import Layout from './components/layout';

import './App.scss';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/weather-charts" component={WeatherCharts} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
