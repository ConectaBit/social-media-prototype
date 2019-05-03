import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/register'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exat path='/' component = {Register}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;