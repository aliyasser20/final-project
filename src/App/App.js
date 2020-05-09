import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

import Layout from "./HOC/Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import DashboardPage from "./DashboardPage/DashboardPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import StudioPage from "./StudioPage/StudioPage";
import Loader from "./UI/Loader/Loader";

import "./App.scss";

const App = () => {
  const { isAuthenticated, loading } = useAuth0();

  const routes = (
    <Switch>
      <Route path="/" exact component={LandingPage}></Route>
      <Redirect to="/" />
    </Switch>
  );

  const guardedRoutes = (
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/studio" component={StudioPage} />
      <Route path="/profile" component={ProfilePage} />
      <Redirect to="/dashboard" />
    </Switch>
  );

  const appContent = loading ? (
    <div className="center">
      <Loader />
    </div>
  ) : (
    <Layout>
      <div className="App">{isAuthenticated ? guardedRoutes : routes}</div>
    </Layout>
  );

  return appContent;
};
export default App;
