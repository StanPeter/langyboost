import Home from "pages/Home";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminHome from "pages/AdminHome";
import Navbar from "components/Navbar";
import Login from "pages/Login";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
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
