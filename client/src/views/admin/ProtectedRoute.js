import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { authAdmin } from "store/auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();

  const admin = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(admin);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(authAdmin());
    setIsLoading(false);
    setIsAdmin(admin);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin.auth.success ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin_login" />
        )
      }
    />
  );
}
