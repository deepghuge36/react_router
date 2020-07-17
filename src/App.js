import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav from './Reusable/Nav'
import Names from "./Components/Names";
import Details from './Components/Details'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
          <Switch>
            <Route path='/names' exact component={Names} />
            <Route path='/details_page/:id'  component={Details} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
