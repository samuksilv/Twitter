import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import TimeLine from "./pages/TimeLine/TimeLine";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact  component={Login} />
        <Route path="/timeline" component={TimeLine} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
