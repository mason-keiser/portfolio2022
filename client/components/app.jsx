import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing';

const App = (props) => {
    
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={(props) => (<Landing {...props}/>)}/>
            </Switch>
        </Router>  
    )
}

export default App
