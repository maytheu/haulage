import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Parallax from "components/Parallax/Parallax";

const useStyles = makeStyles(styles);

export default function CarouselSection() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>Add new Carousel</h2>
              <h4 className={classes.description}>
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. You can track the your invoice by goods,
                tonnage, name and invoice number and know its delivery status We
                will responde get back to you in a couple of hours.
              </h4>
              <form>
                <GridContainer>
                  <GridItem>
                    <CustomInput
                      labelText="Invoice Number"
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary">Track Invoice</Button>
                  </GridItem>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
