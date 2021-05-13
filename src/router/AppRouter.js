import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import GenresLayout from "../layouts/GenresLayout/GenresLayout";
import AlbumsLayout from "../layouts/AlbumsLayout/AlbumsLayout";
import SearchLayout from "../layouts/SearchLayout/SearchLayout";
import Prueba from "../Prueba/Prueba";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/genres" component={GenresLayout} />
                <Route exact path="/albums" component={AlbumsLayout} />
                <Route exact path="/search/:params" component={SearchLayout} />
                <Route exact path="/prueba" component={Prueba} />

                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
