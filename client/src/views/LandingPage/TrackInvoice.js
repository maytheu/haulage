import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TrackInvoiceSection from "./Sections/TrackInvoiceSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function TrackInvoice(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
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
      <Parallax filter image={require("assets/img/delivery.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Check your delivery status.</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TrackInvoiceSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
