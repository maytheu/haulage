import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { useDispatch } from "react-redux";
import { getViewProfile } from "store/auth";

const useStyles = makeStyles(styles);

export default function ViewProfileSection() {
  const classes = useStyles();

  const [profile, setProfile] = useState({admin:''});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getViewProfile()).then((res) => {
      if (res.payload === undefined) {
        //error
      } else {
        setProfile(res.payload);
      }
    });
  }, []);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Welcome {profile.admin.firstname} {profile.admin.lastname}</h2>
          <form>
            <GridContainer>
              <GridItem>
                <p className={classes.description}>
                  First Name: {profile.admin.firstname}
                </p>
              </GridItem>
              <GridItem>
                <p className={classes.description}>Email: {profile.admin.lastname}</p>
              </GridItem>
              <GridItem>
                <p className={classes.description}> Email: {profile.admin.email} </p>
              </GridItem>
              <GridItem>
                <p className={classes.description}> phone: {profile.admin.phone} </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Link to="/admin/edit">
                  <Button color="primary">Edit Profile</Button>
                </Link>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
