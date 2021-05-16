import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminHome from "pages/AdminHome";
import Header from "components/Header";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/admin" component={AdminHome} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
