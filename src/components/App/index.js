import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Auth from "../Auth";
import Contacts from "../Contacts";
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector((state) => state.application.isAuth);


    return isAuth ? <Switch>
            <Route path="/contacts">
                <Contacts/>
            </Route>
            <Redirect to="contacts"/>
        </Switch>
        :
        <Switch>
            <Route path="/auth">
                <Auth/>
            </Route>
            <Redirect to="auth"/>
        </Switch>
}

export default App;
