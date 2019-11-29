import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Link from './pages/Links';
import Mural from './pages/Mural';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';

// Sub Pages
import Bullying from './pages/subpages/Bullying/index';
import Estresse from './pages/subpages/Estresse/index';
import Panico from './pages/subpages/Panico/index';
import Depressao from './pages/subpages/Depressao/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/mural' exact component={Mural} />
                <Route path='/mural/bullying' exact component={Bullying}></Route>
                <Route path='/mural/estresse' exact component={Estresse}></Route>
                <Route path='/mural/panico' exact component={Panico}></Route>
                <Route path='/mural/depressao' exact component={Depressao}></Route>

                <Route path='/videos' component={Videos} />
                <Route path='/links' component={Link}/>
                <Route exact path='/' exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}