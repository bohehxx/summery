import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

ReactDOM.render(
    (<BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>




        </Switch>

    </BrowserRouter>),





    document.getElementById('root'));
registerServiceWorker();
