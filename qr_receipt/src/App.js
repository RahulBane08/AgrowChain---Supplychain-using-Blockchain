import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:batchNo" exact>
                    <Main />
                </Route>
                <Route path="/" exact>
                    Not valid URL
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
