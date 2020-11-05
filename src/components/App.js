import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Layout from './Layout'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import NotFound from '../pages/NotFound'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'

//Esto se puede hacer cuando no haya ningún otro método
//y que no se esté usando estado
function App() {

    return <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutUs" component={AboutUs} />
                /* Para ello vamos a trabajar con badges en especifico por lo que dben
                tener un id y aca en esta línea estamos declarando “:badgeId” como una
                variable que nos definira el Id de un badge al momento de editarlo, va
                 a ser un valor que si va a estar definido en la Url pero va a ser
                 genérico, puede ser el 1 el 2 el 3, eso no importa mucho. */
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                <Route component={NotFound} />
            </Switch>
        </Layout>

    </BrowserRouter>

}

export default App;