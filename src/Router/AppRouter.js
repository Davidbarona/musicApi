import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import GenresLayout from '../Layouts/GenresLayout/GenresLayout';

import HomeLayout from '../Layouts/HomeLayout/HomeLayout'
import SearchLayout from '../Layouts/SearchLayout/SearchLayout';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomeLayout} />
                <Route exact path="/search" component={SearchLayout} />
                <Route exact path="/genres" component={GenresLayout} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
