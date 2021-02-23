import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { authAdmin } from "store/auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();

  const admin = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(admin);

  useEffect(() => {
    dispatch(authAdmin());
    setIsAdmin(admin);
  }, []);
console.log(isAdmin)
console.log(admin)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin.auth.isAuth || isAdmin.auth.success ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin_login" />
        )
      }
    />
  );
}
