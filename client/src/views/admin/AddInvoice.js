import React, { useEffect } from "react";
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
import InvoiceSection from "views/LandingPage/Sections/InvoiceSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AddInvoice(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const edit = props.match.params.number
  useEffect(()=>{
    
  },[edit])
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Adesuyi Transco Ventures"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <InvoiceSection edit={edit}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
