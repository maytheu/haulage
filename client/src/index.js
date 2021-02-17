import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import store from "./store/store";

// pages for this product
import Components from "./views/Components/Components.js";
import TrackInvoice from "./views/LandingPage/TrackInvoice.js";
import Contacts from "./views/ProfilePage/Contacts.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import ResetPassword from "views/admin/ResetPassword.js";
import RecoverPassword from "views/admin/RecoverPassword.js";
import EditProfile from "views/admin/EditProfile.js";
import ViewProfile from "views/admin/ViewProfile.js";
import AddInvoice from "views/admin/AddInvoice.js";
import AddCarousel from "views/admin/AddCarousel.js";
import ProtectedRoute from "views/admin/ProtectedRoute";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <ProtectedRoute path="/admin_add_carousel" component={AddCarousel} />
        <ProtectedRoute path="/admin_add_invoice" component={AddInvoice} />
        <ProtectedRoute path="/admin_profile" component={ViewProfile} />
        <ProtectedRoute path="/admin_edit" component={EditProfile} />
        <Route path="/admin_recover" component={ResetPassword} />
        <Route path="/admin_reset" component={RecoverPassword} />
        <Route path="/contact" component={Contacts} />
        <Route path="/admin_login" component={LoginPage} />
        <Route path="/track_invoice" exact component={TrackInvoice} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
