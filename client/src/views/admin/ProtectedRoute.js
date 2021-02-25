import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const admin = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        admin.auth.success ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  );
}
