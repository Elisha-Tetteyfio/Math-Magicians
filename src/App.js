import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CalcPage from './pages/CalcPage';
import Quote from './pages/Quote';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quote" exact>
            <Quote />
          </Route>
          <Route path="/calculator" exact>
            <CalcPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
