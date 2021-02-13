import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ViewProfileSection from "views/LandingPage/Sections/ViewProfileSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ViewProfile(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Adesuyi Transco Ventures"
        rightLinks={<HeaderLinks admin={true} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <br />
          <ViewProfileSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
