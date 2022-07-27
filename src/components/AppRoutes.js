import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRoutes = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(useAuthState(auth))
    return user
    ? (
        <Switch>
            {privateRoutes.map(({path, Component, exact}) => <Route
                path={path} component={Component} exact={exact} key={path}
            />)}
            <Redirect to={'/chat'}/>
        </Switch>
        )
    : (
        <Switch>
            {publicRoutes.map(({path, Component, exact}) => <Route
                path={path} component={Component} exact={exact} key={path}
            />)}
            <Redirect to={'/login'}/>
        </Switch>
        )
};

export default AppRoutes;