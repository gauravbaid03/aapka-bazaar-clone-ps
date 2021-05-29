import React, { Component, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHeader from './navigation/header/AppHeader.js'
import AppContent from './homePage/AppContent.js'
import AppFooter from './navigation/footer/AppFooter.js'
import SignIn from './signin/SignIn.js'
import RegisterContent from './register/RegisterContent.js'
import Sidebar from './products/Sidebar.js'
import NotFound from './NotFound.js'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    render() {
        return(
            <div id="main">
                <AppHeader signin={ (isLoggedIn) => isLoggedIn ? 'Devinder' : 'SignIn'}/>
                <Router>
                <Suspense fallback = {<div>Please wait its loading..</div>}>
                    <Switch>
                        <Route path='/' exact={true}>
                            <AppContent />
                        </Route>
                        <Route path='/signin' exact={true}>
                            <SignIn />
                        </Route>
                        <Route path='/register' exact={true}>
                            <RegisterContent />
                        </Route>
                        <Route path='/products' exact={true}>
                            <Sidebar />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
                </Router>
                <AppFooter />
            </div>
        );
    }
}

export default App;