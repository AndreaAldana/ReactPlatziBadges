import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Layout from './Layout'
import Home from '../pages/Home'


//Esto se puede hacer cuando no haya ningún otro método
//y que no se esté usando estado
function App() {
    return <BrowserRouter>
        <Layout>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/Home" component={Home} />
        </Layout>
    </BrowserRouter>
}

export default App;