import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Routes/Home';
import Content from './Routes/Content';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/content" component={Content} />
    </Switch>
  </Router>
);

export default App;
