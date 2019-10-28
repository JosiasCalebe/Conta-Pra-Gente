import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Link from './pages/Links';
import Chat from './pages/Chat';
import Mural from './pages/Mural';
import Videos from './pages/Videos';
import Login from './pages/Login';
import NotFound from './pages/NotFound';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path='/chat' component={Chat} /> */}
                {/* <Route path='/mural' component={Mural} /> */}
                {/* <Route path='/videos' component={Videos} /> */}
                {/* <Route path='/login' component={Login} /> */}
                <Route path='/links' component={Link}/>
                <Route exact path='/' exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}