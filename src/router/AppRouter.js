import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import GenresLayout from '../components/Layouts/GenresLayout/GenresLayout';
import HomeLayout from '../components/Layouts/HomeLayout/HomeLayout';
import SearchLayout from '../components/Layouts/SearchLayout/SearchLayout';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/search/:params" component={SearchLayout} />
                <Route exact path="/genres" component={GenresLayout} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
