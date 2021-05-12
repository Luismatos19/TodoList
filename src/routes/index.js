import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/" component={Login} />
            <MyRoute exact path="/home" component={Home} />
            <MyRoute exact path="/register" component={Register} />
        </Switch>
    );
}
