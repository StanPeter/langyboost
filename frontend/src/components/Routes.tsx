import Home from "pages/Home";
import Register from "pages/Register";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHome from "pages/AdminHome";
import Exp from "pages/Exp";
import Login from "pages/Login";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={AdminHome} />
            <Route exact path="/exp" component={Exp} />
        </Switch>
    );
};

export default Routes;
