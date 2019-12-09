import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { Provider } from 'react-redux';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar/navbar';
import NavbarContainer from './navbar/navbar_container';
import ProjectShowContainer from './projects/project_show/project_show_container';

// Purely functional component

const App = () => (
    <div>
        <NavbarContainer/>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
            {/* <ProtectedRoute exact path="/projects/new" component={SignUpFormContainer} /> */}
            <Route exact path="/category/:categoryId" component={Home} />
            <Route path="/" component={Home}/>
        </Switch>
    </div>
);

export default App;