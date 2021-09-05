import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePageContextProvider } from './contexts/HomeContext';
import { PeopleContextProvider } from './contexts/PeopleoContext';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <PeopleContextProvider>
            <HomePageContextProvider>
              <Route path="/" exact component={Home} />
            </HomePageContextProvider>
          </PeopleContextProvider>
        </Switch>
    </BrowserRouter>
  );
}

export default App;