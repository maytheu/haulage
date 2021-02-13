import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import CarouselSection from "views/LandingPage/Sections/CarouselSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AddCarousel(props) {
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
      <div className={classes.container}>
        <CarouselSection />
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}
