import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage';

import Actor from './components/Actor/Actor';
import Director from './components/Director/Director';
import Movie from './components/Movie/Movie';
import EditActor from './components/Actor/EditActor'
import EditDirector from "./components/Director/EditDirector";
import EditMovie from "./components/Movie/EditMovie";



function App() {
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route path="/" exact render={props => (<HomePage {...props}/>)}></Route>
                  <Route path="/actor" exact render={props => (<Actor {...props}/>)}></Route>
                  <Route path="/actor/Edit/:id" exact render={props => (<EditActor {...props}/>)}></Route>
                  <Route path="/director" exact render={props => (<Director {...props}/>)}></Route>
                  <Route path="/director/Edit/:id" exact render={props => (<EditDirector {...props}/>)}></Route>
                  <Route path="/movie" exact render={props => (<Movie {...props}/>)}></Route>
                  <Route path="/movie/Edit/:id" exact render={props => (<EditMovie {...props}/>)}></Route>

              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
