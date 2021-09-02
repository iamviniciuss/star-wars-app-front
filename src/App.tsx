// import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PeopleContextProvider } from './contexts/PeopleoContext';
import { Home } from './pages/Home';
import { People } from './pages/People';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PeopleContextProvider>
            <Route path="/" exact component={Home} />
          </PeopleContextProvider>
        </Switch>
    </BrowserRouter>
  );
}

export default App;