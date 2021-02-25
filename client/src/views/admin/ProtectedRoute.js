import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { authAdmin } from "store/auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();

  //const [isAdmin, setIsAdmin] = useState(false);
  const admin = useSelector((state) => state.auth);


  /*useEffect(() => {
    dispatch(authAdmin())
    //.then((res) => {
      //if (res.payload !== undefined) {
        // <Redirect to="/admin_login" />

    /*  } else {
        console.log(res.payload);
        // setIsAdmin(true);
      }
  //  });
    // setIsAdmin(admin);
    
  }, []);*/
  console.log(admin);
  // console.log(admin);
  return (
    <Route
      {...rest}
      render={(props) =>
        admin.auth.success ? (
          //|| isAdmin.auth.success
          <Component {...props} />
        ) : (
          <Redirect to="/admin_login" />
        )
      }
    />
  );
}
