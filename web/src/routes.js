import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';

function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route exat={true} path='/login' component={Login} />
            <Route exat={true} path='/' component={Register} />
        </Switch>
    </BrowserRouter>
);
    }

export default Routes;