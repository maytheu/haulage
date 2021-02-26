import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Address from "./Address";

//import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function Contacts(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        brand="Adesuyi Transco Ventures"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/contact.jpeg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    {/* <img src={profile} alt="..." className={imageClasses} /> */}
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Adesuyi Transo Ventures</h3>
                    <h6>HAULAGE AND LOGISTICS SOLUTION</h6>
                    <a href="https://twitter.com/st_meto">
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                    </a>
                    <a href="https://www.instagram.com/maytheu98/">
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                    </a>
                    <a href="https://web.facebook.com/mautheu">
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </a>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                At Adesuyi Transco Ventures we provide state of the art
                solutions to haulage services locally and international, we
                solve the all your transport solution. Contactus via the above
                channel or walk in, lets have a pysical conversation
              </p>
            </div>
            <GridContainer justify="center"></GridContainer>
            <Address />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
