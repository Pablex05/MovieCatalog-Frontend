import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Editar from "./components/Editar";
import HomePage from "./components/HomePage";
import Actor from "./components/Actor/Actor";
import Director from "./components/Director/Director";
import Movie from "./components/Movie/Movie";


function App() {
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route path="/" exact render={props => (<Login {...props}/>)}></Route>
                  <Route path="/register" exact render={props => (<Register {...props}/>)}></Route>
                  <Route path="/dashboard" exact render={props => (<Dashboard {...props}/>)}></Route>
                  <Route path="/editar/:id" exact render={props => (<Editar {...props}/>)}></Route>
                  <Route path="/homepage" exact render={props => (<HomePage {...props}/>)}></Route>
                  <Route path="/actor" exact render={props => (<Actor {...props}/>)}></Route>
                  <Route path="/director" exact render={props => (<Director {...props}/>)}></Route>
                  <Route path="/movie" exact render={props => (<Movie {...props}/>)}></Route>

              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
