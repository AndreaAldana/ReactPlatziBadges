import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Layout from './Layout'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import NotFound from '../pages/NotFound'

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
                <Route component={NotFound} />
            </Switch>
        </Layout>

    </BrowserRouter>

}

export default App;