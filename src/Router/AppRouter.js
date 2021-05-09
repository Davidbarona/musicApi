import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import HomeLayout from '../Layouts/HomeLayout'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomeLayout} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
